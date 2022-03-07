import './style/index.less';
import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col, Button, Form, Input } from 'antd';
import {  FacebookFilled, TwitterOutlined, InstagramOutlined, YoutubeFilled} from '@ant-design/icons';
const { Content} = Layout;

class FooterFrontEnd extends React.Component {
  render() {
  
    return(
      <Content className='component-footerfrontend'>
        <div className="div-footer">
          <div className="div-footer-child">
              <Row>
                <Col xl={8} lg={12} md={24} xs={24} className="col-contact">
                <div>
                <p className="contact">Contact</p>
                  <div className="form-contact">
                    <Form
                      name="basic"
                      initialValues={{ remember: true }}
                      layout="vertical"
                    >
                      <Form.Item
                        label="E-mail :"
                        name="Email"
                        
                      >
                        <Input placeholder="Enter your E-mail" className="input-email input-form"/>
                      </Form.Item>

                      <Form.Item
                        label="Subscribe :"
                        name="subscribe"
                        className="form-subscribe">
                        <Input.TextArea 
                          placeholder="Enter you Message"
                          autoSize={{ minRows: 6, maxRows: 6}}
                          className="input-email textArea-sub"
                        />
                      </Form.Item>
                      <Form.Item>
                        <Button type="primary" shape="round" className="btn-contact">SEND</Button>
                      </Form.Item>
                    
                  </Form>
                  </div>
                  
                </div>
            
                </Col>
                <Col xl={8} lg={12} md={24} xs={24}>
                  <p className="lara"> LARA RENOVATION HOME
                  </p>
                  <div className="div-lara">
                    
                    <Row>
                      <Col>
                        <p className="font18">Address : </p>
                        <p className="font18 row-email">Email : </p>
                        <p className="font18 row-email">Phone : </p>
                      </Col>
                      <Col className="col-naca">
                        <p className="font18">nacache chala ca</p>
                        <p className="font18 row-email">shift@gmail.com</p>
                        <p className="font18 row-email p-phone">+84 12345678</p>
                      </Col>
                    </Row>
                      <p className="font18 row-follow">Follow Us :</p>
                      <Row className="row-icon">
                        <FacebookFilled className="icon-footer icon-fb"/>
                        <TwitterOutlined className="icon-footer icon-tw"/>
                        <InstagramOutlined className="icon-footer icon-in"/>
                        <YoutubeFilled className="icon-ytb"/>
                      </Row>
                  </div>
                
                  
                  </Col>
                <Col xl={8} lg={24} md={24} xs={24} className="col-map">
                  <img src='./../images/frontend/map.png' alt="Lara"/>
                </Col>
              </Row>
          </div>

        </div>
      </Content>
    );
  }
}

FooterFrontEnd.propTypes = {
  className: PropTypes.string,
};

FooterFrontEnd.defaultProps = {
  className: 'component-footerfrontend',
};

export default FooterFrontEnd;
