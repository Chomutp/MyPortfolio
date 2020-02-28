import React, { Component } from "react";
import "../components/AboutMe.css";
import { Row, Col, Divider, Steps, Rate } from "antd";
const { Step } = Steps;
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
          <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
          <Col xs={24} sm={18} md={12} lg={6} xl={6}>
            <Row justify="center">
              <blockquote className="text-content-aboutme">
                " Hi everyone!, My name is Uthumporn Naikorn and you can call me
                'Chompoo'. I am interested in website development, especially,
                Frontend development. With the willingness to learn, I love to
                work with teammates. Cared for the quality of work. Hope that I
                could make values to the company and improve my skills to become
                a professionalist. "
              </blockquote>
            </Row>
          </Col>
          <Col xs={24} sm={18} md={18} lg={7} xl={10}>
            <Row justify="center">
              <img
                src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/75552982_2579208365503688_8956890541866352640_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_eui2=AeHnYrZwxi7Ahm5FuWcix5TGTuwZisOThUoQ2RsVKFDohrd5AGI9X3LJMu8OegYq3KQC3XpWUunFoC03ja1Xen-vYhwOwwNBT3c_6d_-q9lnqA&_nc_oc=AQkSokABCPzjEyPrZ60pYFgj2AAQOzEj0gwhCWkMTHLTwByagoIb3K9KVdlNhJLQvBMfXnbuz2rHOJXe-ZfqXRco&_nc_pt=1&_nc_ht=scontent.fbkk5-3.fna&oh=4bb0806fcf88042db1840d507613adb6&oe=5EF38528"
                className="pic-abouttme"
              />
            </Row>
          </Col>
          <Col xs={24} sm={18} md={18} lg={6} xl={6}>
            <Row justify="center">
              <h3 className="skill">SKILLS & INTERESTS</h3>
            </Row>
            <Row justify="center" className="tools">
              <img
                src="https://image.flaticon.com/icons/svg/136/136528.svg"
                className="logo-tools"
              />
              &nbsp;&nbsp;&nbsp;
              <Rate disabled allowHalf defaultValue={3} />
            </Row>
            <Row justify="center" className="tools">
              <img
                src="https://image.flaticon.com/icons/svg/136/136527.svg"
                className="logo-tools"
              />
              &nbsp;&nbsp;&nbsp;
              <Rate disabled allowHalf defaultValue={3} />
            </Row>

            <Row justify="center" className="tools">
              <img
                src="https://image.flaticon.com/icons/svg/2306/2306122.svg"
                className="logo-tools"
              />
              &nbsp;&nbsp;&nbsp;
              <Rate disabled allowHalf defaultValue={2.5} />
            </Row>

            <Row justify="center" className="tools">
              <img
                src="https://image.flaticon.com/icons/svg/919/919851.svg"
                className="logo-tools"
              />
              &nbsp;&nbsp;&nbsp;
              <Rate disabled allowHalf defaultValue={2.5} />
            </Row>

            <Row justify="center" className="tools">
              <img
                src="https://image.flaticon.com/icons/svg/1348/1348052.svg"
                className="logo-tools"
              />
              &nbsp;&nbsp;&nbsp;
              <Rate disabled allowHalf defaultValue={2.5} />
            </Row>

            <Row justify="center" className="tools">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"
                className="logo-tools"
              />
              &nbsp;&nbsp;&nbsp;
              <Rate disabled defaultValue={3} />
            </Row>

            <Row justify="center" className="tools">
              <img
                src="https://image.flaticon.com/icons/svg/528/528260.svg"
                className="logo-tools"
              />
              &nbsp;&nbsp;&nbsp;
              <Rate disabled allowHalf defaultValue={2.5} />
            </Row>

            <Row justify="center" className="tools">
              <img
                src="https://pngimage.net/wp-content/uploads/2018/06/node-logo-png-2.png"
                className="logo-tools"
              />
              &nbsp;&nbsp;&nbsp;
              <Rate disabled allowHalf defaultValue={2.5} />
            </Row>

            <Row justify="center" className="tools">
              <img
                src="https://orangex_c.coding.me/vue-coverflow/img/yarn.69f65a80.png"
                className="logo-tools"
              />
              &nbsp;&nbsp;&nbsp;
              <Rate disabled allowHalf defaultValue={2.5} />
            </Row>

            <Row justify="center" className="tools">
              <img
                src="https://emanueleciriachi.net/wp-content/uploads/2019/01/logo-mongodb-png-mongodb-logo-png-400.png"
                className="logo-tools"
              />
              &nbsp;&nbsp;&nbsp;
              <Rate disabled allowHalf defaultValue={2} />
            </Row>
          </Col>
          <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
          <Col span={24}>
            <Row>
              <Divider orientation="center">
                <h2 className="text-aboutme">EDUCATION</h2>
              </Divider>
            </Row>
            <Row justify="center">
              <Steps progressDot current={2} className="edu-aboutme">
                <Step
                  title="B.Sc."
                  description="(2015 - 2019) &nbsp;&nbsp;&nbsp;Food Process Engineering  &nbsp;&nbsp;&nbsp; Faculty Agro-Industry  KMITL"
                />
                <Step
                  title="CodeCamp #4"
                  description="(10/2019 - 1/2020)  Fullstack  by Software Park Thailand"
                />
              </Steps>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
