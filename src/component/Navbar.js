import React, { Component } from "react";
import "../component/Navbar.css";
import { Row, Col, Button, Drawer } from "antd";
import {
  PhoneOutlined,
  SmileOutlined,
  ProfileOutlined
} from "@ant-design/icons";
export default class Navbar extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div>
        <Row className="navbar">
          <Col xs={19} sm={19} md={5} lg={5} xl={5}>
            <Row type="flex" justify="center">
              <Col>
                <img
                  src="https://image.flaticon.com/icons/svg/2622/2622830.svg"
                  className="logo-nav"
                />
              </Col>
              &nbsp;&nbsp;
              <Col>
                <Button type="link" className="logo-text-nav">
                  MY PORTFOLIO
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={7} lg={7} xl={7}></Col>
          <Col md={12} lg={12} xl={12}>
            <Row type="flex" justify="end">
              <Col md={5} lg={5} xl={4} className="col-button-nav">
                <Button type="link" className="button-nav">
                  MY PROJECT
                </Button>
              </Col>
              <Col md={5} lg={5} xl={4}>
                <Button type="link" className="button-nav">
                  ABOUT ME
                </Button>
              </Col>
              <Col md={5} lg={5} xl={4} className="col-button-nav">
                <Button type="link" className="button-nav">
                  CONTACT
                </Button>
              </Col>
              <Col md={3} lg={0} xl={0}>
                <Button type="link" onClick={this.showDrawer}>
                  <img
                    src="https://www.pinclipart.com/picdir/big/181-1812493_menu-white-menu-button-png-clipart.png"
                    style={{ width: "20px" }}
                    className="ham-nav"
                  />
                </Button>
                <Drawer
                  title="Menu"
                  placement="right"
                  closable={false}
                  onClose={this.onClose}
                  visible={this.state.visible}
                >
                  <Row type="flex" justify="center">
                    <Col>
                      <Row>
                        <ProfileOutlined />
                        <Button type="link" className="drawer-nav">
                          MY PROJECT
                        </Button>
                      </Row>
                      <Row>
                        <SmileOutlined />
                        <Button type="link" className="drawer-nav">
                          ABOUT ME
                        </Button>
                      </Row>
                      <Row>
                        <PhoneOutlined />
                        <Button type="link" className="drawer-nav">
                          CONTACT
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Drawer>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
