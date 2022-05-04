import React, { FC } from 'react';
import {Button, PageHeader} from 'antd';
import './App.css';

const App: FC = () => (
    <PageHeader
        title="ShapeShift"
        extra={[
            <Button key="3" type="link">블로그</Button>,
            <Button key="2" type="link">뉴스</Button>,
            <Button key="2" type="link">교육</Button>,
            <Button key="1" type="primary">
                시작하기
            </Button>,
        ]}/>

);

export default App;