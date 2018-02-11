import PageLayout from '../components/PageLayout'
import { Breadcrumb, List, Card } from 'antd'
import { fetchData } from '../utils/api'

const Cardbacks = (props) => (
  <PageLayout name="cardbacks">
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>卡背</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <List
          grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
          dataSource={props.cardbacks}
          renderItem={item => (
            <List.Item>
              <Card title={item.name}>
                <img className="cardback-image" src={item.img} alt={item.name} />
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
    <style jsx>{`
      .cardback-image {
        max-width: 100%;
      }
    `}</style>
  </PageLayout>
)

Cardbacks.getInitialProps = async function() {
  const cardbacks = await fetchData('/cardbacks')

  return {
    cardbacks
  }
}

export default Cardbacks