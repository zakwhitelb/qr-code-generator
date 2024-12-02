// System
import { useState } from "react";

// Application imports
import { useGenerateQRCode } from "../../../app/useGenerateQRCode";

// Component
import { Form } from "./form/Form";
import { QRCodeView } from "../component/qr-code/QRCodeView"

function Home() {
    const { qrCode, extension, loading, setLoading, generateQRCode, state, dispatch } = useGenerateQRCode();
    const [dataQRCode, setDataQRCode] = useState({
        data: "", 
        size: 300,        
        filename: "qrcode",  
        error_correction: "H",  
        box_size: 10, 
        border: 4,
        fill_color: "black", 
        back_color: "white",         
        file_type: "png"
    });

    return (
        <>
            <div className="flex-grow flex justify-center items-center gap-[60px]">
                <Form dataQRCode={dataQRCode} setDataQRCode={setDataQRCode} qrCode={qrCode} loading={loading} setLoading={setLoading} generateQRCode={generateQRCode} state={state} dispatch={dispatch} />
                <QRCodeView qrCode={qrCode} loading={loading} extension={extension} />
            </div>
        </>
    )
}

export { Home };