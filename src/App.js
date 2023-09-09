import React, { useState } from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Container } from 'react-bootstrap';
import HomeScreen from './components/screens/homeScreen/HomeScreen';
import LoginScreen from './components/screens/homeScreen/loginScreen/loginScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './_app.scss';

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar(value => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container border border-info">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main border border-warning">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} /> {/* Use index property here */}
        </Route>

        <Route path="/auth" element={<LoginScreen />} />

        <Route path="/search" element={<Layout />}>
          <Route index element={<h1>Search Results</h1>} /> {/* Use index property here */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
