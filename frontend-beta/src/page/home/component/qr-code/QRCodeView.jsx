// System imports
import { useReducer } from "react";

// Store imports
import { reducerLod, initialStateLod } from "../../../../shared/store/Loding.reducer";

// Component imports
import { BgBox } from "../../../../shared/component/ui/element/BgBox";
import { QRCode } from "./qr-code-item/QRCode";
import { Loading } from "../../../../shared/component/loading/Loading";

function QRCodeView({ qrCode, loading }) {
    const [stateLod] = useReducer(reducerLod, initialStateLod);

    return (
        <BgBox width={"calc(50vw-90px)"} height={"calc(100vh-240px)"} rounded={"24px"} color={"var(--skyBlue2white)"}>
            {loading || stateLod.existing ? (
                <div className="flex items-center justify-center w-full h-full">
                    <div className="w-[100px] h-[100px]">
                        <Loading color={"var(--blue2black)"} width={100} height={100} />
                    </div>
                </div>
            ) : (
                <QRCode qrCode={qrCode} />
            )}
        </BgBox>
    );
}

export { QRCodeView };
