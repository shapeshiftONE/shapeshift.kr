import {Button, Image, Menu} from "antd";
import React from "react";
import {Header} from "antd/lib/layout/layout";
import {ArrowRightOutlined} from "@ant-design/icons";

const HeaderContainer = () => {
  return (
      <Header>
          <Menu mode="horizontal" theme={"dark"}>
              <span>
                  <Image src="img/logo.png" preview={false} width={160}/>
              </span>
              <Menu.Item key="blog" style={{marginLeft: 'auto'}}>
                  블로그
              </Menu.Item>
              <Menu.Item key="news">
                  뉴스
              </Menu.Item>
              <Menu.Item key="education">
                  교육
              </Menu.Item>
              <Menu.Item key="start">
                  <Button type="primary" shape="round">
                      시작하기 <ArrowRightOutlined />
                  </Button>
              </Menu.Item>
          </Menu>
      </Header>
  );
};

export default HeaderContainer;
