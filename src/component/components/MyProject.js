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
              <Card
                hoverable
                title="BookSwap Project"
                className="card-myproject"
              >
                <img
                  src="https://i.imgur.com/j2K3zVj.jpg"
                  className="pic-projects"
                />
              </Card>
            </Row>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
            <Row justify="center">
              <Card hoverable title="Group Project" className="card-myproject">
                <img
                  src="https://i.imgur.com/Oj0UZn6.png"
                  className="pic-projects"
                />
              </Card>
            </Row>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
            <Row justify="center ">
              <Card
                hoverable
                title="HTML Tribute Page Project"
                className="card-myproject"
              >
                <img
                  src="https://i.imgur.com/rKrFXXR.jpg"
                  className="pic-projects"
                />
              </Card>
            </Row>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
            <Row justify="center">
              <Card
                hoverable
                title="HTML Resume Practice"
                className="card-myproject"
              >
                <img
                  src="https://i.imgur.com/wlkw6u3.png"
                  className="pic-projects"
                />
              </Card>
            </Row>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
            <Row justify="center">
              <Card
                hoverable
                title="Calculator with Redux"
                className="card-myproject"
              >
                <img
                  src="https://i.imgur.com/5gRH3TZ.png"
                  className="pic-projects"
                />
              </Card>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
