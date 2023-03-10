import { Menu } from "./components/Menu";
import { HomePage } from "./components/HomePage";
import { DriftPage } from "./components/DriftPage";
import { TimeAttackPage } from "./components/TimeAttackPage";
import { ForzaPage } from "./components/ForzaPage";
import { Page404 } from "./components/Page404";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
    return (
        <Router>
            <div>
                <Menu />
                <div className="page">
                    <Routes>
                        <Route path="/" exact element={<HomePage />} />
                        <Route path="/drift" element={<DriftPage />} />
                        <Route path="/timeattack" element={<TimeAttackPage />} />
                        <Route path="/forza" element={<ForzaPage />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>  
                </div>
            </div>
        </Router>
    );
}
