import React, { Component } from "react";
import "../component/MyContent.css";
import HeaderContent from "./components/HeaderContent";
import AboutMe from "./components/AboutMe";
import MyProject from "./components/MyProject";
import Contact from "./components/Contact";
import { Row, Col } from "antd";

export default class MyContent extends Component {
  render() {
    return (
      <div>
        <HeaderContent />
        <AboutMe />
        <MyProject />
        <Contact />
      </div>
    );
  }
}
