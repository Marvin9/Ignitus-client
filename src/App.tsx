import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withErrorBoundary } from './ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import { DashboardRoutes } from './ignitus-Routes/ignitus-DashboardRoutes';
// eslint-disable-next-line import/named
import { PublicRoutes } from './ignitus-Routes/ignitus-PublicRoutes';
import './App.scss';
import UserInterfaceBookRoutes from './ignitus-Routes/ignitus-UserInterfaceBookRoutes';


const App = () => (
  <div className="content-container">
    Hello Hello
    <Switch>
      <Route path="/dashboard" component={DashboardRoutes} />
      <Route path="/interface" component={UserInterfaceBookRoutes} />
      <Route path="/" component={PublicRoutes} />
    </Switch>
  </div>
);

export default withErrorBoundary(App);
