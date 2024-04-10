/*********************************
 * *IMPORT LIBRARIES
 *********************************/

import React from "react";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

/*********************************
 * *COMPONENT
 *********************************/

function App() {
  const date = new Date();
  return (
    <div className="app">
      <Header title="Phone book" />
      <Main />
      <Footer year={date.getFullYear()} text="Victor Ilin" />
    </div>
  );
}

export default App;
