import { lazy } from "react";

const Home = lazy(() => import("./Home.jsx"));
import Checkout from "./Checkout";
import Error from "./Error";

export { Home, Checkout, Error };