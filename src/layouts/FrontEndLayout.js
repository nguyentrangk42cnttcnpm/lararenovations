import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import { Switch } from 'dva/router';
import ThemeFooter from '../components/FooterFrontEnd';
import PropTypes from 'prop-types';
const { Content, Footer, } = Layout;

@connect()
class FrontEndLayout extends React.PureComponent { render() {
    const {routerData, collapsed} = this.props;
    const {childRoutes} = routerData;

    return (
      <Layout>
        <Layout className="full-layout">
         <Content>
            <Switch>{childRoutes}</Switch>
          </Content>
          <Footer>
            <ThemeFooter/>
          </Footer> 
        </Layout>
      </Layout>
    );
  }
}

FrontEndLayout.propTypes = {
    routerData: PropTypes.object,
  };
  
  export default FrontEndLayout;