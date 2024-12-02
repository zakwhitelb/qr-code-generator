import { useEffect, useState } from "react";
import Image from "../../../asset/picture/QRCode.png";

function QRCode({ qrCode, extension }) {
    const [svgContent, setSvgContent] = useState("");

    useEffect(() => {
        // Check if the qrCode is a Blob and if it's SVG
        if (qrCode && extension === "svg" && qrCode instanceof Blob) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSvgContent(reader.result); // Set the SVG content once loaded
            };
            reader.readAsText(qrCode); // Read the Blob as text (SVG content)
        }
    }, [qrCode, extension]);

    console.log("View:", qrCode);

    return (
        <div className="w-[300px] h-[300px]">
            {qrCode ? (
                extension === "pdf" ? (
                    <iframe
                        src={URL.createObjectURL(qrCode)} // Handle Blob URL for PDF
                        title="Generated QR Code PDF"
                        width="100%"
                        height="500px"
                    />
                ) : extension === "svg" ? (
                    svgContent ? (
                        <div
                            className="w-full h-full"
                            dangerouslySetInnerHTML={{
                                __html: svgContent, // Inject SVG content
                            }}
                        />
                    ) : (
                        <p>Loading SVG...</p> // Placeholder while SVG is loading
                    )
                ) : (
                    <img
                        src={URL.createObjectURL(qrCode)} // Handle Blob URL for images
                        alt="Generated QR Code"
                        className="w-full h-full object-contain"
                    />
                )
            ) : (
                <img
                    src={Image}
                    alt="Placeholder QR Code"
                    className="w-full h-full object-contain"
                />
            )}
        </div>
    );
}

export { QRCode };
