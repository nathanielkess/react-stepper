import React, {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithRef,
  ReactChild,
  ReactChildren,
  RefAttributes
} from 'react';
import { Step } from './step';

export interface IStepperRef {
  goTo: (index: number) => void;
}

type Props = {
  onChange?: (index: number) => void;
  children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
};

export interface CompoundedComponent
  extends ForwardRefExoticComponent<Props & RefAttributes<IStepperRef>> {
  Step?: typeof Step;
}

export const Stepper = forwardRef<IStepperRef, PropsWithRef<Props>>(
  ({ children }, ref) => {
    return <p>{children}</p>;
  }
) as CompoundedComponent;

Stepper.Step = Step;
