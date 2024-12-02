// Components
import { useCallback, useState } from "react";
import { About } from "../../asset/picture/About.pic"
import { SlideShowHide } from "./SlideShowHide";

function BoxContentSectionI() {
    const [clickedButton, setClickedButton] = useState("0")

    const handleClick = useCallback((buttonName) => {
        setClickedButton((prev) => {
            if (prev === buttonName) {
                return "0";
            }
            return buttonName;
        });
    }, []);

    return (
        <div className="flex justify-between bg-[var(--skyBlue2white)] rounded-[25px] p-[40px]">
            <About width={440} height={460} />
            <div className={`flex flex-col w-full ${clickedButton === "0" ? "h-fit" : "h-full"} pl-[40px] gap-[20px]`}>
                <SlideShowHide title={"What is QR Code"} clickedButton={clickedButton} handleClick={handleClick} buttonName="1">
                    QR Code is a two-dimensional version of the barcode, typically made up of black and white pixel patterns. Denso Wave, a Japanese subsidiary of the Toyota supplier Denso, developed them for marking components in order to accelerate logistics processes for their automobile production. Now, it has found its way into mobile marketing with the widespread adoption of smartphones. "QR" stands for "Quick Response", which refers to the instant access to the information hidden in the Code.
                </SlideShowHide>
                <SlideShowHide title={"What are the benefits of using QR Codes?"} clickedButton={clickedButton} handleClick={handleClick} buttonName="2">
                    They are gaining popularity because of their versatility. You can use them to gather feedback to improve your products or services, increase customer engagement with images or videos, or even promote your business via events and coupons. All of these can be done with just a single scan!
                </SlideShowHide>
                <SlideShowHide title={"How do I scan QR Codes?"} clickedButton={clickedButton} handleClick={handleClick} buttonName="3">
                    Depending on your device, you might already have a built-in QR Code reader or scanner. Open the camera app on your mobile phone and hold it over a Code for a few seconds until a notification pops up. If this doesn’t happen, check your settings and see if QR Code scanning is enabled. Still not working? Don’t worry, all you have to do now is install third-party QR Code readers from your app stores.
                </SlideShowHide>
            </div>
        </div>
    )
}

export { BoxContentSectionI };