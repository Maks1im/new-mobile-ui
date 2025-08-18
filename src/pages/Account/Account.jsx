import Header from "../../components/Header/Header.jsx";
import MenuMobile from "../../components/MenuMobile/MenuMobile.jsx";

function Account() {
    return (
        <>
            <Header />
            <main className={"main__account"}>
                <header className={"header__account"}>
                    <div className={"account__info-main"}>
                        <img className={"account__logo"} src={"https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"} />
                        <div className={"account__info"}>
                            <h1 className={"username"}>username</h1>
                            <p>0 подписчиков</p>
                        </div>
                    </div>
                </header>
                <hr/>
            </main>
            <MenuMobile/>
        </>
    )
}

export default Account