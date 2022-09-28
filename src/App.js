import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import CalendarP from "./pages/CalendarP";

//import ThemeContext.......
import ThemeContextProvider from "./context/ThemeContextProvider";

//impprt App styles.......
import "./App.css";

//calling components.....................
import Home from "./pages/Home";

function App() {
  //Setting States for Show and hide BurgerMenu...........
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalMode, setIsModalMode] = useState(false);
  const [isResponsived, setIsResponsived] = useState(false);
  //................................................................

  //theme container State...............
  const [showThemeContainer, setShowThemeContainer] = useState(false);

  const sideChangeHandler = () => {
    setIsExpanded(true);
    setIsModalMode(true);
    setIsResponsived(true);
  };

  const collapseHandler = () => {
    if (window.innerWidth < 1280) {
      setIsExpanded(false);
      setIsModalMode(false);
      setIsResponsived(false);
      setShowThemeContainer(false);
    }
  };

  return (
    <ThemeContextProvider>
      <div className="App">
        <Navbar isExpanded={isExpanded} sideChangeHandler={sideChangeHandler} />
        <Sidebar
          setIsExpanded={setIsExpanded}
          isResponsived={isResponsived}
          isModalMode={isModalMode}
          collapseHandler={collapseHandler}
          isExpanded={isExpanded}
          showThemeContainer={showThemeContainer}
          setShowThemeContainer={setShowThemeContainer}
        />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/users" component={Users} />
          <Route path="/Calendarp" component={CalendarP} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
