import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import Landing from "./pages";

import "./Styles/respo.scss";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;