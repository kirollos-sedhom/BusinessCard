import React from "react";
import Head from "./components/Head.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import "./style.css";
export default function App() {
  return (
    <div className="Container">
      <Head />
      <Body />
      <Footer />
    </div>
  );
}
