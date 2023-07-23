import { Route, Routes } from "react-router-dom";
// import "./utils/style/base.scss";
import Home from "./pages/pageHome/index.jsx";
import Template from "./components/template";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
export default App;
