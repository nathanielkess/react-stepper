import React, {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithRef,
  ReactChild,
  ReactChildren,
  RefAttributes,
  useCallback,
  useImperativeHandle
} from 'react';
import { StepperContext } from './stepper.context';
import { Step } from './step';
const noop = () => {};

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
  ({ children, onChange = noop }, ref) => {
    const [currentStep, setCurrentStep] = React.useState({
      currentIndex: 0,
      prevIndex: -1
    });

    const goTo = useCallback(
      (index: number) => {
        onChange(index);
        setCurrentStep(prev => ({
          currentIndex: index,
          prevIndex: prev
        }));
      },
      [currentStep]
    );

    useImperativeHandle(ref, () => ({ goTo }));

    return (
      <div>
        <StepperContext.Provider value={currentStep}>
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
              index //<-- injects index as a prop
            });
          })}
        </StepperContext.Provider>
      </div>
    );
  }
) as CompoundedComponent;

Stepper.Step = Step;
