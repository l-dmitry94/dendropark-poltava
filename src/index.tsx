import App from "components/App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter basename="/dendropark-poltava" >
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
