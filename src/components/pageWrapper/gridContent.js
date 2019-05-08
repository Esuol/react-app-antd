import React, { pureComponent } from 'react'
import { connect } from 'react-redux'
import './index.less'

class GridContent extends pureComponent {
  render () {
    const { contentWidth, children } = this.props;
    let className = ``;
    if (contentWidth === 'Fixed') {
      className = `main wide`;
    }
    return <div className={className}>{children}</div>;
  }
}
export default connect(({ setting }) => ({
  contentWidth: setting.contentWidth,
}))(GridContent)
