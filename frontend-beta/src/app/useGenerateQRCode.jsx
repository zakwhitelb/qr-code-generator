// System imports
import { useState, useCallback, useEffect, useReducer } from "react";
import axios from 'axios';

// Store imports
import { reducer, initialState } from "../shared/store/Error.reducer";

function useGenerateQRCode() {
    const [qrCode, setQRCode] = useState(null);
    const [loading, setLoading] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.existing) setLoading(false);
    }, [state]);

    const generateQRCode = useCallback(async (dataQRCode) => {
        if (!state.existing) {
            setLoading(true);
            try {
                // Post request to the backend to generate the QR code
                const response = await axios.post('http://localhost:8000/generate-qr', dataQRCode, {
                    headers: {
                        'Content-Type': 'application/json',  // Correct header for JSON data
                    },
                    responseType: 'blob'
                });                

                // Create a URL for the image from the response data
                const imageUrl = URL.createObjectURL(new Blob([response.data]));
                setQRCode(imageUrl);
                setLoading(false);
                console.log("goooooooooooood!!!!!!!!!!!")
            } catch (error) {
                dispatch({ type: "catch-error", error: error.message || 'Unknown error occurred' });
                setLoading(false);
            }
        } else {
            dispatch({ type: '0004' });
            setLoading(false);
        }
    }, [state]);

    return {
        qrCode,
        loading,
        setLoading,
        generateQRCode,
        state,          // Expose state
        dispatch,       // Expose dispatch
    };
}

export { useGenerateQRCode };
