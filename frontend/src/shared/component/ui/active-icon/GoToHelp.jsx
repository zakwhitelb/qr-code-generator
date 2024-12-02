// Sustheme
import { Link } from "react-router-dom"

// Icons
import { HelpIcon } from "../../../asset/icon/Help.icon";

function GoToHelp() {
    return (
        <>
            <Link to={"/help"}>
                <HelpIcon color={"var(--blue2white)"} width={34} height={34} />
            </Link>
        </>
    )
}

export { GoToHelp };