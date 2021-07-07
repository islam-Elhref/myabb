import './App.css';
import React, {Component} from 'react';
import Items from "./component/items";
import {BrowserRouter, Route} from 'react-router-dom' ;
import Nav from "./component/nav";
import Home from "./component/home";
import About from "./component/about";
import Blog from './component/blog';

class App extends Component {

    state = {
        items: [
            {id: 1, name: 'wael', age: 42, Children: 3},
            {id: 2, name: 'amal', age: 39, Children: 3},
            {id: 2, name: 'aaaa', age: 39, Children: 0},
            {id: 3, name: 'Rapeh', age: 35, Children: 3},
            {id: 4, name: 'zahra', age: 32, Children: 1},
            {id: 5, name: 'ahmed', age: 28, Children: 0},
            {id: 6, name: 'islam', age: 25, Children: 0},
        ]
    }


    render() {
        return (
            <BrowserRouter>
                <div>
                    <Nav />
                    <Route exact  path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/items' >
                        <Items items={this.state.items} />
                    </Route>
                    <Route path='/blog' >
                        <Blog />
                    </Route>
                </div>
            </BrowserRouter>


        )
    }
}

export default App;
