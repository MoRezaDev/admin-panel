import React from "react";
import { Switch, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Calendar from "./pages/Calendar";

//import ThemeContext.......
import ThemeContextProvider from "./context/ThemeContextProvider";

//calling components.....................
import Home from "./pages/Home";

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/users" component={Users} />
          <Route path="/Calendar" component={Calendar} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
