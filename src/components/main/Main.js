import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AboutPage } from '../../pages/AboutPage'
import { HomePage } from '../../pages/HomePage'
import { NotFoundPage } from '../../pages/NotFoundPage'
import ProductListPage from '../../pages/ProductListPage'
import { AboutDetails } from '../about/AboutDetails'
import { Education } from '../about/Education'
import { Experience } from '../about/Experience'

const Main = () => {
  return (
    <section className='content'>
      <div className='content-wrap'>
        {/* <div className='navbar-container'> */}
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route
            path="/products"
            component={ProductListPage}
          />
          <Switch>
            <Route path="/about/education" component={Education} />
            <Route path="/about/experience" component={Experience} />
            <Route path="/about/:topicId">
              <AboutDetails />
            </Route>
          </Switch>
          <Route path="*" component={NotFoundPage} />
        </Switch>
        {/* </div> */}
      </div>
    </section>
  )
}

export default Main
