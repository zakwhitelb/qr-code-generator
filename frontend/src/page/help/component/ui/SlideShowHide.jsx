// Icons
import { BottomArrow } from "../../asset/icon/BottomArrow.icon"

function SlideShowHide({ title, children, clickedButton, handleClick, buttonName }) {
    return (
        <div className={`flex flex-col ${clickedButton === buttonName && "h-full"} gap-[15px] text-[var(--black)]`}>
            <div 
                className="flex items-center justify-between h-fit pr-[20px] pb-[10px] border-b-[2px] border-b-[var(--black)] cursor-pointer"
                onClick={() => {handleClick(buttonName)}}
            >
                <h2 className="text-[24px] font-[noto-sans-semi-bold]">
                    {title}
                </h2>
                <BottomArrow color={"var(--black)"} width={13} height={8} />
            </div>

            {clickedButton === buttonName &&
                <div className="flex-grow h-full px-[5px]">
                    <p className="text-[18px] text-center font-[noto-sans-light]">
                        {children}
                    </p>
                </div>
            }
            
        </div>
    )
}

export { SlideShowHide };