import styles from "../styles/Header.module.css"


export function Welcome() {
    return (
        <section id="welcome" className="welcome">
            <div className="welcome__container">
                <h1 className="welcome__title">Хакасия</h1>
                <p className="welcome__subtitle">Туристическое Агенство Республики Хакасия</p>
            </div>
            <button id="scroll" className="btn_scroll">
                <img src="/img/go_down.svg" alt=""/>
            </button>
        </section>
    )
}