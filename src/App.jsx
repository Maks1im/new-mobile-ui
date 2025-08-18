import {lazy, Suspense} from "react";
import './styles/app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//imports components
const HomePage =
    lazy(() => import("./pages/HomePage/HomePage.jsx"));

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/" 
                        element={<Suspense fallback={<h1>Loading...</h1>}><HomePage /></Suspense>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;