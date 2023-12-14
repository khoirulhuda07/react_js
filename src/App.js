import React from "react";
import Navbar from "./navbar";
import Tabel from "./Table";
import { BrowserRouter as Route } from "react-router-dom";

export default function App() {
  return (
    <Route>
      <Navbar />
      <Tabel />
    </Route>
  );
}
