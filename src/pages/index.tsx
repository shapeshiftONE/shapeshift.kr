import Layout from '../components/layout'
import {Col, Image, Row, Typography} from "antd";
import React from "react";

const { Title, Text, Paragraph } = Typography;

export default function Home() {
    return (
        <Layout home>
            <div className="site-card-border-less-wrapper">
                <Title style={{color: 'white'}}>광활한 DeFi Universe를 지금 탐험해 보세요</Title>
                <Text type="secondary" style={{color: 'gray'}}>100% 무료인, 중개인이 없는 비 수탁형 (Non-Custodial) 오픈소스 디파이 플랫폼, 쉐이프쉬프트.</Text>
                <div className="site-image">
                    <Image src={'img/platform.png'} width={600} preview={false}/>
                </div>
            </div>

            <div className="site-gray-card-border-wrapper">
                <Row>
                    <Col span={12}>
                        <div className="site-image">
                            <Image src="img/platform2.png" width={400} preview={false} />
                        </div>
                    </Col>
                    <Col span={12}>
                        <Typography className="site-typo">
                            <Title level={2}>즉시 자산을 거래하고 DeFi 세계를 탐험하세요.</Title>
                            <Text type="secondary" style={{color: 'gray'}}>새롭게 탈중앙화된 ShapeShift를 만나보세요.</Text>
                            <Paragraph>
                                <ul>
                                    <li>
                                        <Title level={3}>ID 불필요</Title>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in purus.
                                    </li>
                                    <li>
                                        <Title level={3}>무료 수수료</Title>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in purus.
                                    </li>
                                    <li>
                                        <Title level={3}>다중체인 플랫폼</Title>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in purus.
                                    </li>
                                </ul>
                            </Paragraph>
                        </Typography>
                    </Col>
                </Row>
            </div>
            <div className="site-card-border-less-wrapper">
                <Row gutter={16}>
                    <Col className="gutter-row" span={24}>
                        <div>
                            <Text type="secondary" style={{color: 'rgb(57 114 250)'}}>ESTABLISHED IN 2014.</Text>
                            <h1 style={{color: 'white'}}>Trusted by thousands of investors.</h1>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" span={8}>
                        <div>
                            <Title style={{color: 'white'}}>$6,000,000,000</Title>
                            <Text type="secondary" style={{color: 'rgb(57 114 250)'}}>LIFETIME TRADE VOLUME</Text>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div>
                            <Title style={{color: 'white'}}>150,000</Title>
                            <Text type="secondary" style={{color: 'rgb(57 114 250)'}}>MONTHLY ACTIVE USERS</Text>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div>
                            <Title style={{color: 'white'}}>500,000</Title>
                            <Text type="secondary" style={{color: 'rgb(57 114 250)'}}>WALLETS REGISTERED</Text>
                        </div>
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}