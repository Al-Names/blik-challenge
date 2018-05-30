import React from 'react';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Analytics from './components/Analytics'
import View from './components/ViewAnalytics'
import Navigation from './components/Navigation'
import Banner from './components/Banner'

import './App.css'

const App = () => (
  <div className="container container-fluid">

    <Navigation/>
    <Banner/>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/analytics" component={Analytics} />
      <Route exact path="/analytics/:id" component={View} />
    </main>
  </div>
)
export default App;
