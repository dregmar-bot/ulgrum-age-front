import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main.js";
import routes from "../routes.js";

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
         <Route path={routes.main()} element={<Main />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App;
