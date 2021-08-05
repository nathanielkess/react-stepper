import { useContext } from 'react';
import { StepperContext, StepperContextType } from './stepper.context';

export const useStepperContext = () =>
  useContext<StepperContextType>(StepperContext);
