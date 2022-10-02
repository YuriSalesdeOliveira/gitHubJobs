import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Job } from "./pages/Job";

export function WebRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tabalho" element={<Job />} />
        </Routes>
    );
}
