import React from 'react'
import cx from 'classnames'
import {NavLink, Link} from 'react-router-dom'

import Panel from './Panel'

const Navbar = () => {
  return (
    <Panel className="sticky top-0 overflow-y-scroll flex flex-col item-start">
      <Link to="/" className="text-blue-500">
        Cards
      </Link>
      {/* Add additional component links here as needed */}
    </Panel>
  )
}

export default Navbar
