import React, { Component } from "react";
import "./MyFooter.css";
import { Row, Col } from "antd";
import {
  GithubOutlined,
  GitlabOutlined,
  InstagramOutlined,
  FacebookOutlined,
  CodepenOutlined,
  CodeSandboxOutlined
} from "@ant-design/icons";
export default class MyFooter extends Component {
  render() {
    return (
      <div>
        <Row justify="center">
          <Col span={10} className="text-footer">
            <h2>Follow Me</h2>
            <Row type="flex" justify="center">
              <a href="#">
                <GithubOutlined className="icon-footer" />
              </a>
              <a href="#">
                <GitlabOutlined className="icon-footer" />
              </a>
              <a href="#">
                <InstagramOutlined className="icon-footer" />
              </a>
              <a href="#">
                <FacebookOutlined className="icon-footer" />
              </a>
              <a href="#">
                <CodepenOutlined className="icon-footer" />
              </a>
              <a href="#">
                <CodeSandboxOutlined className="icon-footer" />
              </a>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
