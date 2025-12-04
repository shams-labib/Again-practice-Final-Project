import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Components/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Firebase/Login/Login";
import Register from "../Firebase/Register/Register";
import SendPercel from "../pages/SendParcel/SendParcel";
import Dashboard from "../Layout/Dashboard";
import MyParcel from "../pages/Dashboard/MyParcel/MyParcel";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess/PaymentSuccess";
import PaymentCancled from "../pages/Dashboard/Payment/PaymentCancel/PaymentCancled";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import Rider from "../pages/Rider/Rider";
import ApprovedRiders from "../pages/ApprovedRiders/ApprovedRiders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
      },
      {
        path: "/send-parcel",
        element: <SendPercel></SendPercel>,
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
      },
      {
        path: "/rider",
        element: <Rider></Rider>,
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "myParcel",
        element: <MyParcel></MyParcel>,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancled,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
      {
        path: "approved-rider",
        Component: ApprovedRiders,
      },
    ],
  },
]);
