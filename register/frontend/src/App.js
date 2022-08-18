import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthPage from "./components/AuthPage";
import { UserContext } from "./components/GlobalStates/UserContext";
import Pages from "./pages";
import Manage from "./pages/Admin/Manage";
import HomePage from "./pages/HomePage";
import About from "./pages/HomePage/About";
import Home from "./pages/HomePage/Home";
import Schedules from "./pages/Schedules";
import ScheduleWeek from "./pages/ScheduleWeek";
import LogIn from "./pages/SignIn/LogIn/LogIn";
import SignUp from "./pages/SignIn/SignUp/SignUp";
import Storage from "./pages/Storage";

function App() {
  const { user } = useContext(UserContext)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route element={<AuthPage />}>
          <Route path="/editor/*" element={<Pages />}>
            <Route index element={<Schedules />} />
            <Route path='schedule-week' element={<ScheduleWeek />} />
            <Route path='storage' element={<Storage />} />
            {user?.isAdmin &&
              <Route path="manage" element={<Manage />} />
            }
          </Route>
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
