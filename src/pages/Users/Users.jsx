import AccountPage from "../../components/AccountPage/AccountPage.jsx";
import Layout from "../../components/Layout/Layout.jsx";

function Users() {
    return (
        <>
            <Layout>
                <main className={"main__account"}>
                    <AccountPage showSubscribeButton={true} />
                    <main className={"main-container"}>
                        <div className={"main-video-container"}>

                        </div>
                    </main>
                </main>
            </Layout>
        </>
    )
}

export default Users;