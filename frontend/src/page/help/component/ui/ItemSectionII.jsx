// Components
import { PictureSectionII } from "./PictureSectionII"
import { ParagraphSectionII } from "./ParagraphSectionII"

function ItemSectionII({ title, children, nbrPic, side }) {
    return (
        <div className="flex justify-between items-center gap-[180px] autoShow">
            {side === "left" && 
                <ParagraphSectionII title={title} side={side} >
                    {children}
                </ParagraphSectionII>
            }
            <PictureSectionII nbrPic={nbrPic} />
            {side === "right" && 
                <ParagraphSectionII title={title} side={side} >
                    {children}
                </ParagraphSectionII>
            }
        </div>
    )
}

export { ItemSectionII }
