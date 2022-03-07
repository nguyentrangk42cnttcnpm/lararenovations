import React from 'react';
import dva from 'dva';
import { Router } from 'dva/router';
import { createBrowserHistory } from 'history'
import request from 'cmn-utils/lib/request';
import createRoutes from './routes';
import config from './config';
import './assets/styles/index.less';
import 'moment/locale/zh-cn';
import { homepage } from '../package.json';
import * as serviceWorker from './serviceWorker';

const application = dva({
  history: createBrowserHistory({
    basename: homepage
  })
});

request.config(config.request);

application.router(({ history, app }) => (
    <Router history={history}>{createRoutes(app)}</Router>
));

application.start('#root');

export default {
  app: application,
  store: application._store,
  dispatch: application._store.dispatch
};
serviceWorker.unregister();
