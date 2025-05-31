import { useParams } from "react-router-dom";
import Shop from "./shop/Contain";
import Academy from "./academy/Contain";
import SpoBlogs from "./spoBlogs/Contain";
import ESport from "./esport/Contain";
import Gym from "./gym/Contain";
import Tournament from "./tournament/Contain";
import NotAvailable from "./notAvailable/Contain";
export default function ServiceLoader() {
  const params = useParams();
  const service = params.service;
  if (service === "shop") {
    return <Shop />;
  } else if (service === "spoblogs") {
    return <SpoBlogs />;
  } else if (service === "academy") {
    return <Academy />;
  } else if (service === "esport") {
    return <ESport />;
  } else if (service === "gym") {
    return <Gym />;
  } else if (service === "tournament") {
    return <Tournament />;
  } else {
    return <NotAvailable />;
  }
}
