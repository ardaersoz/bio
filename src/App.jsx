import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './utils/firebase'; // Import Firebase config

import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Dergi from './components/Dergi';
import Article from './components/Article';
import About from './components/About';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import Features from './components/Features';
import AdminDashboard from './pages/AdminDashboard';
import ArticleList from './pages/Articles/ArticleList';
import AddArticle from './pages/Articles/AddArticle';


// Define Home component
const Home = () => (
    <>
    <Navbar />
    <div className='max-w-6xl mx-auto pt-20 px-6'>
    <HeroSection />
    <Dergi />
    <Article />
    <Features />
    <About />
    </div>
    <Footer />
    </>
);


function App() {
  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Home />} />

          {/* Protected dashboard route */}
          <Route path="/admin" element={user ? <AdminDashboard /> : <Navigate to="/login" />} />
          <Route path="/admin/articles" element={<ArticleList />} />
          <Route path="/admin/articles/add" element={<AddArticle />} />

          {/* Redirect unknown routes to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

