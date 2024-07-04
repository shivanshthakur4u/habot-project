import React from "react";
import { Navbar } from "../components/Navbar";

function Layout({ children }) {
  return (
    <div className="max-w-screen-2xl container mx-auto flex flex-col">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
