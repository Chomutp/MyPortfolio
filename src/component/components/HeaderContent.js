import React, { Component } from "react";
import "../components/HeaderContent.css";
import { Row, Col, Carousel, Button } from "antd";

export default class HeaderContent extends Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="center" align="middle">
          <Col md={0} lg={11} xl={11}>
            <Row type="flex" justify="center">
              <Col className="text-welcome">
                <p className="text-name">Hi! I'm Uthumporn Naikorn</p>
                <p className="text-develop">
                  I'm Junior Web Develper Based on Thailand
                </p>
                <Button shape="round" className="button-port">
                  Portfolio
                </Button>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={20} md={20} lg={13} xl={13} className="container">
            <Carousel effect="fade" autoplay>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  className="pic-content"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1512626120412-faf41adb4874?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  className="pic-content"
                />
              </div>
              <div>
                <img
                  src="https://i.imgur.com/MDKvgcm.jpg"
                  className="pic-content"
                />
              </div>
            </Carousel>

            <div class="centered">
              <p className="text-name-pic">Hi! I'm Uthumporn Naikorn</p>
              <p className="text-develop-pic">
                I'm Junior Web Develper Based on Thailand
              </p>
              <Button shape="round" className="button-port-pic">
                Portfolio
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
