import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Container } from 'react-bootstrap';
import HomeScreen from './components/screens/homeScreen/HomeScreen';
import LoginScreen from './components/screens/homeScreen/loginScreen/loginScreen';
import './_app.scss';

const Layout = ({ children }) => {
    const [sidebar, togglesidebar] = useState(false);
    const handleToggleSidebar = () => togglesidebar(value => !value);

    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="app__container">
                <Sidebar
                    sidebar={sidebar}
                    handleToggleSidebar={handleToggleSidebar}
                />
                <Container fluid className='app__main'>
                    {children}
                </Container>
            </div>
        </>
    );
}

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout> <HomeScreen /> </Layout>} />
                <Route path='/auth' element={<LoginScreen />} />
                <Route path='/search' element={<Layout> <h1> Search Results</h1> </Layout>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
