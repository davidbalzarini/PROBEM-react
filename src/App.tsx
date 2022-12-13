import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Sobre from './paginas/sobre nós/Sobre';
import Contato from './paginas/contato/Contato';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Doacoes from './paginas/doacoes/Doacoes';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import ListaTema from './components/temas/listaTema/ListaTema';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/cadastrousuario' element={<CadastroUsuario />} />
        <Route path='/doacoes' element={<Doacoes />} />
        <Route path="/temas" element={<ListaTema />} />
        <Route path="/posts" element={<ListaPostagem />} />
        <Route path="/formularioPostagem" element={<CadastroPost />} />
        <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

        <Route path="/formularioTema" element={<CadastroTema />} />

        <Route path="/formularioTema/:id" element={<CadastroTema />} />

        <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

        <Route path="/deletarTema/:id" element={<DeletarTema />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;