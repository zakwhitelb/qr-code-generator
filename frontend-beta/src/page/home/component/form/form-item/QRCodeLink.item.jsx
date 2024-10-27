function QRCodeLink({ dataQRCode, handleChange }) {
    return (
        <>
            <div className="block w-full gap-y-[5px] px-[20px]">
                <label style={{ fontSize: `var(--20)` }} className="font-[pt-sans-regular] text-[var(--black2white)]" htmlFor="link-qr-code">Enter your link her</label>
                <input  
                    type="url" 
                    onChange={(e) => handleChange("link", e.target.value)}
                    style={{ fontSize: `var(--18)` }} 
                    value={dataQRCode["link"] ? dataQRCode["link"] : ""}
                    className="w-full h-[40px] bg-[var(--skyBlue2white)] rounded-[10px] px-[20px] mt-[5px] font-[noto-sans-light] text-[var(--black)] placeholder:text-[var(--gray)] focus:shadow-none focus:border-none active:border-none focus:outline-none" 
                    placeholder="https://example.com" 
                    pattern="https://.*" 
                    name="link-qr-code"
                />
                <div id="error-link-qr-code"></div>
            </div>
        </>
    )
}

export { QRCodeLink };