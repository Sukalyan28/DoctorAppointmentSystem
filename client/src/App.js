import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Spinner from "./components/Spinner";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoute from "./components/PublicRoute";
import Users from "./pages/admin/Users";
import Doctors from "./pages/admin/Doctors";
import ApplyDoctor from "./pages/ApplyDoctor";
import Profile from "./pages/doctor/Profile";
import NotificationPage from "./pages/NotificationPage";
import BookingPage from "./pages/BookingPage";
import Appointments from "./pages/Appointments";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
function App() {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/apply-doctor"
              element={
                <ProtectedRoutes>
                  <ApplyDoctor />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/admin/users"
              element={
                <ProtectedRoutes>
                  <Users />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/admin/doctors"
              element={
                <ProtectedRoutes>
                  <Doctors />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/doctor/profile/:id"
              element={
                <ProtectedRoutes>
                  <Profile />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/doctor/book-appointment/:doctorId"
              element={
                <ProtectedRoutes>
                  <BookingPage />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/notification"
              element={
                <ProtectedRoutes>
                  <NotificationPage />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />

            <Route
              path="/appointments"
              element={
                <ProtectedRoutes>
                  <Appointments />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/doctor-appointments"
              element={
                <ProtectedRoutes>
                  <DoctorAppointments />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/"
              element={
                <ProtectedRoutes>
                  <HomePage />
                </ProtectedRoutes>
              }
            />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
