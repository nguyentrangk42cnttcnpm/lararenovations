import React from 'react';
import { connect } from 'dva';
import {Link} from 'dva/router';
import { Layout, Typography, Button, Tabs, Row, Col, Input, Affix, Menu, Form } from 'antd';
import intl from 'react-intl-universal';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BaseComponent from '../../../../components/BaseComponent';
import { SearchOutlined, MenuOutlined, FacebookFilled, TwitterOutlined, InstagramOutlined, GooglePlusSquareFilled } from '@ant-design/icons';
import './index.less';
const { SubMenu } = Menu;
const { Content } = Layout;
const { TabPane } = Tabs;
const responsive = {
  xxl: {
    breakpoint: { max: 4000, min: 1435 },
    items: 3.3
  },
  xl: {
    breakpoint: { max: 1435, min: 1352 },
    items: 3.1
  },
  xl1: {
    breakpoint: { max: 1352, min: 1310 },
    items: 3
  },

  lg: {
    breakpoint: { max: 1310, min: 1192 },
    items: 2.7
  },

  md: {
    breakpoint: { max: 1192, min: 1110 },
    items: 2.5
  },

  sm: {
    breakpoint: { max: 1110, min: 966 },
    items: 2.3
  },

  sm1: {
    breakpoint: { max: 966, min: 890 },
    items: 2.1
  },
  xs: {
    breakpoint: { max: 890, min: 840 },
    items: 2
  },
  xs1: {
    breakpoint: { max: 840, min: 768 },
    items: 1.7
  },
  xs2: {
    breakpoint: { max: 768, min: 677 },
    items: 2.1
  },
  xs3: {
    breakpoint: { max: 676, min: 646 },
    items: 2
  },

  xs4: {
    breakpoint: { max: 646, min: 556 },
    items: 1.7
  },

  xs5: {
    breakpoint: { max: 556, min: 497},
    items: 1.5
  },

  xs6: {
    breakpoint: { max: 497, min: 0},
    items: 1.2
  },

  xs7: {
    breakpoint: { max: 401, min: 373},
    items: 1.1
  },
  xs8: {
    breakpoint: { max: 373, min: 0},
    items: 1
  }
};

@connect()
export default class extends BaseComponent {
  state = {
    collapsed: false,
    width : '100%'
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    return (
      <Layout className="full-layout page home-page">
        <Content>
        <div className="div-first">
        <div>
            <Affix className="menu-affix">
              <Row className="row-menu">
                <Col xxl={11} xl={8} lg={5} md={24} xs={24}>
                  <div className='div-logo'>
                    <img src='./../images/frontend/logo.png' alt="Lara"/>
                  </div>
                </Col>
                <Col xxl={8} xl={11} lg={13} md={24} xs={24}>
                        <div className="div-menu-mobile">
                      <div className="div-menu-bar">
                        <div className='div-menu-btn'>
                              <Button type="primary" className = 'btn-primary' onClick={this.toggleCollapsed}>
                                {React.createElement(MenuOutlined)}
                              </Button>
                          </div>
                          <div className='div-logo-mobile'>
                          <img src='./../images/frontend/logo.png' alt="Lara"/>
                          </div>
                        </div>
                        <Menu onClick={this.handleClick} mode="inline" className={!this.state.collapsed ? 'menu-inline': 'menu-inline-active'} >
                          <Menu.Item key="home">
                            <Link to={`#home`}>Home</Link>
                          </Menu.Item>
                          <Menu.Item key="about">
                            <Link to={`#about`}>About</Link>
                          </Menu.Item>
                          <Menu.Item key="service">
                            <Link to={`#service`}>Service</Link>
                          </Menu.Item>
                          <Menu.Item key="review">
                            <Link to={`#review`}>Review</Link>
                          </Menu.Item>
                      </Menu>
                      
                    </div>
                    <div className='div-menu'>
                    <Menu onClick={this.handleClick} mode="horizontal">
                      <Menu.Item key="home">
                        <Link to={`#home`}>Home</Link>
                      </Menu.Item>
                      <Menu.Item key="about">
                        <Link to={`#about`}>About</Link>
                      </Menu.Item>
                      <Menu.Item key="service">
                        <Link to={`#service`}>Service</Link>
                      </Menu.Item>
                      <Menu.Item key="review">
                        <Link to={`#review`}>Review</Link>
                      </Menu.Item>
                    </Menu>
                  </div>
                </Col>
                <Col xl={5} lg={6} md={24}>
                  <div className='div-phone'>
                    <Row>
                      <img src='./../images/frontend/calling.svg' alt="Lara"/>
                      <a href="tel:+8490 999 888"><p> 090 999 888</p></a>
                    </Row>
                  </div>
                </Col>
              </Row>
           
           
          </Affix>
         
         <div className="div-first-content">
            <Row>
              <Col xl={14} xs={24} className="div-first-content-col-first">
                <p className="mb-0 p-what">WHAT WE CAN DO ?</p>
                <p className="mb-0 p-welcome">WELCOME TO </p>
                <p className="mb-0 p-lara">LARA RENOVATION HOME </p>
               
                <p className="mb-0 p-we">We always make the best resolution...</p>
                <Row className="row-get"> 
                  <Button shape="round" className="btn-get">GET STARTED</Button>
                  <img src='./../images/frontend/view-list.svg' alt="Lara"/>
                  <p className="mb-0 p-view"><a>View our Project</a></p>
                </Row>
              </Col>
              <Col xl={10} xs={24} className="div-first-content-col-second">
                <div className="div-form-get">
                  <p className="mb-0 p-get-your">GET YOUR FREE ESTIMATE</p>
                  <Form
                      name="basic"
                      initialValues={{ remember: true }}
                      layout="vertical"
                      className="form-get"
                    >
                      <Form.Item
                        name="name" 
                      >
                        <Input placeholder="Your Name *" className="input-your-name input-get input-your"/>
                      </Form.Item>

                      <Form.Item
                        name="email"
                        className="">
                        <Input placeholder="Your Email *" className="input-get input-your"/>
                       
                      </Form.Item>
                      <Form.Item
                        name="phone" 
                      >
                        <Input placeholder="Your Phone *" className="input-get input-your"/>
                      </Form.Item>
                      <Form.Item
                        name="message" 
                      >
                        <Input.TextArea 
                          placeholder="Message "
                          autoSize={{ minRows: 4, maxRows: 4}}
                          className="input-get textArea-mess"
                        />
                      </Form.Item>
                      <Form.Item className="item-btn-sub">
                        <Button shape="round" className="btn-sub">SUBMIT NOW</Button>
                      </Form.Item>
                    
                  </Form>

                </div>
              </Col>
            </Row>
         </div>
        </div>
        </div>
        
        <div className="div-second">
          <Row>
            <Col className="col-second-first" lg={12} xs={24} >
              <img src='./../images/frontend/sparks.png' alt="Lara"/>
            </Col>
            <Col className="col-second-second" lg={12} xs={24}>
              <p className="mb-0 p-welcome">WELCOME TO</p>
              <p className="mb-0 p-lara">LARA COMPANY</p>
              <div className="div-hr">
                <hr className="hr-lara"/>
              </div>
              <div className="div-p-first">
                <p className="mb-0 p-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="mb-0 p-text p-text-second">Nulla vehicula malesuada nisi eu rutrum.</p>
                <p className="mb-0 p-text p-text-second">Maecenas purus diam, lobortis at velit eget, ultricies posuere augue.</p>
                <p className="mb-0 p-text p-text-second">Nullam nec lectus a augue dictum euismod ut sed ex.</p>
                <p className="mb-0 p-text p-text-second">Integer pretium arcu neq ue, vitae mollis massa consequat eu</p>
                <p className="mb-0 p-text p-text-second">In eget dolor luctus, varius dui fringilla, lobortis odio.</p>
                <p className="mb-0 p-text p-text-second">Cras molestie nunc pretium, dictum lorem vel, vulputate mi.</p>
                <p className="mb-0 p-text p-text-second">Etiam ac ligula bibendum, luctus diam sit amet, rutrum ipsum.</p>
              </div>

              <div className="div-p-second">
                <p className="mb-0 p-text">Praesent tempus at neque non hendrerit. In euismod vestibulum sodales.</p>
                <p className="mb-0 p-text">Fusce feugiat dapibus facilisis</p>
                <p className="mb-0 p-text">Sed interdum mauris sed vulputate fringilla.</p>
                <p className="mb-0 p-text">Sed purus dui, tempus tempor velit vel,</p>
                <p className="mb-0 p-text">feugiat eleifend nulla.</p>
              </div>

              <div className="div-p-second">
                <p className="mb-0 p-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="mb-0 p-text">Donec nec purus luctus, fermentum libero vitae, accumsan leo.</p>
                <p className="mb-0 p-text">Etiam eu lacus et tortor molestie aliquam.</p>
                <p className="mb-0 p-text">Integer feugiat metus a tellus accumsan aliquet.</p>
              </div>
            </Col>
          </Row>
        </div>
      
        <div className="div-third">
          <div>
            <p className="mb-0 p-our-title">OUR RENOVATION SERVICES</p>
            <p className="mb-0 p-lorem-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod. Maecenas vestibulum libero ac elit ultrices, sit amet interdum purus feugiat.</p>
          </div>
          <div className="div-third-second">
            <Row>
              <Col xxl={6} lg={8} md={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/our-5.png' alt="Lara"/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">BATHROOM</p>
                    <p className="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                  </div>
                </div>
                <p className="mb-0 p-view"><a>View Detail</a></p>
              </Col>
              
              <Col xxl={6} lg={8} md={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/our-1.png' alt="Lara"/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">KITCHEN</p>
                    <p className="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                  </div>
                </div>
                <p className="mb-0 p-view"><a>View Detail</a></p>
              </Col>
             
              <Col xxl={6} lg={8} md={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/our-3.png' alt="Lara"/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">BEDROOM</p>
                    <p className="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                  </div>
                </div>
                <p className="mb-0 p-view">View Detail</p>
              </Col>
             
              <Col xxl={6} lg={8} md={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/our-4.png' alt="Lara"/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">LIVING/FAMILY ROOM</p>
                    <p className="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                  </div>
                </div>
                <p className="mb-0 p-view"><a>View Detail</a></p>
              </Col>
             
              <Col xxl={6} lg={8} md={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/our-6.png' alt="Lara"/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">BASEMENT</p>
                    <p className="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                  </div>
                </div>
                <p className="mb-0 p-view"><a>View Detail</a></p>
              </Col>
             
              <Col xxl={6} lg={8} md={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/our-5.png' alt="Lara"/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">GARAGE</p>
                    <p className="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                  </div>
                </div>
                <p className="mb-0 p-view"><a>View Detail</a></p>
              </Col>
             
              <Col xxl={6} lg={8} md={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/our-7.png' alt="Lara"/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">HOME REMODELLING & COMPLETE RENOVATION </p>
                    <p className="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                  </div>
                </div>
                <p className="mb-0 p-view"><a>View Detail</a></p>
              </Col>
             
              <Col xxl={6} lg={8} md={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/our-8.png' alt="Lara"/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">ENGINEERING</p>
                    <p className="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                  </div>
                </div>
                <p className="mb-0 p-view"><a>View Detail</a></p>
              </Col>
             
            </Row>

          </div>
       
        </div>
        
        <div className="div-fourth">
          <Row>
            <Col className="col-fourth-first" xl={14} xs={24}>
              <p className="mb-0 p-amazing">
                AMAZING FEATURES
              </p>
              <p className="mb-0 p-lorem-fourth">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula malesuada nisi eu rutrum. Maecenas purus diam, lobortis at velit eget, ultricies posuere augue. Nullam nec lectus a augue dictum euismod ut sed ex. Integer pretium arcu neque, vitae mollis massa consequat eu. In eget dolor luctus, varius dui fringilla, lobortis odio.
              </p>
             
              <Row className="row-second">
              
                <Row>
                  <div className="div-hr-first">
                  </div>
                  <div className="div-hr-second">
                  </div>
                  <div className="div-hr-third">
                  </div>
                  <div className="div-hr-fourth">
                  </div>
                </Row>
              
                  <div className="div-building">
                    <img src='./../images/frontend/building.svg' alt="Lara"/>
                    <p className="mb-0 p-bui">BUILDING</p>
                  </div>
                  <div className="div-building">
                    <img src='./../images/frontend/renovation.svg' alt="Lara"/>
                    <p className="mb-0 p-bui">RENOVATION</p>
                  </div>
                  <div className="div-building">
                    <img src='./../images/frontend/interior.svg' alt="Lara"/>
                    <p className="mb-0 p-bui">INTERIOR</p>
                  </div>
              </Row>
            </Col>
            <Col className="col-fourth-second" xl={10} xs={24}>
              <img src='./../images/frontend/div4.png' alt="Lara"/>
            </Col>
          </Row>
        </div>
        <Row className="div-fifth">
            <Col lg={8} xs={24}>
              <Row className="row-1000">
                <Col>
                  <img src='./../images/frontend/pr.svg' alt="Lara"/>
                </Col>
                <Col>
                  <p className="mb-0 p-100">1000</p>
                  <p className="mb-0 p-100">PROJECTS COMPLETE</p>
                </Col>
              </Row>
            </Col>
            <Col lg={8} xs={24}>
              <Row className="row-1000">
                <Col>
                  <img src='./../images/frontend/ha.svg' alt="Lara"/>
                </Col>
                <Col>
                  <p className="mb-0 p-100">1000</p>
                  <p className="mb-0 p-100">HAPPY CUSTORMERS</p>
                </Col>
              </Row>
            </Col>
            <Col lg={8} xs={24}>
              <Row className="row-1000">
                <Col>
                  <img src='./../images/frontend/ye.svg' alt="Lara"/>
                </Col>
                <Col>
                  <p className="mb-0 p-100">30</p>
                  <p className="mb-0 p-100">YEARS OF EXPERIENCED</p>
                </Col>
              </Row>
            </Col>
          </Row>
        
        <div className="div-sixth">
          <div>
            <p className="mb-0 p-our-title">WHY CHOOSE US</p>
            <p className="mb-0 p-lorem-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod. Maecenas vestibulum libero ac elit ultrices, sit amet interdum purus feugiat.</p>
          </div>
          <div className="div-sixth-second">
            <Row>
              <Col xxl={8} xl={9} xs={24} className="col-first-sixth">
                <img src='./../images/frontend/person.png' alt="Lara"/>
              </Col>
              <Col xxl={16} xl={15} xs={24} className="col-second-sixth">
                <Row className="col-second-sixth-row">
                  <Col sm={8} xs={24}>
                    <div className="col-qu">
                    <div className="div-qua">
                      <div className="div-qu">
                        <p className="mb-0">Quality Work</p>
                      </div>
                      <div className="div-pr">
                        <p className="mb-0">Praesent tempus at neque non hendrerit. In euismod vestibulum sodales. Fusce feugiat dapibus facilisis. Sed interdum mauris sed vulputate.</p>
                      </div>
                    </div>
                    <p className="mb-0 p-more"><a>More info</a></p>
                      </div>
                  </Col>
                  <Col sm={8} xs={24}>
                  <div className="col-qu">
                    <div className="div-qua">
                      <div className="div-qu">
                        <p className="mb-0">Engineering</p>
                      </div>
                      <div className="div-pr">
                        <p className="mb-0">Praesent tempus at neque non hendrerit. In euismod vestibulum sodales. Fusce feugiat dapibus facilisis. Sed interdum mauris sed vulputate.</p>
                      </div>
                    </div>
                    <p className="mb-0 p-more"><a>More info</a></p>
                  </div>
                  
                    
                  </Col>
                  
                  <Col sm={8}  xs={24}>
                
                     <div className="col-qu">
                  <div className="div-qua">
                    <div className="div-qu">
                      <p className="mb-0">Automate System</p>
                    </div>
                    <div className="div-pr">
                      <p className="mb-0">Praesent tempus at neque non hendrerit. In euismod vestibulum sodales. Fusce feugiat dapibus facilisis. Sed interdum mauris sed vulputate.</p>
                    </div>
                  </div>
                  <p className="mb-0 p-more"><a>More info</a></p>
                    
                    </div>
                   
                 
                  
                  </Col>
                  
                  <Col sm={8} xs={24}>
                  <div className="col-qu">
                  <div className="div-qua">
                    <div className="div-qu">
                      <p className="mb-0">Best Quality</p>
                    </div>
                    <div className="div-pr">
                      <p className="mb-0">Praesent tempus at neque non hendrerit. In euismod vestibulum sodales. Fusce feugiat dapibus facilisis. Sed interdum mauris sed vulputate.</p>
                    </div>
                  </div>
                  <p className="mb-0 p-more"><a>More info</a></p>
                    </div>
                  </Col>
                  
                  <Col sm={8} xs={24}>
                  <div className="col-qu">
                  <div className="div-qua">
                    <div className="div-qu">
                      <p className="mb-0">Experienced Team</p>
                    </div>
                    <div className="div-pr">
                      <p className="mb-0">Praesent tempus at neque non hendrerit. In euismod vestibulum sodales. Fusce feugiat dapibus facilisis. Sed interdum mauris sed vulputate.</p>
                    </div>
                  </div>
                  <p className="mb-0 p-more"><a>More info</a></p>
                    </div>
                  </Col>
                  
                  <Col sm={8} xs={24}>
                  <div className="col-qu">

                  <div className="div-qua">
                    <div className="div-qu">
                      <p className="mb-0">Safety</p>
                    </div>
                    <div className="div-pr">
                      <p className="mb-0">Praesent tempus at neque non hendrerit. In euismod vestibulum sodales. Fusce feugiat dapibus facilisis. Sed interdum mauris sed vulputate.</p>
                    </div>
                  </div>
                  <p className="mb-0 p-more"><a>More info</a></p>
                    </div>
                  </Col>
                  
                </Row>
              </Col>
            </Row>

          </div>
       

        </div>

        <div className="div-seventh">
          <div>
            <p className="mb-0 p-our-title">OUR CREATIVE TEAM</p>
            <p className="mb-0 p-lorem-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod. Maecenas vestibulum libero ac elit ultrices, sit amet interdum purus feugiat.</p>
          </div>
          <div className="div-third-second">
            <Row>
              <Col xl={6} sm={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/bee.png' alt="Lara"/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">Mr Bee</p>
                    <p className="mb-0 p-content">Engineering</p>
                    <Row className="row-icon">
                      <FacebookFilled className="icon-footer icon-fb"/>
                      <TwitterOutlined className="icon-footer icon-tw"/>
                      <InstagramOutlined className="icon-footer icon-in"/>
                      <GooglePlusSquareFilled className="icon-footer icon-in"/>
                    </Row>
                  </div>
                </div>
              </Col>  
              <Col xl={6} sm={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/bee.png' alt="Lara"/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">Mr Bee</p>
                    <p className="mb-0 p-content">Engineering</p>
                    <Row className="row-icon">
                      <FacebookFilled className="icon-footer icon-fb"/>
                      <TwitterOutlined className="icon-footer icon-tw"/>
                      <InstagramOutlined className="icon-footer icon-in"/>
                      <GooglePlusSquareFilled className="icon-footer icon-in"/>
                    </Row>
                  </div>
                </div>
              </Col>        
              <Col xl={6} sm={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/bee.png' alt="Lara"/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">Mr Bee</p>
                    <p className="mb-0 p-content">Engineering</p>
                    <Row className="row-icon">
                      <FacebookFilled className="icon-footer icon-fb"/>
                      <TwitterOutlined className="icon-footer icon-tw"/>
                      <InstagramOutlined className="icon-footer icon-in"/>
                      <GooglePlusSquareFilled className="icon-footer icon-in"/>
                    </Row>
                  </div>
                </div>
              </Col>        
              <Col xl={6} sm={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/bee.png' alt="Lara"/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">Mr Bee</p>
                    <p className="mb-0 p-content">Engineering</p>
                    <Row className="row-icon">
                      <FacebookFilled className="icon-footer icon-fb"/>
                      <TwitterOutlined className="icon-footer icon-tw"/>
                      <InstagramOutlined className="icon-footer icon-in"/>
                      <GooglePlusSquareFilled className="icon-footer icon-in"/>
                    </Row>
                  </div>
                </div>
              </Col>               
            </Row>

          </div>
          <Row className="row-search">
            <SearchOutlined className="icon-search" /> <p className="mb-0 p-view"><a>View all Member</a></p>
          </Row>
        </div> 
      
        <div className="div-eighth">
          <div>
            <p className="mb-0 p-our-title">RECENT PROJECTS</p>
            <p className="mb-0 p-lorem-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod. Maecenas vestibulum libero ac elit ultrices, sit amet interdum purus feugiat.</p>
          </div>
          <div className="div-third-second">
            <Row>
              <Col xxl={6} lg={8} md={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/our-6.png' alt="Lara"/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">BASEMENT Lorem ipsum dolor sit amet,</p>
                    <p className="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                  </div>
                </div>
                <p className="mb-0 p-view">View Detail</p>
               </Col>
               <Col xxl={6} lg={8} md={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/our-6.png'/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">BASEMENT</p>
                    <p className="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                  </div>
                </div>
                <p className="mb-0 p-view">View Detail</p>
               </Col>
               <Col xxl={6} lg={8} md={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/our-6.png' alt="Lara"/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">BASEMENT</p>
                    <p className="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                  </div>
                </div>
                <p className="mb-0 p-view">View Detail</p>
               </Col>
               <Col xxl={6} lg={8} md={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/our-6.png' alt="Lara"/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">BASEMENT</p>
                    <p className="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                  </div>
                </div>
                <p className="mb-0 p-view">View Detail</p>
               </Col>
               <Col xxl={6} lg={8} md={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/our-6.png' alt="Lara"/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">BASEMENT</p>
                    <p className="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                  </div>
                </div>
                <p className="mb-0 p-view">View Detail</p>
               </Col>
               <Col xxl={6} lg={8} md={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/our-6.png' alt="Lara"/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">BASEMENT</p>
                    <p className="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                  </div>
                </div>
                <p className="mb-0 p-view">View Detail</p>
               </Col>
               <Col xxl={6} lg={8} md={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/our-6.png' alt="Lara"/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">BASEMENT</p>
                    <p className="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                  </div>
                </div>
                <p className="mb-0 p-view">View Detail</p>
               </Col>
               <Col xxl={6} lg={8} md={12} xs={24}>
                <div className="div-col">
                  <img src='./../images/frontend/our-6.png' alt="Lara"/>
                  <div className="div-bath">
                    <p className="mb-0 p-bathroom">BASEMENT</p>
                    <p className="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                  </div>
                </div>
                <p className="mb-0 p-view">View Detail</p>
               </Col>
            </Row>

          </div>
       
        </div>

        <div className="div-nineth">
          <div>
            <p className="mb-0 p-our-title">TESTIMONIAL</p>
            <p className="mb-0 p-lorem-title">Clients send feedback for us</p>
          </div>

          <div className="div-third-second">
          <Carousel 
            swipeable={false} 
            draggable={false} 
            showDots={true}
            ssr={true} 
            infinite={true} 
            /* autoPlay={this.props.deviceType !== "mobile" ? true : false} */
            /* autoPlaySpeed={1000} */
            /* keyBoardControl={true} */
            /* customTransition="all .5" */
            /* transitionDuration={500} */
            /* containerClass="carousel-container" */
            /* removeArrowOnDeviceType={["tablet", "mobile"]} */
            deviceType={this.props.deviceType}
           dotListClass="custom-dot-list-style"
            /* itemClass="carousel-item-padding-40-px" */
            responsive={responsive} 
            className="div-carousel">
              <div className="div-carousel-item">
                <Row>
                  <img src='./../images/frontend/user.png' alt="Lara"/>
                  <div>
                    <p className="mb-0 p-al">ALIBABA XEKUTARA</p>
                    <p className="mb-0 p-ma">Manage Dota2 Club</p>
                  </div>
                </Row>
                <p className="mb-0 p-lor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.</p>
              </div>
              <div className="div-carousel-item">
                <Row>
                  <img src='./../images/frontend/user.png' alt="Lara"/>
                  <div>
                    <p className="mb-0 p-al">ALIBABA XEKUTARA</p>
                    <p className="mb-0 p-ma">Manage Dota2 Club</p>
                  </div>
                </Row>
                <p className="mb-0 p-lor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.</p>
              </div>
              <div className="div-carousel-item">
                <Row>
                  <img src='./../images/frontend/user.png' alt="Lara"/>
                  <div>
                    <p className="mb-0 p-al">ALIBABA XEKUTARA</p>
                    <p className="mb-0 p-ma">Manage Dota2 Club</p>
                  </div>
                </Row>
                <p className="mb-0 p-lor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.</p>
              </div>
              <div className="div-carousel-item">
                <Row>
                  <img src='./../images/frontend/user.png' alt="Lara"/>
                  <div>
                    <p className="mb-0 p-al">ALIBABA XEKUTARA</p>
                    <p className="mb-0 p-ma">Manage Dota2 Club</p>
                  </div>
                </Row>
                <p className="mb-0 p-lor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.</p>
              </div>              
            </Carousel>
            </div>
        </div>
        </Content>
      </Layout>
    );
  }
}
