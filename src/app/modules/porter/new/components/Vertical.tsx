import React, {FC, useEffect, useRef, useState} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Step0} from './steps/Step0'
import {Step} from './steps/Step'
import { FinalStep } from './steps/FinalStep'
import {useDataForces,useDataAssessments,useDataRatings} from './../../../../../app/core/basicData/DataResponseProvider'
import {StepperComponent} from '../../../../../_metronic/assets/ts/components'
import {Formik, Form, FormikValues} from 'formik'
import {createModelSchemas, ICreateModel, inits} from './CreateModelHelper'
// import { VerticalStepHeader } from './stepsHeader/VerticalStepHeader'
// import { usePersonalDataForm } from '../../../../core/basicData/PersonalDataResponseProvider'
import {isNotEmpty} from './../../../../../_metronic/helpers'
import { useFormData } from './FormDataProvider'


const Vertical: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createModelSchemas[0])
  const Criterias = useDataRatings()
  const Evals = useDataAssessments()
  const forces = useDataForces()
  const {formData,saveFormData,updateFormData} = useFormData()

  // useEffect(() => {
  //   fetchStep();
  // }, []);

  // const fetchStep = async () => {
  //   try {
  //     const response = await axios.get(API_URL+'/forces')
  //     setStepData(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return console.log('error step prev')
    }

    stepper.current.goPrev()
    setCurrentSchema(createModelSchemas[stepper.current.currentStepIndex - 1])
  }

  const submitStep = (values: ICreateModel, actions: FormikValues) => {
    // console.log(stepper.current)
    if (!stepper.current) {
      return console.log('error step next')
    }

    saveFormData(values)
    setCurrentSchema(createModelSchemas[stepper.current.currentStepIndex-1])

    if (stepper.current.currentStepIndex!== stepper.current.totatStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
      actions.resetForm()
    }
  }

  const handleBlur = (event: any) => {
    var touchedField:any={}
    var key:any = event.target.name;
    var value:string = event.target.value;

    touchedField[key]=value
    if ( isNotEmpty(key) && isNotEmpty(value)) {
      updateFormData(touchedField)
      saveFormData(formData)
    }
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return console.log('error load step')
    }

    loadStepper()
  }, [stepperRef])


  return (
    <div
      ref={stepperRef}
      className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
      id='kt_create_model_stepper'
    >
      <div className='d-flex justify-content-center bg-white rounded justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9'>
        <div className='px-6 px-lg-10 px-xxl-15 py-20'>
          <div className='stepper-nav'>
            <div key={10} className='stepper-item current' data-kt-stepper-element='nav'>
              <div className='stepper-line w-40px'></div>

              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>0</span>
              </div>

              <div className='stepper-label'>
                <h3 className='stepper-title'>Model infos</h3>

                <div className='stepper-desc fw-bold'>Setup your model details</div>
              </div>
            </div>

            <div key={11} className='stepper-item'  data-kt-stepper-element='nav'>
              <div className='stepper-line w-40px'></div>

              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>1</span>
              </div>

              <div className='stepper-label'>
                <h3 className='stepper-title'>Competitors</h3>

                <div className='stepper-desc fw-bold'>Rivalry among competitors</div>
              </div>
            </div>

            <div key={12} className='stepper-item'  data-kt-stepper-element='nav'>
              <div className='stepper-line w-40px'></div>

              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>2</span>
              </div>

              <div className='stepper-label'>
                <h3 className='stepper-title'>Customers</h3>

                <div className='stepper-desc fw-bold'>Customer bargaining power</div>
              </div>
            </div>

            <div key={13} className='stepper-item'  data-kt-stepper-element='nav'>
              <div className='stepper-line w-40px'></div>

              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>3</span>
              </div>

              <div className='stepper-label'>
                <h3 className='stepper-title'>Providers</h3>

                <div className='stepper-desc fw-bold'>Bargaining power of suppliers</div>
              </div>
            </div>

            <div key={14} className='stepper-item'  data-kt-stepper-element='nav'>
              <div className='stepper-line w-40px'></div>

              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>4</span>
              </div>

              <div className='stepper-label'>
                <h3 className='stepper-title'>New entrants</h3>

                <div className='stepper-desc fw-bold'>Threat of new competitors entry</div>
              </div>
            </div>

            <div key={15} className='stepper-item'  data-kt-stepper-element='nav'>
              <div className='stepper-line w-40px'></div>

              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>5</span>
              </div>

              <div className='stepper-label'>
                <h3 className='stepper-title'>Substitute products</h3>

                <div className='stepper-desc fw-bold'>Substitute products</div>
              </div>
            </div>

            <div key={16} className='stepper-item'  data-kt-stepper-element='nav'>
              <div className='stepper-line w-40px'></div>

              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>6</span>
              </div>

              <div className='stepper-label'>
                <h3 className='stepper-title'>Completed</h3>

                <div className='stepper-desc fw-bold'>Woah, we are here</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex flex-row-fluid flex-center bg-white rounded'>
        <Formik validationSchema={currentSchema} initialValues={formData?? inits} onSubmit={submitStep}  >
          {() => (
            <Form onBlur={handleBlur} className='py-20 w-100 w-xl-700px px-9' noValidate id='kt_create_model_form'>

              <div key={0} data-kt-stepper-element="content" className='current' >
                <Step0 />
              </div>

              {
                forces.map((force :any,indexstep:number)=>(
                  <div key={force.id} data-kt-stepper-element="content">
                    <Step force={force} Criterias={Criterias} Evals={Evals} />
                  </div>
                ))
              }

              <div key={6} data-kt-stepper-element="content">
                <FinalStep />
              </div>

              <div className='d-flex flex-stack pt-10'>
                <div className='mr-2'>
                  <button
                    onClick={prevStep}
                    type='button'
                    className='btn btn-lg btn-light-primary me-3'
                    data-kt-stepper-action='previous'
                  >
                    <KTSVG
                      path='/media/icons/duotune/arrows/arr063.svg'
                      className='svg-icon-4 me-1'
                    />
                    {/* {`Back${stepper.current?.currentStepIndex}`} */}
                    Back
                  </button>
                </div>

                {stepper.current?.currentStepIndex !==
                stepper.current?.totatStepsNumber! - 1 &&
                  <div>
                    <button type='submit' className='btn btn-lg btn-primary me-3'>
                      <span className='indicator-label'>
                          {stepper.current?.currentStepIndex! <
                          stepper.current?.totatStepsNumber! - 2 && 'Continue'}
                          {stepper.current?.currentStepIndex ===
                          stepper.current?.totatStepsNumber! - 2 && 'Submit'}

                        <KTSVG
                          path='/media/icons/duotune/arrows/arr064.svg'
                          className='svg-icon-3 ms-2 me-0'
                        />
                      </span>
                    </button>
                  </div>
                }

              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export {Vertical}
