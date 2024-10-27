function Colors({ dataQRCode, handleChange }) {
    const COLORITEM = ["red", "black", "gray", "blue", "red2", "black2", "gray2", "blue2"];
    const COLORS = {
        red: "var(--transparent)",
        black: "var(--black)",
        gray: "var(--gray)",
        blue: "var(--blue)",
        red2: "#C24530",
        black2: "var(--black)",
        gray2: "var(--gray)",
        blue2: "var(--blue)",
    }
    return (
        <>
            <div>
                <div>
                    <div>
                        <p style={{ fontSize: `var(--20)` }} className="font-[pt-sans-regular] text-[var(--black2white)]">Background Color</p>
                    </div>

                    <div className="flex items-center justify-between px-[10px] mt-[5px] gap-[10px]">
                        {COLORITEM.map((item) => (
                            <div
                                key={item}
                                onClick={() => handleChange("bgColor", COLORS[item])}
                                className={`bg-[${COLORS[item]}] w-[34px] h-[34px] rounded-[7px] border-[2px] border-[var(--skyBlue2white)] cursor-pointer ${
                                    dataQRCode["bgColor"] === COLORS[item] && "w-[40px] h-[40px]"
                                }`}
                            ></div>
                        ))}
                    </div>
                </div>
                <div>
                    <div>
                        <p style={{ fontSize: `var(--20)` }} className="font-[pt-sans-regular] text-[var(--black2white)]">QR Code Color</p>
                    </div>

                    <div className="flex items-center justify-between px-[10px] mt-[5px] gap-[10px]">
                        {COLORITEM.map((item) => (
                            <div
                                key={item}
                                onClick={() => handleChange("qrCodeColor", COLORS[item])}
                                className={`bg-[${COLORS[item]}] w-[34px] h-[34px] rounded-[7px] border-[2px] border-[var(--skyBlue2white)] cursor-pointer ${
                                    dataQRCode["qrCodeColor"] === COLORS[item] && "w-[40px] h-[40px]"
                                }`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export { Colors };