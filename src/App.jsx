import { BrowserRouter, Routes, Route } from "react-router-dom";

//Views
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import QuizPage from "./views/QuizPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="quiz" element={<QuizPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
