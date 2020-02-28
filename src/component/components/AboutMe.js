import React, { Component } from "react";
import "../components/AboutMe.css";
import { Row, Col, Divider } from "antd";
export default class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme-div">
        <Row justify="center">
          <Col span={24}>
            <Divider orientation="left">
              <h2 className="text-aboutme">ABOUT ME</h2>
            </Divider>
          </Col>
          <Col xs={0} sm={0} md={0} lg={1} xl={1}></Col>
          <Col xs={24} sm={18} md={12} lg={6} xl={6}>
            <p className="text-content-aboutme">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
              consectetur est aliquid repellat explicabo commodi, fuga, deleniti
              atque sint dicta exercitationem consequuntur! Ut odit saepe non
              ducimus totam ab necessitatibus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Vitae sint minus eligendi nostrum ex
              quaerat sit libero dignissimos suscipit. Maiores ducimus debitis
              perspiciatis quo quaerat aspernatur in odit voluptates aperiam.
            </p>
          </Col>
          <Col xs={0} sm={0} md={0} lg={1} xl={1}></Col>
          <Col xs={24} sm={18} md={18} lg={7} xl={7}>
            <img
              src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/75552982_2579208365503688_8956890541866352640_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_eui2=AeHnYrZwxi7Ahm5FuWcix5TGTuwZisOThUoQ2RsVKFDohrd5AGI9X3LJMu8OegYq3KQC3XpWUunFoC03ja1Xen-vYhwOwwNBT3c_6d_-q9lnqA&_nc_oc=AQkSokABCPzjEyPrZ60pYFgj2AAQOzEj0gwhCWkMTHLTwByagoIb3K9KVdlNhJLQvBMfXnbuz2rHOJXe-ZfqXRco&_nc_pt=1&_nc_ht=scontent.fbkk5-3.fna&oh=4bb0806fcf88042db1840d507613adb6&oe=5EF38528"
              className="pic-abouttme"
            />
          </Col>
          <Col xs={0} sm={0} md={0} lg={1} xl={1}></Col>
          <Col xs={24} sm={18} md={18} lg={6} xl={6}>
            <p className="text-content-aboutme">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
              consectetur est aliquid repellat explicabo commodi, fuga, deleniti
              atque sint dicta exercitationem consequuntur! Ut odit saepe non
              ducimus totam ab necessitatibus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Vitae sint minus eligendi nostrum ex
              quaerat sit libero dignissimos suscipit. Maiores ducimus debitis
              perspiciatis quo quaerat aspernatur in odit voluptates aperiam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, exercitationem, maxime doloribus iure dolorem
              architecto voluptas vero eius consequuntur neque natus at! Enim
              at, aut magnam soluta laboriosam officiis molestias.
            </p>
          </Col>
          <Col xs={0} sm={0} md={0} lg={1} xl={1}></Col>
        </Row>
      </div>
    );
  }
}
