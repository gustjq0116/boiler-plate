import React, { Suspense } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Footer from './components/views/Footer/Footer';
import NavBar from './components/views/NavBar/NavBar';
import Auth from './hoc/auth';
import 'antd/dist/antd.css';


function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      
      

      <Router>
          <Route component={NavBar} />
        <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)}/>
            <Route exact path="/login" component={Auth(LoginPage, false)}/>
            <Route exact path="/register" component={Auth(RegisterPage, false)}/>
          </Switch>
        </div>
      </Router>
      

      <Footer />
    </Suspense>

  );
}


export default App;
