import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { CreateRecipe } from "./pages/create-recipe";
import { SavedRecipe, SavedRecipes } from "./pages/saved-recipe";
import { Navbar } from './components/navbar';
import { Register } from './pages/register';
import { Login } from './pages/login';
import { Profile } from './pages/profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipe" element={<SavedRecipes />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
