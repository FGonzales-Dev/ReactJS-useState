import './App.css';

import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<RegisterPage/>}/> 
      </Route>
    </Routes>
  );
}

export default App;
