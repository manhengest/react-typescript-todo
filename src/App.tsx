import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Navbar} from "./components/Navbar";
import {TodoPage} from "./pages/Todo";
import {AboutPage} from "./pages/About";


const App: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Navbar/>

            <main className="todo-body">
                <section className="container">
                    <Switch>
                        <Route component={TodoPage} path="/" exact />
                        <Route component={AboutPage} path="/about" />
                    </Switch>
                </section>
            </main>
        </BrowserRouter>
    )
}

export default App;
