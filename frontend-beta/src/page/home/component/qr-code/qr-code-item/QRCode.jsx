import Image from "../../../asset/picture/QRCode.png";

function QRCode({ qrCode }) {
    return (
        <div className="w-[300px] h-[300px]">
            {qrCode ? (
                <img src={qrCode} alt="Generated QR Code" className="w-full h-full object-contain" />
            ) : (
                <img src={Image} alt="https://example.com" className="w-full h-full object-contain" />
            )}
        </div>
    );
}

export { QRCode };
