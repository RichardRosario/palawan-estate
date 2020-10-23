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
import {Provider} from 'react-redux'
import store from './store'

import './sass/main.scss'

const App = () => (
    <Provider store={store} >
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={about} />
                    <Route path='/signin' component={signIn} />
                    <Route path='/signup' component={signUp} />
                    <Route path='/contact' component={contact} />
                    <Route path='/listings' component={listings} />
                    <Route path='/listingDetails' component={listingDetails} />
                    <Route  component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;
