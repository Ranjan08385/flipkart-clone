import React from "react";
import "./App.css";
import Header from "./header/Header";
import SubHeader from "./header/SubHeader";
import Banner from "./banner/Banner";
import DealsOfday from "./dealsOfDay/DealsOfDay";
import SubBanner from "./banner/SubBanner";

function App() {
  return (
    <div className="app">
      <Header />
      <SubHeader />
      <Banner />
      <DealsOfday />
      <SubBanner />
    </div>
  );
}

export default App;
