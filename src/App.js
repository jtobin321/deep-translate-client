import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Translate from './views/Translate/Translate';
import Contact from './views/Contact/Contact';

import './styles/app.css';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Translate} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;