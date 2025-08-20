import Header from "../../components/Header/Header.jsx";
import MenuMobile from "../../components/MenuMobile/MenuMobile.jsx";
import AccountPage from "../../components/AccountPage/AccountPage.jsx";

function Users() {
    return (
        <>
            <Header />
            <main className={"main__account"}>
                <AccountPage showSubscribeButton={true} />
                <main className={"main-container"}>
                    <div className={"main-video-container"}>

                    </div>
                </main>
            </main>
            <MenuMobile/>
        </>
    )
}

export default Users;