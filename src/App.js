import Login from "./components/Login";
import Grid from "@mui/material/Grid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GoodBye from "./pages/GoodBye";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="/logout" element={<GoodBye />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
