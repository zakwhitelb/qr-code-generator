// Components
import { Logo } from "../ui/active-icon/Logo";
import { GoToHelp } from "../ui/active-icon/GoToHelp";
import { ChangeTheme } from "../ui/active-icon/ChangeTheme";

function Header() {
    return (
        <>
            <div className="relative flex items-center justify-center align-middle overflow-hidden w-full h-[80px] border-b-4 border-[var(--blue2white)] px-[60px]">
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