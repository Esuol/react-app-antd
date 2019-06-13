import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { layoutAction, analyizeAction } from '../store/actions';
import history from '../history';
import store from '../store/index';

const currentPathname = history.location.pathname;

const mapDispatchToProps = {
  modifyPrevPath: layoutAction.modifyPrevPath
};

function mapStateToProps(state) {
  return {
    prevPath: state.layoutReducer.prevPath
  };
}

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const { ifAjax } = store.getState().layoutReducer; // 获取当前page有无ajax请求
    this.modifyPrevpath(prevProps.location.pathname); // 保存当前页为下次路径比较
    const { location } = this.props; // 现在location
    const prevPathname = store.getState().layoutReducer.prevPath; // 前一PAge 路径
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }

    if (!ifAjax && currentPathname !== prevPathname) {
      store.dispatch(analyizeAction.modifyInterviewLoading(true));
    }
  }

  modifyPrevpath = data => {
    const { modifyPrevPath } = this.props;
    modifyPrevPath(data);
  };

  render() {
    const { children } = this.props;
    return children;
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ScrollToTop)
);
