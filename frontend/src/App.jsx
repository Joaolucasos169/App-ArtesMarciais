import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import EsqueceuSenha from './pages/EsqueceuSenha';
import Register from './pages/Register';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/esqueceusenha" element={<EsqueceuSenha />}/>
      </Routes>
    </BrowserRouter>
  );
}
