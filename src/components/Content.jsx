import "./Content.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TimeManagament from "./pages/TimeManagement";
import Inbox from "./pages/Inbox";
import Calendar from "./pages/Calendar";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function Content() {
    return (
        <div className="content">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/time-management" element={<TimeManagament />} />
                <Route path="/inbox" element={<Inbox />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route index path="/analytics" element={<Analytics />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
    );
}

export default Content;
