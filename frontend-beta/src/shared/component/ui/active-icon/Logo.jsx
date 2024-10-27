import { Link } from "react-router-dom";

// Icons
import { LogoIcon } from "../../../asset/icon/Logo.icon"

function Logo() {

    return (
        <>
            <Link to={"/"}>
                <LogoIcon color={"var(--blue2white)"} width={176} height={40} />
            </Link>
        </>
    )
}

export { Logo };