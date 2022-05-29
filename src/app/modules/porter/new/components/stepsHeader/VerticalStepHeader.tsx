/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'

import {Force} from '../../../../../../app/core/basicData/_models'

type Props = {
  force: Force
}

const VerticalStepHeader: FC<Props> = ({force}) => {

  return (
    <div>
      <div className='stepper-line w-40px'></div>

      <div className='stepper-icon w-40px h-40px'>
        <i className='stepper-check fas fa-check'></i>
        <span className='stepper-number'>{force.id}</span>
      </div>

      <div className='stepper-label'>
        <h3 className='stepper-title'>{force.name}</h3>

        <div className='stepper-desc fw-bold'>{force.title}</div>
      </div>
    </div>
  )
}

export {VerticalStepHeader}
