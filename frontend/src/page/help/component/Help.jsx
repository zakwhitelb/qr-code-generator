// Style
import "../style/styleHelp.css"

// Components
import { SectionI } from "./element/sections/SectionI";
import { SectionII } from "./element/sections/SectionII";
import { Footer } from "./element/footer/Footer";

function Help() {
    return (
        <div className="grid overflow-y-scroll overflow-x-hidden pt-[60px] gap-[60px]">
            <SectionI />
            <SectionII />
            <Footer />
        </div>  
    )
}

export { Help };
