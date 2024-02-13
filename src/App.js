import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/views/Header/Header.js';
import Footer from './components/views/Footer/Footer.js';
import Home from './components/pages/Home/Home.js';
import NotFound from './components/pages/NotFound/NotFound.js';
import About from './components/pages/About/About.js';
import DisplayPost from './components/pages/DisplayPost/DisplayPost.js';
import EditPost from './components/pages/EditPost/EditPost.js';
import AddPost from './components/pages/AddPost/AddPost.js';

import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<DisplayPost />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </Container>
  );
}

export default App;
