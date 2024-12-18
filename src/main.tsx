//import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Router>
      <App /> {/* App.tsx を呼び出す */}
    </Router>
);
