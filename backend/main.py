# main.py

from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import qrcode
from PIL import Image
from io import BytesIO
import svgwrite
from typing import Optional

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class QRCodeRequest(BaseModel):
    data: str
    size: Optional[int] = 300
    filename: Optional[str] = "qrcode"
    error_correction: Optional[str] = "H"
    box_size: Optional[int] = 10
    border: Optional[int] = 4
    fill_color: Optional[str] = "black"
    back_color: Optional[str] = "white"
    file_type: Optional[str] = "png"

def get_error_correction_level(level: str):
    levels = {
        "L": qrcode.constants.ERROR_CORRECT_L,
        "M": qrcode.constants.ERROR_CORRECT_M,
        "Q": qrcode.constants.ERROR_CORRECT_Q,
        "H": qrcode.constants.ERROR_CORRECT_H,
    }
    return levels.get(level.upper(), qrcode.constants.ERROR_CORRECT_H)

def create_qr_code(data: str, size: int, error_correction: str, box_size: int, border: int, fill_color: str, back_color: str, file_type: str) -> BytesIO:
    qr = qrcode.QRCode(
        version=1,
        error_correction=get_error_correction_level(error_correction),
        box_size=box_size,
        border=border,
    )
    qr.add_data(data)
    qr.make(fit=True)

    img_io = BytesIO()

    if file_type.lower() == "svg":
        try:
            dwg = svgwrite.Drawing(profile='tiny', size=(size, size))
            matrix = qr.get_matrix()
            box_size_svg = size / (len(matrix) + border * 2)
            dwg.add(dwg.rect(insert=(0, 0), size=(size, size), fill=back_color))
            for r, row in enumerate(matrix):
                for c, cell in enumerate(row):
                    if cell:
                        dwg.add(dwg.rect(insert=(c * box_size_svg + border * box_size_svg, r * box_size_svg + border * box_size_svg),
                                         size=(box_size_svg, box_size_svg),
                                         fill=fill_color))
            svg_content = dwg.tostring()
            img_io.write(svg_content.encode('utf-8'))
            img_io.seek(0)
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"SVG generation error: {e}")

    else:
        img = qr.make_image(fill_color=fill_color, back_color=back_color)
        img = img.resize((size, size), Image.LANCZOS)

        try:
            if file_type.lower() == "pdf":
                img = img.convert("RGB")
                img.save(img_io, format="PDF")
            elif file_type.lower() in ["jpeg", "jpg"]:
                img = img.convert("RGB")
                img.save(img_io, format="JPEG")
            elif file_type.lower() == "gif":
                img = img.convert("P")
                img.save(img_io, format="GIF")
            else:
                img.save(img_io, format=file_type.upper())

            img_io.seek(0)
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Image format '{file_type}' error: {e}")

    return img_io

@app.post("/generate-qr")
async def generate_qr(request: QRCodeRequest):
    try:
        img_io = create_qr_code(
            request.data,
            request.size,
            request.error_correction,
            request.box_size,
            request.border,
            request.fill_color,
            request.back_color,
            request.file_type
        )
        
        file_type = request.file_type.lower()
        media_types = {
            "svg": "image/svg+xml",
            "jpeg": "image/jpeg",
            "jpg": "image/jpeg",
            "png": "image/png",
            "gif": "image/gif",
            "pdf": "application/pdf"
        }
        media_type = media_types.get(file_type)
        if not media_type:
            raise HTTPException(status_code=400, detail="Unsupported file type requested")

        return StreamingResponse(img_io, media_type=media_type, headers={
            "Content-Disposition": f"attachment; filename={request.filename}.{file_type}"
        })
        
    except HTTPException as e:
        raise e
    except Exception as e:
        print("Unexpected error:", e)
        raise HTTPException(status_code=500, detail=str(e))
