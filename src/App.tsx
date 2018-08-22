import * as React from 'react';
import * as Loadable from 'react-loadable';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './App.css';

const LoadableBar = Loadable({
    loader: () => import('./components/Bar'),
    loading() {
        return <div>Loading...</div>
    }
});

const Home = () => (<div>Home</div>);

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
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={LoadableBar}/>
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
