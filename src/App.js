import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/header/Header'
import Services from './components/servicesSection/Services';
import Slider from './components/slider/Slider'
import Galaries from './components/ourGalaries/Galaries'
import Footer from './components/footer/Footer';
import SingleService from './components/servicesSection/SingleService';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './components/hooks/AuthContext';
import Appoinment from './components/appoinment/appoinment';
import PrivateRoute from './components/hooks/PrivateRoute';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Slider/>
          <Services/>
          <Galaries/>
        </Route>
        <Route path='/home'>
          <Slider/>
          <Services/>
          <Galaries/>
        </Route>
        <Route path='/services/:serviceId'>
          <SingleService/>
        </Route>
        <Route path='/services'>
          <Services/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <PrivateRoute path='/appoinment'>
          <Appoinment/>
        </PrivateRoute>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  </AuthProvider>
  );
};

export default App;