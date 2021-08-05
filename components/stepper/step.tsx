import React, { CSSProperties, FC } from 'react';
import { useStepperContext } from './use-stepper-context';

type StepProps = {
  index?: number;
};

export const Step: FC<StepProps> = ({ index = 0, children }) => {
  const { currentIndex, prevIndex } = useStepperContext();
  const activeStyle: CSSProperties = { backgroundColor: 'red' };

  return (
    <div style={currentIndex === index ? activeStyle : {}}>{children}</div>
  );
};
