import { Route, Routes } from "react-router-dom";
// import "./utils/style/base.scss";
import Home from "./pages/pageHome/index.jsx";
import HomeEntreprise from "./pages/home.entreprise/home.entreprise.jsx";
import HomeFamille from "./pages/home.famille/home.famille.jsx";
import Template from "./components/template";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
		<Route path="/AccueilEntreprise" index element={<HomeEntreprise />}/>
		<Route path="/AccueilFamille" index element={<HomeFamille />}/>
      </Route>
    </Routes>
  );
}
export default App;
