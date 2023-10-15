import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive"
import {BsFillMoonStarsFill} from "react-icons/bs"
import {FaSun} from "react-icons/fa"

const moon = <BsFillMoonStarsFill color="gray" size={"1.5rem"}/>
const sun = <FaSun color="var(--primary_bg_light)" size={"1.5rem"}/>

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
            {scrModeDark ? moon : sun}
            </p>
        </header>
    )
}

export default Header