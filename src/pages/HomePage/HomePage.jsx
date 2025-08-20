import Header from "../../components/Header/Header.jsx";
import MenuMobile from "../../components/MenuMobile/MenuMobile.jsx";
import Video from "../../components/Video/Video.jsx";

function HomePage() {
    return (
        <>
            <Header />
            <main className={"main-container"}>
                <div className={"main-video-container"}>
                    <Video/>
                    <Video/>
                    <Video/>
                    <Video/>
                </div>
            </main>
            <MenuMobile/>
        </>
    )
}

export default HomePage;