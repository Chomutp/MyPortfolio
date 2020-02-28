import React, { Component } from "react";
import "../components/MyProject.css";
import { Row, Col, Divider, Card } from "antd";

export default class MyProject extends Component {
  render() {
    return (
      <div className="myproject-div">
        <Row>
          <Col span={24}>
            <Divider orientation="right">
              <h2 className="text-aboutme">MY PROJECTS</h2>
            </Divider>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
            <Row justify="center">
              <Card hoverable title="Card title" className="card-myproject">
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Row>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
            <Row justify="center">
              <Card hoverable title="Card title" className="card-myproject">
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Row>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
            <Row justify="center">
              <Card hoverable title="Card title" className="card-myproject">
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Row>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
            <Row justify="center">
              <Card hoverable title="Card title" className="card-myproject">
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Row>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
            <Row justify="center">
              <Card hoverable title="Card title" className="card-myproject">
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
