import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive"

const moon = "logos/modes/moon.svg"
const sun = "logos/modes/sun.svg"

const Header = () => {
    const [scrModeDark, setScrModeDark] = useState(true);
    useMediaQuery(
        { query: '(prefers-color-scheme: dark)', },
        undefined,
        (modec) => setScrModeDark(modec)
    )

    const onModeChange = () => {
        setTimeout(() => {
            setScrModeDark(prev => !prev);
        }, 300);
    }

    useEffect(() => {
        if (scrModeDark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [scrModeDark]);

    return (
        <header>
            <p className="h__name">
                Anish <span>Kumar</span>
            </p>
            <p onClick={onModeChange} className="h__dark_logo">
                <img src={scrModeDark ? moon : sun} alt="dark_logo" />
            </p>
        </header>
    )
}

export default Header