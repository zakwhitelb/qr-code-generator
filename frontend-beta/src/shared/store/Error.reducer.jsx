// counterReducer.js
export const initialState = { existing: false, message: "" };

export const reducer = (state, action) => {
    switch (action.type) {
        case "0001":
            return { existing: true, message: 'This is not a link!'};
        case "0002":
            return { existing: true, message: 'Error in create the QR Code!'};
        case "0003":
            return { existing: true, message: 'Error in download the QR Code!'};
        case "0004":
            return { existing: true, message: 'No data to convert!'};
        case "0005":
            return { existing: true, message: 'The QR code and it background have the same color!'};
        case "0006":
            return { existing: true, message: 'No file forma!'};
        case "0000":
            return { existing: true, message: action.error};
        case "catch-error":
            return { existing: true, message: action.error};
        case "clear":
            return { existing: false, message: ""};
        default:
            throw new Error();
        }
};
