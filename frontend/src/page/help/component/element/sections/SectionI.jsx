// Components
import { Title } from "../../ui/Title";
import { BoxContentSectionI } from "../../ui/BoxContentSectionI";

function SectionI() {
    return (
        <div className="grid gap-[30px] px-[60px]">
            <Title title={"What should I know about QR Codes?"} />
            <BoxContentSectionI />
        </div>
    )
}

export { SectionI };