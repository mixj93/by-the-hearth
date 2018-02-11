import PageLayout from '../components/PageLayout'
import { Breadcrumb } from 'antd'

export default () => (
  <PageLayout name="home">
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>卡背</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        Welcome to By The Hearth!
      </div>
    </div>
  </PageLayout>
)