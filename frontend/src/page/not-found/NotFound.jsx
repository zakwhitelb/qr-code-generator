// Pictures
import { NotFoundWhite } from "./asset/picture/NotFoundWhite";
import { NotFoundBlack } from "./asset/picture/NotFoundBlack";

// Context
import { useTheme } from "../../shared/store/Theme.context";


function NotFound() {
  const { theme } = useTheme();

  return (
    <div className="flex-grow flex justify-center items-center h-full">
      {theme === "light" ?
        <NotFoundWhite width={494} height={419} />
      :
        <NotFoundBlack width={494} height={419} />
      }
    </div>
  )
}

export { NotFound };