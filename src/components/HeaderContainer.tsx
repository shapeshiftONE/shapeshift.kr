import {Button, Image, Menu} from "antd";
import React from "react";
import {Header} from "antd/lib/layout/layout";
import {ArrowRightOutlined} from "@ant-design/icons";
import Link from "next/link";

const HeaderContainer = ({className} : {className: string}) => {
  return (
      <Header className={className}>
          <Menu mode="horizontal" theme={"dark"}>
              <span style={{float: "left"}}>
                  <a href={'/'}>
                      <Image src="img/logo.png" preview={false} width={160} style={{margin: 20}}/>
                  </a>
              </span>
              <Menu.Item key="blog" style={{marginLeft: 'auto'}}>
                  <Link href={'/blog'}>블로그</Link>
              </Menu.Item>
              <Menu.Item key="news">
                  <Link href={'/news'}>뉴스</Link>
              </Menu.Item>
              <Menu.Item key="education">
                  <Link href={'/education'}>교육</Link>
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
