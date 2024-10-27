// System imports
import { useReducer } from "react";

// Function imports
import { isValidLink } from "../../../../../shared/function/Generale";

// Store imports
import { reducerLod, initialStateLod } from "../../../../../shared/store/Loding.reducer"

// Component imports
import { Button } from "../../../../../shared/component/ui/element/Button";

function ButtonForm({ data, dispatch, loading, setLoading, dataQRCode, generateQRCode }) {
    const [state, dispatchLod] = useReducer(reducerLod, initialStateLod);

    const submitButton = () => {
        const { link, bgColor, qrCodeColor, fileFormat } = dataQRCode;

        if (link === "" || bgColor === "" || qrCodeColor === "" || fileFormat === "") {
            dispatch({ type: "0004" });
        }
        else {
            if (!isValidLink(link)) {
                dispatch({ type: "0001" });
                return;
            } 
            else if (bgColor === qrCodeColor) {
                dispatch({ type: "0005" });
                return;
            }
            dispatchLod({ type: "SET_TRUE" });
        }
    };

    return (
        <div onClick={submitButton}>
            <Button text={"Generate QR Code"} loading={state.existing} />
        </div>
    );
}


export { ButtonForm };
