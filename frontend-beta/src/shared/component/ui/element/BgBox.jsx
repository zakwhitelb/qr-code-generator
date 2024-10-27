function BgBox({ width, height, rounded, color, children }) {
    // For handling custom styles dynamically
    const style = { 
        backgroundColor: color, 
        borderRadius: rounded // Dynamically set the border-radius
    };

    const widthClass = width === "full" || width === "screen" ? `w-${width}` : `w-[${width}]`;
    const heightClass = height === "full" || height === "screen" ? `h-${height}` : `h-[${height}]`;

    return (
        <div className={`flex items-center justify-center ${widthClass} ${heightClass}`} style={style}>
            {children}
        </div>
    );
}

export { BgBox };
