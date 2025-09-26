import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import UPVCPage from './components/ProductPages/UPVCPage';
import AluminiumPage from './components/ProductPages/AluminiumPage';
import HardwarePage from './components/ProductPages/HardwarePage';
import ProfilesPage from './components/ProductPages/ProfilesPage';

const MainWebsite = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <Products />
    <Certificate />
    <Contact />
    <Footer />
  </div>
);

const AdminApp = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [loginError, setLoginError] = React.useState('');

  React.useEffect(() => {
    const authStatus = localStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (credentials: { username: string; password: string }) => {
    // Simple authentication (in production, use proper authentication)
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuthenticated', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} error={loginError} />;
  }

  return <AdminDashboard onLogout={handleLogout} />;
};
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainWebsite />} />
        <Route path="/upvc-doors-windows" element={<UPVCPage />} />
        <Route path="/aluminium-doors-windows" element={<AluminiumPage />} />
        <Route path="/hardware" element={<HardwarePage />} />
        <Route path="/profiles" element={<ProfilesPage />} />
        <Route path="/admin" element={<AdminApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;