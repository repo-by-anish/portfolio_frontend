import React from 'react'

const Header = () => {
    return (
        <header>
            <p className="h__name">
                Anish <span>Kumar</span>
            </p>
            <p className="h__dark_logo">
                <img src="logos/moon-logo.svg" alt="dark_logo"/>
            </p>
        </header>
    )
}

export default Header