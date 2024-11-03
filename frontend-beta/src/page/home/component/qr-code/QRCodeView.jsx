// System imports
import { useReducer } from "react";

// Store imports
import { reducerLod, initialStateLod } from "../../../../shared/store/Loding.reducer";

// Component imports
import { BgBox } from "../../../../shared/component/ui/element/BgBox";
import { QRCode } from "./qr-code-item/QRCode";
import { Loading } from "../../../../shared/component/loading/Loading";

// Icons
import { DownloadIcon } from "../../asset/icon/DownloadIcon";

function QRCodeView({ qrCode, loading, extension }) {
    const [stateLod] = useReducer(reducerLod, initialStateLod);

    // Function to handle QR code download
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(new Blob([qrCode]));
        link.download = 'QRCode.' + extension;
        link.click();
    };

    return (
        <BgBox width={"calc(50vw-90px)"} height={"calc(100vh-240px)"} rounded={"24px"} color={"var(--skyBlue2white)"}>
            {loading || stateLod.existing ? (
                <div className="flex items-center justify-center w-full h-full">
                    <div className="w-[100px] h-[100px]">
                        <Loading color={"var(--blue2black)"} width={100} height={100} />
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <QRCode qrCode={qrCode} />
                    {qrCode && (
                        <button
                            onClick={handleDownload}
                            className="absolute flex justify-center items-center w-[80px] h-[80px] bg-[var(--blue)] rounded-full opacity-50 hover:opacity-100 transition duration-500"
                        >
                            <DownloadIcon width={40} height={40} fillColor={"var(--white)"} />
                        </button>
                    )}
                </div>
            )}
        </BgBox>
    );
}

export { QRCodeView };
