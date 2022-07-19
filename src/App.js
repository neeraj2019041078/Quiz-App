import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Results from "./Pages/Results/Results";
import { useState } from "react";
import axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };
  return (
    <>
      <div className="app" style={{ backgroundImage: "url(./ques1.png)" }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Home
                  name={name}
                  setName={setName}
                  fetchQuestions={fetchQuestions}
                />
              }
            />
            <Route
              path="/quiz"
              exact
              element={
                <Quiz
                  name={name}
                  questions={questions}
                  score={score}
                  setScore={setScore}
                  setQuestions={setQuestions}
                />
              }
            />
            <Route path="/result" exact element={<Results score={score} name={name}   />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
