// Systheme
import { useInsertionEffect } from "react";

// Context
import { useTheme } from "../../../store/Theme.context";

// Icons
import { DarkModeIcon } from "../../../asset/icon/DarkMode.icon";
import { LightModeIcon } from "../../../asset/icon/LightMode.icon";

function ChangeTheme() {
    const { theme, setTheme } = useTheme();

    useInsertionEffect(() => {
        document.querySelector("body").style.backgroundColor = "var(--white2black)";
    }, []);

    return (
        <div
            className="relative w-[34px] cursor-pointer"
            onClick={() => setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))}
        >
            {/* Light Mode Icon */}
            <div
                className={`absolute transition-opacity duration-500 ease-linear ${
                    theme === "light" ? "translate-y-0 opacity-100" : " opacity-0"
                }`}
            >
                <LightModeIcon color="var(--blue)" width={34} height={34} />
            </div>

            {/* Dark Mode Icon */}
            <div
                className={`absolute transition-opacity duration-500 ease-linear ${
                    theme === "dark" ? "opacity-100" : "opacity-0"
                }`}
            >
                <DarkModeIcon color="var(--white)" width={34} height={34} />
            </div>
        </div>
    );
}

export { ChangeTheme };
