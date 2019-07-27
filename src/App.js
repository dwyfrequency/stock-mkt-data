import React from 'react';
import Dashboard from './components/reuse/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Dashboard} />
      {/* <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} /> */}
    </Router>
  );
};

export default App;
