import React ,{Suspense}from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Reset } from 'styled-reset'
import routes from './config/routes'
import withHelmet from './utils/withHelmet'
import GlobalStyles from './components/GlobalStyle'
// import Navbar from './components/Navbar/index'
import GetTags from './services/GetTags'
import GetBlogs from './services/GetBlogs'
import Navbar from './components/Navbar'

function Test() {
  return (
    <>
      <GetTags />
    </>
  );
}

export default withHelmet('CAMT DII | Knola') (Test);
