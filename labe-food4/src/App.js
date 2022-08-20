import React from "react";
import Router from "./routes/Router"
import GlobalState from './componentes/global/GlobalState';
import "@fontsource/roboto";

function App() {
  return (
    <div >
    <GlobalState>
     <Router />
    </GlobalState>
    </div>
  );
}

export default App;