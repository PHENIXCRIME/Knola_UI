import React ,{Suspense}from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Reset } from 'styled-reset'
import routes from './config/routes'
import withHelmet from './utils/withHelmet'
import GlobalStyles from './components/GlobalStyle'
import Home from './pages/index'
import LoginContext from './contexts/LoginContext'


function App() {
  return (
    <>
    <LoginContext>
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
    </Router>
    </LoginContext>
    </>
  );
}

export default withHelmet('CAMT DII | Knola') (App);
