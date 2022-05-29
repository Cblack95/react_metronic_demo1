/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState,FC} from 'react'
import {Field, ErrorMessage} from 'formik'
import axios from "axios";

const API_URL=process.env.REACT_APP_BACKEND_API_URL

const Step1: FC = () => {
  const [Force, setForce] = useState<{title:string,name:string,color:string}>();
  const [Items, setItems] = useState([]);
  const [Criterias, setCriterias] = useState([]);
  const [Evals, setEvals] = useState([]);

  //Force
  useEffect(() => {
    fetchForce();
  }, []);

  const fetchForce = async () => {
    try {
      const response = await axios.get(API_URL+'/forces/1')
      setForce(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  //Items
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(API_URL+'/forces/1/items')
      setItems(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  //Criteria
  useEffect(() => {
    fetchCriterias();
  }, []);

  const fetchCriterias = async () => {
    try {
      const response = await axios.get(API_URL+'/sensitivities')
      setCriterias(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  //Evaluations
  useEffect(() => {
    fetchEvaluations();
  }, []);

  const fetchEvaluations = async () => {
    try {
      const response = await axios.get(API_URL+'/evaluations')
      setEvals(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className={'w-100 '}>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark'>
          {Force?.title}
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Billing is issued based on your selected account type'
          ></i>
        </h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info on this section, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Documentation
          </a>
          .
        </div>
      </div>

      {
        Items.map((item :any,indexitem:number)=>(
          <div className='fv-row'>
            <div className={'row rounded border-gray-300 border-1 border-gray-300 border-dashed px-7 py-1 mb-6'}>
              <label className='form-label required'>
                <strong>
                    {item.question} ?
                </strong>
              </label>

              <div className='col-lg-6'>
                <div className="input-group flex-nowrap" >
                  <span className="input-group-text">
                    <i className="bi bi-exclamation-square-fill fs-4"></i>
                  </span>
                  <div className="overflow-hidden flex-grow-1">
                    <Field
                      as='select'
                      name='item1'
                      className='form-select rounded-start-0'
                      data-control="select2"
                    >
                      <option></option>
                      {
                        Criterias.map((criteria :any,indexcrit:number)=>(
                          <option key={criteria.id} value={criteria.id}>{criteria.name}</option>
                      ))}

                    </Field>
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>
                <div className="input-group flex-nowrap" >
                  <span className="input-group-text">
                    <i className="bi bi-emoji-neutral text-primary fs-4"></i>
                  </span>
                  <div className="overflow-hidden flex-grow-1">
                    <Field
                      as='select'
                      name='item2'
                      className='form-select rounded-start-0'
                      data-control="select2"
                    >
                      <option></option>
                      {
                        Evals.map((evaluation :any,indexeval:number)=>(
                          <option key={evaluation.id} value={evaluation.id}>{evaluation.name}</option>
                      ))}
                    </Field>
                  </div>
                </div>
              </div>

              <div className='text-danger mt-2'>
                <ErrorMessage name='accountType' />
              </div>
            </div>
          </div>
        ))}


    </div>
  )
}

export {Step1}
