import React ,{Suspense}from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Reset } from 'styled-reset'
import routes from './config/routes'
import withHelmet from './utils/withHelmet'
import GlobalStyles from './components/GlobalStyle'
import Navbar from './components/Navbar/index'
import Sidebar from './components/Sidebar/index';
import Footer from './components/Footer/index'
import Home from './pages/index'

function App() {
  return (
    <>
    <GlobalStyles/>
    <Reset /> 
    <Router>
      <Home/>
        <Suspense fallback = '...loading'>
          <Switch>
            {Object.keys(routes).map(routeKey => (
        <Route key = {routeKey} {...routes[routeKey] }/>
      ))}
          </Switch>
        </Suspense>
        <Footer />
    </Router>
    </>
  );
}

export default withHelmet('CAMT DII | Knola') (App);
