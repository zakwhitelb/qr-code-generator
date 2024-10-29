// Icons
import { LoadingIcon } from "../../asset/icon/Loading.icon";

function Loading({ color, width, height }) {
    return (
        <>
            <div className="w-full h-full animate-spin">
                <LoadingIcon color={color} width={width} height={height} />
            </div>
        </>
    )
}

export { Loading };
