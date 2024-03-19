import * as queryString from "query-string";
import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";


function App() {
  const location = useLocation();
  useEffect(() => {
    console.log(location)
  })
  return (
    <div className="App">
      !!
    </div>
  );
}

export default App;
