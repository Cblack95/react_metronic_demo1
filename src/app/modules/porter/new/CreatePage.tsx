import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {Vertical} from './components/Vertical'
import {Horizontal} from './components/Horizontal'

const CreateBreadCrumbs: Array<PageLink> = [
  {
    title: 'Add a Model',
    path: '/porter/create/horizontal',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const CreatePage = () => (
  <Routes>
    <Route element={<Outlet />}>
      <Route
        path='horizontal'
        element={
          <>
            <PageTitle breadcrumbs={CreateBreadCrumbs}>Create from scratch</PageTitle>
            <Horizontal />
          </>
        }
      />
      <Route
        path='vertical'
        element={
          <>
            <PageTitle breadcrumbs={CreateBreadCrumbs}>Create from an existing</PageTitle>
            <Vertical />


          </>
        }
      />
      <Route index element={<Navigate to='/porter/create/horizontal' />} />
    </Route>
  </Routes>
)

export default CreatePage
