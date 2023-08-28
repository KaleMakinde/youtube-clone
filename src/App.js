import React, { useState } from 'react'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import { Container } from 'react-bootstrap'
import HomeScreen from './components/screens/homeScreen/HomeScreen'

import "./_app.scss"

const App = () => {


    const [sidebar, togglesidebar] = useState(false);


    const handleToggleSidebar = () => togglesidebar(value=>!value)


  return (
    <>
    <Header handleToggleSidebar={handleToggleSidebar}/>
    <div className="app__container border border-info">
         <Sidebar 
         sidebar={sidebar}
         handleToggleSidebar={handleToggleSidebar}
         />

         <Container fluid className='app__main border border-warning'>
            <HomeScreen/>
         </Container>
    </div>
    </>
  )
}

export default App
