import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "../styles/Header.module.css"


export function Header() {
    const [isMenuVisible, setMenuVisible] = useState<boolean>(false)
    const [isPageScrolled, setPageScrolled] = useState<boolean>(false)

    function onMenuClick() {
        console.log(isMenuVisible);
        setMenuVisible(!isMenuVisible);
    }

    const handlePageScroll = () => {
        if (window.scrollY > 100) {
            setPageScrolled(true)
        } else {
            setPageScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handlePageScroll)

        return () => window.removeEventListener('scroll', handlePageScroll)
    })

    return (
        <header id="header" className={`header${isPageScrolled ? ' scroll' : ''}`}>
            <div className="container">
                <div className="header__body">
                    <a className="header__logo" href="#welcome"></a>
                    <button onClick={onMenuClick} className={`header__burger${isMenuVisible ? ' active' : ''}`} type="button" id='btn-menu'>
                        <span> </span>
                    </button>
                    <nav className={`header__menu${isMenuVisible ? ' active' : ''}`}>
                        <ul className="header__list">
                            <li>
                                <Link href="#welcome" >
                                    <a className="header__link">Главная</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#attractions" >
                                    <a className="header__link">Достопримечательности</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#tours" >
                                    <a className="header__link">Туры</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#contacts" >
                                    <a className="header__link">Контакты</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )}