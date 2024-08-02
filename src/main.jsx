import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.jsx";
import Pinjam from "./pages/Pinjam";
import Dashboard from "./pages/Dashboard.jsx";
import Konsultasi from "./pages/Konsultasi";
import Notifikasi from "./pages/Notifikasi";
import CreateKonsultasi from "./pages/CreateKonsultasi";
import CreatePinjam from "./pages/CreatePinjam";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "pinjam",
        element: <Pinjam />,
      },
      {
        path: "pinjam/create",
        element: <CreatePinjam />,
      },
      {
        path: "konsultasi",
        element: <Konsultasi />,
      },
      {
        path: "konsultasi/create",
        element: <CreateKonsultasi />,
      },
      {
        path: "notifikasi",
        element: <Notifikasi />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
