// System
import { Link } from "react-router-dom";

// Components
import { Title } from "../../ui/Title";
import { ItemSectionII } from "../../ui/ItemSectionII";
import { Button } from "../../../../../shared/component/ui/element/Button";

function SectionII() {
    return (
        <div className="grid gap-[30px]">
            <Title title={"How do I create a free QR Code?"} />
            <div className="grid gap-[60px] px-[60px]">
                <ItemSectionII title={"Fill in the details"} nbrPic={1} side={"left"}>
                    Enter all the information needed in the fields that appear. 
                </ItemSectionII>
                <ItemSectionII title={"Design your QR code"} nbrPic={2} side={"right"}>
                    Customize the style and color of your free generated QR code to match your branding.
                </ItemSectionII>
                <ItemSectionII title={"Chose a file extension"} nbrPic={3} side={"left"}>
                    Download the QR code image in your preferred file type. Or, upload it to any Adobe Express project to keep editing.
                </ItemSectionII>
                <ItemSectionII title={"Download the QR Code"} nbrPic={4} side={"right"}>
                    Tap the Download button. The image instantly changes to show your new QR code.
                </ItemSectionII>
                <div className="flex justify-center items-center w-full h-fit autoShow">
                    <Link to={"/"}>
                        <Button text={"Create your QR Code now"} toHome />
                    </Link>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export { SectionII };