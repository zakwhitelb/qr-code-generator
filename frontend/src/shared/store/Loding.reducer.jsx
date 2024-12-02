export const initialStateLod = { existing: false };

export const reducerLod = (state, action) => {
    switch (action.type) {
        case "SET_TRUE":
            return { existing: true };
        case "SET_FALSE":
            return { existing: false };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};
