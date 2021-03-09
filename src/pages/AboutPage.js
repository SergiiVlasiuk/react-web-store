// import React from 'react'
// import { useRouteMatch } from 'react-router-dom'
// import { BrowserRouter, useRouteMatch } from 'react-router-dom'
// import { Router } from 'react-router-dom'
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import { AboutDetails } from '../components/about/AboutDetails'
import { Education } from '../components/about/Education'
import { Experience } from '../components/about/Experience'
import { NotFoundPage } from './NotFoundPage'

export const AboutPage = ({ location }) => {
  console.log('location', location)
  let { path, url } = useRouteMatch()
  let { topicId } = useParams()
  console.log('path', path)
  console.log('url', url)
  console.log('topicId', topicId)
  return (
    <>
      <div>
        <h1>Welcome to about page.</h1>
      </div>
      {/* <Header /> */}
      <ul>
        <li>
          <Link to={`${url}/education`} exec>
            education
          </Link>
        </li>
        <li>
          <Link to={`${url}/experience`} exec>experience</Link>
        </li>
        <li>
          <Link to={`${url}/other`}>other details</Link>
        </li>
        {/* <li>
          <Link to='/about/education'>/about/education - second link</Link>
        </li>
        <li>
          <Link to='./education'>./education - third link</Link>
        </li> */}
      </ul>
      {/* <Switch path='.'>
        <Route path={`${url}/education`} component={Education} />
        <Route path={`${url}/education`} component={Education} />
        <Route path='*' component={NotFoundPage} />
      </Switch> */}
      <Switch>
        <Route exact path={path}>
          <h3>Please select about topic.</h3>
        </Route>
        <Route path={`${path}/education`} component={Education} />
        <Route path={`${path}/experience`} component={Experience} />
        {/* <Route path={`${path}/:topicId`}>
          <Education />
        </Route> */}
        <Route path={`${path}/:topicId`}>
          <AboutDetails />
        </Route>
        {/* <Route path={`${path}/:topicId`}>
          <h2>routing inside about page</h2>
        </Route> */}
      </Switch>
    </>
  )
}
