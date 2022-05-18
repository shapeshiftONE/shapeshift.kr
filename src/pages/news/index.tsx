import Layout from '../../components/layout'
import React from "react";
import {Typography} from "antd";

const { Title } = Typography;

export default function News() {
    return (
        <Layout>
            <div className="site-card-border-navy-wrapper">
                <Title style={{color: "white"}}>뉴스 페이지</Title>
            </div>
        </Layout>
    )
}
