import Video from "../../components/Video/Video.jsx";
import AccountPage from "../../components/AccountPage/AccountPage.jsx";
import Layout from "../../components/Layout/Layout.jsx";

function Account() {
    return (
        <>
            <Layout>
                <main className={"main__account"}>
                    <AccountPage/>
                    <main className={"main-container"}>
                        <div className={"main-video-container"}>
                            <Video/>
                        </div>
                    </main>
                </main>
            </Layout>
        </>
    )
}

export default Account