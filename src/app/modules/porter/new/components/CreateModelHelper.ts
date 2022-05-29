import * as Yup from 'yup'
// import {getFormData, setFormData, removeFormData, FORM_DATA_LOCAL_STORAGE_KEY} from './StorageHelpers'

export interface ICreateModel {
  competitors_criteria: string
  competitors_evaluation: string
  saturation_criteria: string
  saturation_evaluation: string
  competition_criteria: string
  competition_evaluation: string
  evenMarket_criteria: string
  evenMarket_evaluation: string
  diversity_criteria: string
  diversity_evaluation: string
  warPM_criteria: string
  warPM_evaluation: string
  priceSensitivity_criteria: string
  priceSensitivity_evaluation: string
  customersShortage_criteria: string
  customersShortage_evaluation: string
  loyalty_criteria: string
  loyalty_evaluation: string
  purchaseVolume_criteria: string
  purchaseVolume_evaluation: string
  costExchange_criteria: string
  costExchange_evaluation: string
  customerProducer_criteria: string
  customerProducer_evaluation: string
  littleOffer_criteria: string
  littleOffer_evaluation: string
  priceVariation_criteria: string
  priceVariation_evaluation: string
  easyToFind_criteria: string
  easyToFind_evaluation: string
  professionalQualification_criteria: string
  professionalQualification_evaluation: string
  suppliersDependance_criteria: string
  suppliersDependance_evaluation: string
  researchAndInnovation_criteria: string
  researchAndInnovation_evaluation: string
  startCost_criteria: string
  startCost_evaluation: string
  competitorsSpace_criteria: string
  competitorsSpace_evaluation: string
  scale_criteria: string
  scale_evaluation: string
  clientExchangeCost_criteria: string
  clientExchangeCost_evaluation: string
  sellingPointsShortage_criteria: string
  sellingPointsShortage_evaluation: string
  newTechnologies_criteria: string
  newTechnologies_evaluation: string
  directReplacements_criteria: string
  directReplacements_evaluation: string
  innovativeSubstitutes_criteria: string
  innovativeSubstitutes_evaluation: string
  exchangePropensity_criteria: string
  exchangePropensity_evaluation: string
  lowCostChange_criteria: string
  lowCostChange_evaluation: string
  lowerPrice_criteria: string
  lowerPrice_evaluation: string
  betterQuality_criteria: string
  betterQuality_evaluation: string
  modelName: string
  modelDescriptor: string
  businessName: string

}

const createModelSchemas = [
  Yup.object({
    modelName: Yup.string().required().label('Model Name'),
    modelDescription: Yup.string().label('Model Description'),
    businessName: Yup.string().label('business Name')
  }),
  Yup.object().shape({
    competitors_criteria: Yup.string().required().label('Rating'),
    saturation_criteria: Yup.string().required().label('Rating'),
    competition_criteria: Yup.string().required().label('Rating'),
    evenMarket_criteria: Yup.string().required().label('Rating'),
    diversity_criteria: Yup.string().required().label('Rating'),
    warPM_criteria: Yup.string().required().label('Rating'),

    competitors_evaluation: Yup.string().required().label('Assessment'),
    saturation_evaluation: Yup.string().required().label('Assessment'),
    competition_evaluation: Yup.string().required().label('Assessment'),
    evenMarket_evaluation: Yup.string().required().label('Assessment'),
    diversity_evaluation: Yup.string().required().label('Assessment'),
    warPM_evaluation: Yup.string().required().label('Assessment'),
  }),
  Yup.object().shape({
    priceSensitivity_criteria: Yup.string().required().label('Rating'),
    customersShortage_criteria: Yup.string().required().label('Rating'),
    loyalty_criteria: Yup.string().required().label('Rating'),
    purchaseVolume_criteria: Yup.string().required().label('Rating'),
    costExchange_criteria: Yup.string().required().label('Rating'),
    customerProducer_criteria: Yup.string().required().label('Rating'),

    priceSensitivity_evaluation: Yup.string().required().label('Assessment'),
    customersShortage_evaluation: Yup.string().required().label('Assessment'),
    loyalty_evaluation: Yup.string().required().label('Assessment'),
    purchaseVolume_evaluation: Yup.string().required().label('Assessment'),
    costExchange_evaluation: Yup.string().required().label('Assessment'),
    customerProducer_evaluation: Yup.string().required().label('Assessment'),
  }),
  Yup.object().shape({
    littleOffer_criteria: Yup.string().required().label('Rating'),
    priceVariation_criteria: Yup.string().required().label('Rating'),
    easyToFind_criteria: Yup.string().required().label('Rating'),
    professionalQualification_criteria: Yup.string().required().label('Rating'),
    suppliersDependance_criteria: Yup.string().required().label('Rating'),
    researchAndInnovation_criteria: Yup.string().required().label('Rating'),

    littleOffer_evaluation: Yup.string().required().label('Assessment'),
    priceVariation_evaluation: Yup.string().required().label('Assessment'),
    easyToFind_evaluation: Yup.string().required().label('Assessment'),
    professionalQualification_evaluation: Yup.string().required().label('Assessment'),
    suppliersDependance_evaluation: Yup.string().required().label('Assessment'),
    researchAndInnovation_evaluation: Yup.string().required().label('Assessment'),
  }),
  Yup.object().shape({
    startCost_criteria: Yup.string().required().label('Rating'),
    competitorsSpace_criteria: Yup.string().required().label('Rating'),
    scale_criteria: Yup.string().required().label('Rating'),
    clientExchangeCost_criteria: Yup.string().required().label('Rating'),
    sellingPointsShortage_criteria: Yup.string().required().label('Rating'),
    newTechnologies_criteria: Yup.string().required().label('Rating'),

    startCost_evaluation: Yup.string().required().label('Assessment'),
    competitorsSpace_evaluation: Yup.string().required().label('Assessment'),
    scale_evaluation: Yup.string().required().label('Assessment'),
    clientExchangeCost_evaluation: Yup.string().required().label('Assessment'),
    sellingPointsShortage_evaluation: Yup.string().required().label('Assessment'),
    newTechnologies_evaluation: Yup.string().required().label('Assessment'),
  }),
  Yup.object().shape({
    directReplacements_criteria: Yup.string().required().label('Rating'),
    innovativecriteria: Yup.string().required().label('Rating'),
    exchangePropensity_criteria: Yup.string().required().label('Rating'),
    lowCostChange_criteria: Yup.string().required().label('Rating'),
    lowerPrice_criteria: Yup.string().required().label('Rating'),
    betterQuality_criteria: Yup.string().required().label('Rating'),

    directReplacements_evaluation: Yup.string().required().label('Assessment'),
    innovativeevaluation: Yup.string().required().label('Assessment'),
    exchangePropensity_evaluation: Yup.string().required().label('Assessment'),
    lowCostChange_evaluation: Yup.string().required().label('Assessment'),
    lowerPrice_evaluation: Yup.string().required().label('Assessment'),
    betterQuality_evaluation: Yup.string().required().label('Assessment'),
  })
]

const inits: ICreateModel = {
  modelName: '',
  businessName: '',
  modelDescriptor : '',

  competitors_criteria: '',
  saturation_criteria: '',
  competition_criteria: '',
  evenMarket_criteria: '',
  diversity_criteria: '',
  warPM_criteria: '',
  competitors_evaluation: '',
  saturation_evaluation: '',
  competition_evaluation: '',
  evenMarket_evaluation: '',
  diversity_evaluation: '',
  warPM_evaluation: '',

  priceSensitivity_criteria: '',
  customersShortage_criteria: '',
  loyalty_criteria: '',
  purchaseVolume_criteria: '',
  costExchange_criteria: '',
  customerProducer_criteria: '',
  priceSensitivity_evaluation: '',
  customersShortage_evaluation: '',
  loyalty_evaluation: '',
  purchaseVolume_evaluation: '',
  costExchange_evaluation: '',
  customerProducer_evaluation: '',

  littleOffer_criteria: '',
  priceVariation_criteria: '',
  easyToFind_criteria: '',
  professionalQualification_criteria: '',
  suppliersDependance_criteria: '',
  researchAndInnovation_criteria: '',
  littleOffer_evaluation: '',
  priceVariation_evaluation: '',
  easyToFind_evaluation: '',
  professionalQualification_evaluation: '',
  suppliersDependance_evaluation: '',
  researchAndInnovation_evaluation: '',

  startCost_criteria: '',
  competitorsSpace_criteria: '',
  scale_criteria: '',
  clientExchangeCost_criteria: '',
  sellingPointsShortage_criteria: '',
  newTechnologies_criteria: '',
  startCost_evaluation: '',
  competitorsSpace_evaluation: '',
  scale_evaluation: '',
  clientExchangeCost_evaluation: '',
  sellingPointsShortage_evaluation: '',
  newTechnologies_evaluation: '',

  directReplacements_criteria: '',
  innovativeSubstitutes_criteria: '',
  exchangePropensity_criteria: '',
  lowCostChange_criteria: '',
  lowerPrice_criteria: '',
  betterQuality_criteria: '',
  directReplacements_evaluation: '',
  innovativeSubstitutes_evaluation: '',
  exchangePropensity_evaluation: '',
  lowCostChange_evaluation: '',
  lowerPrice_evaluation: '',
  betterQuality_evaluation: '',
}

export { createModelSchemas, inits }

