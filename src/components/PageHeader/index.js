/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { PageHeader } from 'antd';
import { withRouter } from 'react-router-dom';
import { getRouteList } from './breadCrumb';
// import RouteList from '../../router';
import './index.less';

// console.log(RouteList);

const routes = [
  {
    path: '/dashboard/analyze',
    breadcrumbName: '数据分析'
  },
  {
    path: '/dashboard/workbench',
    breadcrumbName: '工作台'
  }
];

@withRouter
class Bread extends React.Component {
  render() {
    const {
      children,
      contentWidth,
      content,
      extraContent,
      interviewLoading
    } = this.props;

    return (
      <div>
        <PageHeader
          breadcrumb={getRouteList({ routes })}
          wide={contentWidth === 'Fixed'}
          loading={interviewLoading}
        >
          <div className="pageHeaderWrap">
            {content && <div className="content">{content}</div>}
            {extraContent && <div className="extraContent">{extraContent}</div>}
          </div>
        </PageHeader>
        {children ? <div>{children}</div> : null}
      </div>
    );
  }
}

export default Bread;
