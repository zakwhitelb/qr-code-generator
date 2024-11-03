import { useState } from "react";

function FileFormat({ dataQRCode, handleChange }) {
    const [toggleInput, setToggleInput] = useState(false);
    const [clickedButton, setClickedButton] = useState(dataQRCode["fileFormat"] ? dataQRCode["fileFormat"] : null);
    const FILEFORMA = ["png", "jpeg", "svg", "pdf", "gif"];

    const handleFormatClick = (item) => {
        // Set clicked format
        setClickedButton(item);

        // Notify parent component
        handleChange("fileFormat", item);

        // Close the toggle
        setToggleInput(false);
    };

    return (
        <div className="px-[20px]">
            <p style={{ fontSize: "var(--20)" }} className="font-[pt-sans-regular] text-[var(--black2white)]">
                Choose file format
            </p>
            <div>
                <div
                    onClick={() => setToggleInput(!toggleInput)} // Explicitly toggle open/close
                    style={{ fontSize: `var(--18)` }}
                    className="mt-[5px] font-[noto-sans-light] text-[var(--black)] cursor-pointer"
                >
                    <div className="flex items-center justify-start w-full h-[40px] bg-[var(--skyBlue2white)] px-[20px] rounded-[10px]">
                        {clickedButton ? (
                            <p>{clickedButton}</p>
                        ) : (
                            <p>Choose a format</p>
                        )}
                    </div>
            
                    {toggleInput && (
                        <div 
                            className="flex justify-between transition-all gap-2 mt-[10px] duration-500 opacity-100"
                        >
                            {FILEFORMA.filter(item => item !== clickedButton).map(item => (
                                <div
                                    key={item}
                                    onClick={() => handleFormatClick(item)} // Call function to handle format selection and close toggle
                                    className="flex items-center w-full h-[40px] bg-[var(--skyBlue2white)] rounded-[10px] px-[15px] cursor-pointer"
                                > 
                                    <p className="w-full text-center">{item}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export { FileFormat };
