/* eslint-disable import/prefer-default-export */
import React from 'react'
import { Link } from 'react-router-dom'

// export const getCurrentRoute

// Render the Breadcrumb child node
// eslint-disable-next-line no-unused-vars
const itemRender = (route, params, routes, paths) => {
  const last = routes.indexOf(route) === routes.length - 1;
  // if path is home, use Link。
  if (route.path === '/') {
    return <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
  }
  return last || !route.component ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  );
};

export const getRouteList = props => {
  const { routes } = props
  return {
    routes,
    itemRender,
  }
}