import Layout from '../../components/layout'
import React from "react";
import {Typography} from "antd";

const { Title } = Typography;

export default function Education() {
    return (
        <Layout>
            <div className="site-card-border-navy-wrapper">
                <Title style={{color: "white"}}>교육 페이지</Title>
            </div>
        </Layout>
    )
}
