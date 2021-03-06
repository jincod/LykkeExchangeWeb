import cn from 'classnames';
import {inject, observer} from 'mobx-react';
import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import NoMatch from './components/NoMatch';
import {ProtectedRoute} from './components/ProtectedRoute';
import TransferResult from './components/TransferResult';
import {ROUTE_AUTH, ROUTE_TRANSFER, ROUTE_WALLET} from './constants/routes';
import {WalletPage} from './pages';
import AuthPage from './pages/AuthPage';
import TransferPage from './pages/TransferPage';
import {RootStore} from './stores';

import './App.css';
import {STORE_ROOT} from './constants/stores';

export interface InjectedRootStoreProps {
  rootStore?: RootStore;
}

class App extends React.Component<InjectedRootStoreProps> {
  render() {
    return (
      <Router>
        <div
          className={cn('app', {
            'app--overlayed': this.props.rootStore!.uiStore.overlayed
          })}
        >
          <Header />
          <div className="app__shell">
            <Switch>
              <ProtectedRoute
                exact={true}
                path={ROUTE_WALLET}
                Component={WalletPage}
                authStore={this.props.rootStore!.authStore}
              />
              <ProtectedRoute
                /* exact={true} */
                path={`${ROUTE_WALLET}/:walletId${ROUTE_TRANSFER}`}
                Component={TransferPage}
                authStore={this.props.rootStore!.authStore}
              />
              <ProtectedRoute
                path={`${ROUTE_TRANSFER}/success`}
                Component={TransferResult}
                authStore={this.props.rootStore!.authStore}
              />
              <Route exact={true} path={ROUTE_AUTH} component={AuthPage} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default inject(STORE_ROOT)(observer(App));
