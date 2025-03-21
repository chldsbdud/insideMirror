import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "../src/assets/styles/GlobalStyle";
import MainPage from "../src/routes/MainPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
