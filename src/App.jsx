// import "./App.css";
import Dahsboard from "./pages/dashboardPage";
import { BrowserRouter, Routes, Route } from "react-router";
import ToDoList from "./pages/toDoListPage";
import Stopwatch from "./pages/stopwatchPage";
import Calculator from "./pages/calculatorPage";
import BiodataDisplayer from "./pages/biodataPage";
import Youtube from "./pages/youtubePlayerPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dahsboard />} />
        <Route path="/toDoList" element={<ToDoList />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/biodata" element={<BiodataDisplayer />} />
        <Route path="/youtube" element={<Youtube />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
