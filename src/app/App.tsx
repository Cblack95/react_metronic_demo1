import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {I18nProvider} from '../_metronic/i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from '../_metronic/layout/core'
import {MasterInit} from '../_metronic/layout/MasterInit'
import {AuthInit} from './modules/auth'
import {DataResponseProvider} from '../app/core/basicData/DataResponseProvider'
import {PersonalDataProvider} from '../app/core/basicData/PersonalDataResponseProvider'
import { FormDataProvider } from './modules/porter/new/components/FormDataProvider'

const App = () =>
{
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <AuthInit>
            <DataResponseProvider>
              <PersonalDataProvider>
                <FormDataProvider>
                  <Outlet />
                  <MasterInit />
                </FormDataProvider>
              </PersonalDataProvider>
            </DataResponseProvider>
          </AuthInit>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export {App}
