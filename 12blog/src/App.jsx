import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = authService.getCurrentUser();

                if (userData) {
                    dispatch(login(userData));
                } else {
                    dispatch(logout());
                }
            } catch (error) {
                console.error("Error while fetching user:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    // conditional rendering
    return loading ? (
        <div>Loading...</div>
    ) : (
        <div className="min-h-screen felx flex-wrap content-between bg-gray-400">
            <div className="w-full block">
                <Header />
                <main>{/* <Outlet /> */}</main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
