import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header";
//import Footer from "./components/layout/Footer";
import NotFound from "./components/pages/404";
import About from "./components/pages/About";
import Books from "./components/books/Books";
import AddBook from "./components/books/AddBooks";
import EditBook from "./components/books/EditBooks";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/about" component={About} />
          <Route exact path="/book/add" component={AddBook} />
          <Route exact path="/book/edit/:id" component={EditBook} />
          <Route component={NotFound} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
export default App;
