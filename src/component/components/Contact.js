import React, { Component } from "react";
import "../components/Contact.css";
import { Row, Col, Divider, Input, Button } from "antd";
const { TextArea } = Input;
export default class Contact extends Component {
  render() {
    return (
      <div className="contact-div">
        <Row justify="center">
          <Col span={24}>
            <Divider orientation="left">
              <h2 className="text-contact">CONTACT</h2>
            </Divider>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Row justify="center">
              <Input className="input-contact" placeholder="First Name" />
            </Row>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Row justify="center">
              <Input className="input-contact" placeholder="First Name" />
            </Row>
          </Col>

          <Col>
            <Row>
              <Input
                className="input-full-contact"
                placeholder="Email Addess"
              />
            </Row>
          </Col>

          <Col>
            <Row>
              <Input
                className="input-full-contact"
                placeholder="Subject of the message"
              />
            </Row>
          </Col>

          <Col>
            <Row>
              <TextArea
                className="input-full-contact"
                placeholder="Your message"
              />
            </Row>
          </Col>
        </Row>
        <Row justify="center">
          <Button shape="round" className="button-send">
            {" "}
            Send Message
          </Button>
        </Row>
      </div>
    );
  }
}
