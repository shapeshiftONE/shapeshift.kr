import Layout from '../../components/layout'
import React from "react";
import {Typography} from "antd";

const { Title } = Typography;

export default function Blog() {
    return (
        <Layout>
            <div className="site-card-border-less-wrapper">
                <Title style={{color: "white"}}>블로그 페이지</Title>
            </div>
        </Layout>
    )
}
