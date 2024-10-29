// System imports
import { useState, useCallback, useReducer } from "react";

// Application imports
import { useFileConverter } from "../../../../app/useFileConverter";

// Store imports
import { reducer, initialState } from "../../../../shared/store/Error.reducer"

// Component imports
import { Menu } from "./form-item/Menu";
import { QRCodeLink } from "../form/form-item/QRCodeLink.item";
import { Colors } from "../form/form-item/Colors.item";
import { FileFormat } from "../form/form-item/FileFormat.item";
import { ButtonForm } from "./form-item/ButtonForm";

function Form() {
    const { data, loading, setLoading, generateQRCode } = useFileConverter();
    const [isClicked, setButtonClicked] = useState("Link");
    const [state, dispatch] = useReducer(reducer, initialState);
    const [dataQRCode, setDataQRCode] = useState({
        link: "",
        bgColor: "var(--transparent)",
        qrCodeColor: "var(--black)",
        fileFormat: "png",
    });

    const handleChange = useCallback((name, value) => {
        setDataQRCode((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        dispatch({ type: "clear" });
    }, []);

    console.log(dataQRCode)

    const Error = () => {
        if (state && state.existing === true) {
            return <p style={{fontSize: "var(--16)"}} className="font-[pt-sans-regular] text-[var(--red)] text-center mb-[5px]">{state.message}</p>;
        }
        return null;
    };

    return (
        <div className="relative w-[calc(50vw-90px)] h-[calc(100vh-240px)] my-[80px] gap-[20px]">
            <h1 className="font-[montserrat-bold] text-[var(--black2white)] text-center" style={{ fontSize: 'var(--48)' }}>
                QR Code Generator
            </h1>

            <div className="mt-[20px]">
                <Menu isClicked={isClicked} setButtonClicked={setButtonClicked} />
            </div>

            <div className="mt-[30px]">
                {isClicked === "Link" && <QRCodeLink error={state} dataQRCode={dataQRCode} handleChange={handleChange} />}
                {isClicked === "Color" && <Colors error={state} dataQRCode={dataQRCode} handleChange={handleChange} />}
                {isClicked === "File format" && <FileFormat error={state} dataQRCode={dataQRCode} handleChange={handleChange} />}
            </div>

            <div className="absolute bottom-0 w-full">
                <div className="w-full">
                    <Error />
                </div>
                <ButtonForm data={data} dispatch={dispatch} loading={loading} setLoading={setLoading} dataQRCode={dataQRCode} generateQRCode={generateQRCode} />
            </div>
        </div>
    );
}


export { Form };
