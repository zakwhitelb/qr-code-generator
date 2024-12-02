// System imports
import { useReducer } from "react";

// Function imports
import { isValidLink } from "../../../../../shared/function/Generale";

// Store imports
import { reducerLod, initialStateLod } from "../../../../../shared/store/Loding.reducer"

// Component imports
import { Button } from "../../../../../shared/component/ui/element/Button";

function ButtonForm({ qrCode, dispatch, loading, setLoading, dataQRCode, generateQRCode }) {
    const [state, dispatchLod] = useReducer(reducerLod, initialStateLod);

    const submitButton = () => {
        const { data, back_color, fill_color, fileFormat } = dataQRCode;
        
        if (!state.existing && (data === "" || back_color === "" || fill_color === "" || fileFormat === "")) {
            dispatch({ type: "0004" });
            setLoading(false)
        }
        else {
            if (!isValidLink(data)) {
                dispatch({ type: "0001" });
                return;
            } 
            else if (back_color === fill_color) {
                dispatch({ type: "0005" });
                return;
            }
            else if (fileFormat === "") {
                dispatch({ type: "0006" });
                return;
            }
            dispatchLod({ type: "SET_TRUE" });
            dispatch({ type: "clear" });
            generateQRCode(dataQRCode)
        }
    };

    return (
        <div onClick={submitButton}>
            <Button text={"Generate QR Code"} loading={loading} />
        </div>
    );
}


export { ButtonForm };
