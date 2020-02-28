import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import MyContent from "./component/MyContent";
import MyFooter from "./component/MyFooter";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Header className="header">
          <Navbar />
        </Header>

        <Content>
          <MyContent />
        </Content>

        <Footer>
          <MyFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
