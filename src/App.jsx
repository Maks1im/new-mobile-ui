import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/app.css';
import Settings from "./pages/settings/Settings.jsx";

//lazy loading
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const Account = lazy(() => import("./pages/Account/Account.jsx"));
const Add = lazy(() => import("./pages/Add/Add.jsx"));

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
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    );
}

export default App;