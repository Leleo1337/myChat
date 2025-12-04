import { BrowserRouter, Route, Routes } from "react-router";
import Panel from "./pages/main/Panel";
import { useEffect } from "react";
import { getTheme, setTheme } from "./utils/toggleTheme";
import LandingPage from "./pages/landingPage/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";

function App() {
    useEffect(() => {
        const theme = getTheme();
        if (theme) {
            setTheme(theme);
        }
    }, []);

    return (
        <>
            <BrowserRouter basename="/">
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/register" element={<RegisterPage />}></Route>
                    <Route path="/forgot" element={<ForgotPasswordPage />}></Route>

                    <Route path="/chat" element={<Panel />}></Route>
                    <Route path="/chat/:id" element={<Panel />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
