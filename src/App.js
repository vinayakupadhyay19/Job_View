import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Feed, Dashboard, Create } from "./pages"
import LoginOption from "./pages/LoginOption";
import UserLogin from "./pages/UserLogin";
import UserRegistration from "./pages/UserRegistration";
import AdminLogin from "./pages/AdminLogin";
import AdminRegistration from "./pages/AdminRegistration";
import AdminHome from "./pages/AdminHome";
import Delete from "./pages/Delete";
import Update from "./pages/Update";
import View from "./pages/View";
import UpdateDetail from "./pages/UpdateDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginOption />} />
        <Route path="/employer" >
          <Route path="/employer/UserLogin" element={<UserLogin />} />
          <Route path="/employer/UserRegistration" element={<UserRegistration />} />
          <Route path="/employer/AdminLogin" element={<AdminLogin />} />
          <Route path="/employer/AdminRegistration" element={<AdminRegistration />} />
          <Route path="/employer/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/employee/feed" element={<Feed />} />
        <Route path="/AdminHome" element={< AdminHome />} />
        <Route path="/admin/create" element={<Create />} />
        <Route path="/admin/delete" element={<Delete />} />
        <Route path="/admin/update" element={<Update />} />
        <Route path="/admin/updateDetail" element={<UpdateDetail />} />
        <Route path="/admin/view" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
