import {Suspense} from 'react'
import {I18nProvider} from '../_metronic/i18n/i18nProvider'
import {LayoutSplashScreen} from '../_metronic/layout/core'
import {
  MixedWidget2,
  MixedWidget10,
  MixedWidget11,
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget5,
  ListsWidget6,
  TablesWidget5,
  TablesWidget10,
  MixedWidget8,
} from '../_metronic/partials/widgets'

const LandingPage = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>

      <div className='col-xxl-4'>
        <ListsWidget5 className='card-xxl-stretch' />
      </div>

      </I18nProvider>
    </Suspense>
  )
}

export {LandingPage}
