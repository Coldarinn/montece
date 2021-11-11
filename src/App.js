import {HashRouter} from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import "./styles/App.scss";
import "flatpickr/dist/themes/material_green.css";
import Footer from "./components/Footer";

function App() {
    return (
        <HashRouter>
            <Header/>
            <div className="main">
                <AppRouter/>
            </div>
            <Footer/>
        </HashRouter>
    );
}

export default App;
