function ParagraphSectionII({ title, children, side }) {
    return (
        <div className={`min-w-[450px] w-full text-[var(--black2white)] ${side === "right" && "text-right"}`}>
            <div>
                <h3 className="text-[24px] font-[noto-sans-semi-bold]">
                    {title}
                </h3>
            </div>
            <div>
                <p className="text-[18px] font-[noto-sans-light]">
                    {children}
                </p>
            </div>
        </div>
    )
}

export { ParagraphSectionII };
