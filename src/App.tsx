import * as React from 'react';
import * as Loadable from 'react-loadable';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './App.css';
import {AddTodo} from './containers/AddTodo';
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";

const LoadableAbout = Loadable({
    loader: () => import('./components/About'),
    loading() {
        return <div>Loading...</div>
    }
});

const Home = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>

            <hr/>

            <Route exact={true} path="/" component={Home}/>
            <Route path="/about" component={LoadableAbout}/>
        </div>
    </Router>
);

class App extends React.Component {
  public render() {
    return (
      <div className="App">
         <BasicExample/>
      </div>
    );
  }
}

export default App;
