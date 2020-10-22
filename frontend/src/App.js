import React from 'react';
import Layout from './hocs/Layout'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './containers/Home'
import signIn from './containers/SignIn'
import signUp from './containers/SignUp'
import about from './containers/About'
import contact from './containers/Contact'
import listingDetails from './containers/ListingDetail'
import listings from './containers/Listings'
import NotFound from './components/NotFound'

import './sass/main.scss'

const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={about} />
                <Route path='/signin' exact component={signIn} />
                <Route path='/signup' exact component={signUp} />
                <Route path='/contact' exact component={contact} />
                <Route path='/listings' exact component={listings} />
                <Route path='/listingDetails' exact component={listingDetails} />
                <Route  component={NotFound} />
            </Switch>
        </Layout>
    </Router>
);

export default App;
