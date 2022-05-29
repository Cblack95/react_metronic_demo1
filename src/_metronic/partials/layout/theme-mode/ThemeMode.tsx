/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

const ThemeMode: FC = () => (


  <div
    className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-primary fw-bold py-4 fs-6 w-200px'
    data-kt-menu='true'
  >

    <div  className="menu-item px-3 my-1">
      <a href="/dashboard"  className="menu-link px-3 active">
        <span  className="menu-icon">
          <i className="fas fa-sun fs-2"></i>
        </span>
        <span  className="menu-title">Light</span>
      </a>
    </div>

    <div  className="menu-item px-3 my-1">
      <a href="/dashboard"  className="menu-link px-3">
        <span  className="menu-icon">
          <i className="fas fa-moon fs-2"></i>
        </span>
        <span  className="menu-title">Dark</span>
      </a>
    </div>

  </div>
)

export {ThemeMode}
