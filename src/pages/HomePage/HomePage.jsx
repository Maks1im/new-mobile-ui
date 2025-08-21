import Video from "../../components/Video/Video.jsx";
import Layout from "../../components/Layout/Layout.jsx";

function HomePage() {
    return (
        <>
            <Layout>
                <main className={"main-container"}>
                    <div className={"main-video-container"}>
                        <Video/>
                        <Video/>
                        <Video/>
                        <Video/>
                        <Video/>
                    </div>
                </main>
            </Layout>
        </>
    )
}

export default HomePage;