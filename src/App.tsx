import { Outlet } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Navbar";
import ScreenSize from "./components/devComponent/ScreenSize";

import "./App.css";

function App() {
  return (
    <main className="app-main flex flex-col h-screen w-screen bg-slate-500">
      <div className="app-content flex flex-col h-full w-full max-w-[1824px] mx-auto">
        <Header />
        <div className="flex h-full w-full bg-slate-300">
          <Navbar />
          <Outlet />
        </div>
        <Footer />
      </div>
      <ScreenSize />
    </main>
  );
}

export default App;
