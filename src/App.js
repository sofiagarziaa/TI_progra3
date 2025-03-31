import React from "react";
import {Routes, Route } from 'react-router-dom'
import Home from "./screens/Home/Home";
import AboutUs from "./screens/AboutUs/AboutUs";
import Detalle from "./screens/Detalle/Detalle";
import NotFound from "./screens/NotFound/NotFound";
import Navegacion from "./components/navegacion/navegacion";
import Footer from './components/footer/footer'
function App() {
  return (
    <>
      <Navegacion />
      <Routes>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/aboutus'} component={AboutUs} />
        <Route path={'/detalle/:id'} component={Detalle} />
        <Route path={''} component={NotFound} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;