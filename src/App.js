import React from 'react'
import { Route, Switch, Router,Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignInPage from '../src/pages/sign-in/sign-in-page.component.jsx';
import Dashboard from '../src/pages/dashboard/dashboard-page.component';
import { history } from '../src/helpers/history';
import {PrivateRoute} from '../src/components/private-route/private-route.component';
import {iAlertActions } from './redux/alert/alert.actions';


class App extends React.Component {
  constructor(props) {
    super(props);
console.log(props);

    history.listen((location, action) => {
        // clear alert on location change
        this.props.clearAlerts();
    });
}
  render() {
    
    const { alert } = this.props;
    console.log(alert);
    return (
      <div>
        {
          alert && <div class={`alert ${alert.type} d-flex align-items-center`} role="alert">
          <svg
            class="bi flex-shrink-0 me-2"
            width="24"
            height="24"
            role="img"
            aria-label="Danger:">
          </svg>
          <div>{alert.payload}</div>
        </div>
        }

      <Router history={history}>
        <Switch>
          <PrivateRoute exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/signin' component={SignInPage} />
          <Redirect from="*" to="/dashboard" />
        </Switch>
      </Router>
      </div>
    )
  }

}

function mapPropsToState(state) {
  console.log(state.alertReducer);
  const { alert } = state.alertReducer;
  return { alert };
}

const actionCreators = {
  clearAlerts: iAlertActions.clear
};


export default connect(mapPropsToState, actionCreators)(App);;

