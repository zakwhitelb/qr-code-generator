# main.py
from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel, Field
import qrcode
from PIL import Image
from io import BytesIO
from typing import Optional

app = FastAPI()

# Define a request model for the QR code parameters
class QRCodeRequest(BaseModel):
    data: str
    size: Optional[int] = 300  # Default size of 300px
    filename: Optional[str] = "qrcode.png"
    error_correction: Optional[str] = "H"  # Default error correction level
    box_size: Optional[int] = 10  # Default box size
    border: Optional[int] = 4  # Default border size
    fill_color: Optional[str] = "black"  # Default foreground color
    back_color: Optional[str] = "white"  # Default background color

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
def create_qr_code(data: str, size: int = 300, error_correction: str = "H", box_size: int = 100, border: int = 4, fill_color: str = "black", back_color: str = "white") -> BytesIO:
    qr = qrcode.QRCode(
        version=1,
        error_correction=get_error_correction_level(error_correction),
        box_size=box_size,
        border=border,
    )
    qr.add_data(data)
    qr.make(fit=True)
    
    img = qr.make_image(fill_color=fill_color, back_color=back_color)  # Set fill and back colors
    img = img.resize((size, size), Image.LANCZOS)
    
    # Save the image into a BytesIO object
    img_io = BytesIO()
    img.save(img_io, format='PNG')
    img_io.seek(0)
    return img_io

# Endpoint to generate a QR code
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
            request.back_color
        )
        # Return the QR code image as a StreamingResponse
        return StreamingResponse(img_io, media_type="image/png", headers={
            "Content-Disposition": f"attachment; filename={request.filename}"
        })
    except Exception as e: 
        raise HTTPException(status_code=500, detail=str(e)) 