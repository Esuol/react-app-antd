/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Avatar, List } from 'antd';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import EditableLinkGroup from '../../components/EditableLinkGroup';
import Radar from '../../components/charts/Radar';
import {
  workBenchCardList,
  activityList,
  links,
  radarData
} from '../../const/dashboard';
import { analyizeAction } from '../../store/actions';
import './workbench.less';

function mapStateProps(state) {
  return {
    interviewLoading: state.analyizeReducer.interviewLoading
  };
}

const mapDispatchToProps = {
  modifyInterviewLoading: analyizeAction.modifyInterviewLoading
};

class WorkBentch extends React.Component {
  async componentDidMount() {
    setTimeout(() => {
      this.ModifyInterviewLoading(false);
    }, 1000);
  }

  ModifyInterviewLoading = data => {
    const { modifyInterviewLoading } = this.props;
    modifyInterviewLoading(data);
  };

  render() {
    const pageHeaderContent = (
      <div>
        <p className="f20px title">早安，Berlin，祝你开心工作每一天！</p>
        <p>
          陌生人，我也为你祝福 愿你有一个灿烂的前程 愿你有情人终成眷属
          愿你在尘世获的幸福
        </p>
      </div>
    );

    const extraContent = (
      <div className="extraContent">
        <div className="statItem">
          <p>姓名</p>
          <p>Berlin</p>
        </div>
        <div className="statItem">
          <p>爱好</p>
          <p>
            健身<span>/Code</span>
          </p>
        </div>
        <div className="statItem">
          <p>项目访问</p>
          <p>2,223</p>
        </div>
      </div>
    );

    const { interviewLoading } = this.props;
    console.log(interviewLoading);

    return (
      <PageHeader content={pageHeaderContent} extraContent={extraContent}>
        <Row gutter={24} style={{ marginTop: 24 }}>
          <Col xl={16} lg={24} md={24} sm={24} xs={24}>
            <Card
              title="海子的诗集"
              extra={<Link to="/">全部项目</Link>}
              loading={interviewLoading}
            >
              {workBenchCardList.map(item => (
                <Card.Grid key={item.id}>
                  <Card bodyStyle={{ padding: 0 }} bordered={false}>
                    <Card.Meta
                      avatar={<Avatar src={item.avtar} />}
                      title={item.title}
                      description={item.content}
                    />
                    <div className="projectItemContent">
                      <span className="datetime" title={item.updatedAt}>
                        {item.time}
                      </span>
                    </div>
                  </Card>
                </Card.Grid>
              ))}
            </Card>
            <Card
              loading={interviewLoading}
              style={{ marginTop: 24, paddingLeft: 24 }}
              bodyStyle={{ padding: 0 }}
              bordered={false}
              title="动态"
            >
              <List
                loading={interviewLoading}
                itemLayout="horizontal"
                dataSource={activityList}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title={
                        <a href="https://github.com/berlinen/react-app-antd">
                          {item.title}
                        </a>
                      }
                      description={item.time}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <Card
              style={{ marginBottom: 24 }}
              title="快速开始 / 便捷导航"
              bordered={false}
              bodyStyle={{ padding: 0 }}
            >
              <EditableLinkGroup
                onAdd={() => {}}
                links={links}
                linkElement={Link}
              />
            </Card>
            <Card style={{ marginBottom: 24 }} bordered={false} title="XX 指数">
              <div className="chart">
                <Radar
                  height={340}
                  padding={[20, 20, 95, 20]}
                  data={radarData}
                  hasLegend
                />
              </div>
            </Card>
          </Col>
        </Row>
      </PageHeader>
    );
  }
}

export default connect(
  mapStateProps,
  mapDispatchToProps
)(WorkBentch);
