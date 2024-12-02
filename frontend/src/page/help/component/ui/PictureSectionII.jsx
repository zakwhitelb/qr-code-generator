// Pictures
import { Create1White } from "../../asset/picture/Create1White.pic";
import { Create2White } from "../../asset/picture/Create2White.pic";
import { Create3White } from "../../asset/picture/Create3White.pic";
import { Create4White } from "../../asset/picture/Create4White.pic";
import { Create1Black } from "../../asset/picture/Create1Black.pic";
import { Create2Black } from "../../asset/picture/Create2Black.pic";
import { Create3Black } from "../../asset/picture/Create3Black.pic";
import { Create4Black } from "../../asset/picture/Create4Black.pic";

// Context
import { useTheme } from "../../../../shared/store/Theme.context" 

function PictureSectionII({ nbrPic }) {
    const { theme } = useTheme();
    return (
        <div className="flex justify-center items-center w-full min-w-[450px] bg-[var(--skyBlue2white)] rounded-[20px] py-[15px]">
            {nbrPic === 1 ? 
                theme === "light" ?
                <Create1White />
            :
                <Create1Black />
            :nbrPic === 2 ?
                theme === "light" ?
                <Create2White />
            :
                <Create2Black />
            : nbrPic === 3?
                theme === "light" ?
                <Create3White />
            :
                <Create3Black />
            : nbrPic === 4?
                theme === "light" ?
                <Create4White />
            :
                <Create4Black />
            : 
                <div className="flex justify-center items-center">
                    <p className="text-[42px] text-center tect-[var(--red)]">Error!</p>
                </div>
            }
            
        </div>
    )
}

export { PictureSectionII };