import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/app.css';

//lazy loading
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const Account = lazy(() => import("./pages/Account/Account.jsx"));
const Add = lazy(() => import("./pages/Add/Add.jsx"));
const Settings = lazy(() => import("./pages/Settings/Settings.jsx"));
const Recommendations = lazy(() => import("./pages/Recommendations/Recommendations.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs.jsx"));

function App() {
    return (
        <>
            <BrowserRouter>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/add" element={<Add />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/recommendations" element={<Recommendations />} />
                        <Route path="/about" element={<AboutUs />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    );
}

export default App;