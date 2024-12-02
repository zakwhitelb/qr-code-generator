// Components
import { Logo } from "../ui/active-icon/Logo";
import { GoToHelp } from "../ui/active-icon/GoToHelp";
import { ChangeTheme } from "../ui/active-icon/ChangeTheme";

function Header() {
    return (
        <>
            <div className=" flex items-center justify-center align-middle overflow-hidden w-full border-b-4 border-[var(--blue2white)] px-[60px] py-[18px]">
                <Logo />
                <div className="absolute flex right-[60px] gap-[20px]">
                    <GoToHelp />
                    <ChangeTheme />
                </div>
            </div>
        </>
    )
}

export { Header };