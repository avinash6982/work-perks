import { Route, Routes } from "react-router";
import Setup from "./container/Setup";

const ApplicationRoutes = () => (
  <Routes>
    <Route path="/" element={<Setup />} />
    <Route path="*" element={<h1>Page not found</h1>} />
  </Routes>
);

export default ApplicationRoutes;
