import Head from 'next/head'
// @ts-ignore
import styles from './layout.module.css'
import HeaderContainer from "./HeaderContainer";
import {Footer} from "antd/lib/layout/layout";
import FooterContainer from "./FooterContainer";

const name = 'ShapeShift'
export const siteTitle = 'ShapeShift KR'

export default function Layout({
                                   children,
                                   home
                               }: {
    children: React.ReactNode
    home?: boolean
}) {
    return (
        <div className={styles.container}>
            <Head>
                <HeaderContainer className={styles.header}/>
            </Head>
            <main>{children}</main>
            <Footer>
                <FooterContainer/>
            </Footer>
        </div>
    )
}