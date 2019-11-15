import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

//Import COMPONENTS
import  Home  from './components/Home/home'
import  Layout  from './hoc/Layout/layout'

class Routes extends Component {


    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                </Switch>
            </Layout>
        )
    }


}

export default Routes;
