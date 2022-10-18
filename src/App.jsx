import { BrowserRouter, Routes, Route } from "react-router-dom";

//Views
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import QuizPage from "./views/QuizPage";
import ResultsPage from "./views/ResultsPage";

//UI
import Navbar from "./Layouts/NavBar";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="quiz" element={<QuizPage />} />
          <Route path="results" element={<ResultsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
