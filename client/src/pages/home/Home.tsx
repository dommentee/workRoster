import React from "react";
import "./Home.scss";
import Title from "antd/lib/typography/Title";
import { Row, Col, Card, Spin } from "antd";
import { MeComponent } from "../../lib/codegen";

interface IProps {

}

export const Home: React.FC<IProps> = props => {
  return (
    <div className="home-root">
      <MeComponent>
        {({loading, error, data }) => {
          if (loading) return <Spin />
          if (error) return <div>{error.message}</div>

          if(data && data.me) return (
            <div> <Title className="home-title">Welcome {data.me.name}</Title></div>
          )
          return <div></div>
        }}
      </MeComponent>
      <Row style={{ width: "100%" }} className="home-cards">
        <Col xs={24} sm={12}>
          <Card
            title={<Title level={4}>Card Title</Title>}
          >
            This is a card!
          </Card>
        </Col>
        <Col xs={24} sm={12}>
        <Card
            title={<Title level={4}>Card Title</Title>}
          >
            This is a card!
          </Card>
        </Col>
      </Row>
      <Row style={{ width: "100%" }} className="home-cards">
        <Col xs={24} sm={12}>
          <Card
            title={<Title level={4}>Card Title</Title>}
          >
            This is a card!
          </Card>
        </Col>
        <Col xs={24} sm={12}>
        <Card
            title={<Title level={4}>Card Title</Title>}
          >
            This is a card!
          </Card>
        </Col>
      </Row>
    </div>
  );
}