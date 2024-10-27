// System imports
import { useState, useCallback, useEffect, useReducer } from "react";
// import axios from 'axios';

// Store imports
import { reducer, initialState } from "../shared/store/Error.reducer"

function useGenerateQRCode() {
    const [qrCode, setQRCode] = useState(null);
    const [loading, setLoading] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.existing) setLoading(false);
    }, [state]);

    const generateQRCode = useCallback(async (dataQRCode) => {
        if (!state.existing && dataQRCode) {
            setLoading(true);
            try {
                const response = ""; // Mock response or make your API request
                // await axios.post('http://localhost:8000/convert', formData, {
                //     headers: {
                //         'Content-Type': 'multipart/form-data',
                //     },
                // });
                setQRCode(response.data.message);
                setLoading(false);
            } catch (error) {
                dispatch({ type: "catch-error", error: error.message || 'Unknown error occurred' });
                setLoading(false);
            }
        } else {
            dispatch({ type: '0004' });
        }
    }, [state]);

    return {
        qrCode,
        loading,
        setLoading,
        generateQRCode,
    };
}

export { useGenerateQRCode };
