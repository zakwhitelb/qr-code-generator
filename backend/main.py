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
    allow_origins=["*"],  # Set this to specific origins in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define a request model for the QR code parameters
class QRCodeRequest(BaseModel):
    data: str
    size: Optional[int] = 300  # Default size of 300px
    filename: Optional[str] = "qrcode"
    error_correction: Optional[str] = "H"  # Default error correction level
    box_size: Optional[int] = 10  # Default box size
    border: Optional[int] = 4  # Default border size
    fill_color: Optional[str] = "black"  # Default foreground color
    back_color: Optional[str] = "white"  # Default background color
    file_type: Optional[str] = "png"  # Default file type (png or svg)

# Function to map string to error correction level
def get_error_correction_level(level: str):
    levels = {
        "L": qrcode.constants.ERROR_CORRECT_L,
        "M": qrcode.constants.ERROR_CORRECT_M,
        "Q": qrcode.constants.ERROR_CORRECT_Q,
        "H": qrcode.constants.ERROR_CORRECT_H,
    }
    return levels.get(level.upper(), qrcode.constants.ERROR_CORRECT_H)  # Default to H

# Function to create a QR code
def create_qr_code(data: str, size: int = 300, error_correction: str = "H", box_size: int = 10, border: int = 4, fill_color: str = "black", back_color: str = "white", file_type: str = "png") -> BytesIO:
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
        # Create SVG image
        dwg = svgwrite.Drawing(profile='tiny', size=(size, size))
        
        # Get QR code matrix
        matrix = qr.get_matrix()
        
        # Calculate the size of each box in the QR code
        box_size_svg = size / (len(matrix) + border * 2)
        
        # Draw background first
        dwg.add(dwg.rect(insert=(0, 0), size=(size, size), fill=back_color))  # Background

        # Create the QR code in the SVG
        for r, row in enumerate(matrix):
            for c, cell in enumerate(row):
                if cell:  # If the cell is part of the QR code
                    dwg.add(dwg.rect(insert=(c * box_size_svg + border * box_size_svg, r * box_size_svg + border * box_size_svg),
                                      size=(box_size_svg, box_size_svg),
                                      fill=fill_color))
        
        # Save the SVG content to a string
        svg_content = dwg.tostring()
        
        # Write the SVG content as bytes to the BytesIO object
        img_io.write(svg_content.encode('utf-8'))  # Encode string to bytes
        img_io.seek(0)  # Move to the beginning of the BytesIO stream
    else:
        img = qr.make_image(fill_color=fill_color, back_color=back_color)  # Set fill and back colors
        img = img.resize((size, size), Image.LANCZOS)
        
        # Save the image into a BytesIO object
        if file_type.lower() == "jpeg":
            img = img.convert("RGB")
            img.save(img_io, format='jpeg')
        else:
            img.save(img_io, format=file_type.lower())
        img_io.seek(0)

    return img_io

# Endpoint to generate a QR code
# Endpoint to generate a QR code
@app.post("/generate-qr")
async def generate_qr(request: QRCodeRequest):
    try:
        print("Received request:", request.dict())
        
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
        if file_type == "svg":
            media_type = "image/svg+xml"
        elif file_type == "jpeg" or file_type == "jpg":
            media_type = "image/jpeg"
        elif file_type == "png":
            media_type = "image/png"
        elif file_type == "bmp":
            media_type = "image/bmp"
        elif file_type == "gif":
            media_type = "image/gif"
        elif file_type == "webp":
            media_type = "image/webp"
        else:
            raise HTTPException(status_code=400, detail="Unsupported file type requested")

        img_io.seek(0)  # Ensure we’re at the start of the BytesIO stream
        return StreamingResponse(img_io, media_type=media_type, headers={
            "Content-Disposition": f"attachment; filename={request.filename}.{file_type}"
        })
        
    except Exception as e:
        print("Error:", e)  # Log the exact error
        raise HTTPException(status_code=500, detail=str(e))


