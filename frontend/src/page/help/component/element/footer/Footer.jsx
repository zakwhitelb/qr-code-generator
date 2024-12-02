// Icons
import { Logo } from "../../../../../shared/component/ui/active-icon/Logo";

function Footer() {
    return (
        <div className="text-[var(--blue2white)]">
            <div className="flex justify-around items-center w-full border-t-[4px] border-[var(--blue2white)] py-[45px]">
                <div className="grid items-center align-middle w-[380px] gap-[10px]">
                    <div className="flex justify-center w-full">
                        <Logo />
                    </div>
                    <div className="grid gap-[5px]">
                        <p className="text-[14px] text-center font-[noto-sans-light]">
                            QR Code Generator lets you create memorable marketing campaigns with trackable QR Codes—designed by you.
                        </p>
                        <span className="text-center text-[12px] font-[noto-sans-medium]">
                            Made with Zack white  in Morocco
                        </span>
                    </div>
                </div>
                <div className="grid gap-[12px]">
                    <h4 className="text-[16px] font-[noto-sans-medium]">
                        Connect with us
                    </h4>
                    <div className="flex justify-between items-center gap-x-[10px]">
                        <div className="w-[24px] h-[24px] bg-[var(--white)] rounded-full"></div>
                        <div className="w-[24px] h-[24px] bg-[var(--white)] rounded-full"></div>
                        <div className="w-[24px] h-[24px] bg-[var(--white)] rounded-full"></div>
                        <div className="w-[24px] h-[24px] bg-[var(--white)] rounded-full"></div>
                        <div className="w-[24px] h-[24px] bg-[var(--white)] rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit pb-[15px]">
                <p className="text-center text-[10px] font-[noto-sans-light] ">
                    © qrgenerator.com 2024,QR Code is a registered trademark of Zack White in the Morocco and other countries.
                </p>
            </div>
        </div>
    )
}

export { Footer };