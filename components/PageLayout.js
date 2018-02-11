import Head from 'next/head'
import Link from 'next/link'
import { Layout, Menu } from 'antd'
const { Header, Content, Footer } = Layout
// import 'antd/lib/layout/style/index.css'
// import 'antd/lib/menu/style/index.css'

const PageLayout = (props) => (
  <Layout>
    <Head>
      <title>在炉边 By The Hearth</title>
      <link href="https://cdn.bootcss.com/antd/3.2.0/antd.min.css" rel="stylesheet" />
    </Head>
    <Header>
      <h1 style={{fontSize: 24, color: '#fff', margin: '0 20px 0 0', lineHeight: '63px', float: 'left'}}>
        By The Hearth
      </h1>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[props.name]}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="home">
          <Link href="/"><a className="nav-link">首页</a></Link>
        </Menu.Item>
        <Menu.Item key="cards">
          <Link href="/cards"><a className="nav-link">卡牌</a></Link>
        </Menu.Item>
        <Menu.Item key="desks">
          <Link href="/desks"><a className="nav-link">卡组</a></Link>
        </Menu.Item>
        <Menu.Item key="cardbacks">
          <Link href="/cardbacks"><a className="nav-link">卡背</a></Link>
        </Menu.Item>
      </Menu>
    </Header>

    <Content style={{ padding: '0 50px' }}>
      {props.children}
    </Content>

    <Footer style={{ textAlign: 'center' }}>
      By The Hearth ©2017 Created by mixj93
    </Footer>

    <style jsx>{`
      a.nav-link { text-decoration: none; }
    `}</style>
  </Layout>
)

export default PageLayout
