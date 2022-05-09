import {Col, Divider, Row, Typography} from "antd";
import React from "react";
import {GithubOutlined, InstagramOutlined, TwitterOutlined} from "@ant-design/icons";
import Link from "next/link";

const { Text } = Typography;

const FooterContainer = () => {
  return (
      <>
          <Row gutter={16}>
              <Col className="gutter-row" span={8}>
                  <div>
                      <Text type="secondary">SHAPESHIFT ECOSYSTEM</Text>
                      <br/><br/>
                      <p>ShapeShift Platform</p>
                      <p>KeepKey Hardware Wallet</p>
                      <p>Portis Wallet</p>
                      <p>CoinCap API</p>
                      <p>DeFi Programs</p>
                  </div>
              </Col>
              <Col className="gutter-row" span={8}>
                  <div>
                      <Text type="secondary">MORE INFORMATION</Text>
                      <p>FOX Token</p>
                      <p>DAO Governance</p>
                      <p>ShapeShift History</p>
                      <p>ShapeShift Mission</p>
                      <p>How To Get Involved</p>
                  </div>
              </Col>
              <Col className="gutter-row" span={8}>
                  <div>
                      <Text type="secondary">쉐이프쉬프트 DAO</Text>
                      ShapeShift is a decentralized organization that operates without borders.
                      There are no central headquarters, and the development of the ShapeShift ecosystem relies on individual DAO contributors.
                      <Link href={""}>Learn more about how ShapeShift and DAOs operate.</Link>
                  </div>
              </Col>
          </Row>
          <Divider/>
          <Row>
              <Col span={12} style={{float: 'left'}}>
                  <Text>ShapeShift</Text>
              </Col>
              <Col span={12}>
                  <TwitterOutlined style={{float: 'right', margin: 5}}/>
                  <InstagramOutlined style={{float: 'right', margin: 5}}/>
                  <GithubOutlined style={{float: 'right', margin: 5}}/>
              </Col>
          </Row>
      </>
  );
};

export default FooterContainer;
