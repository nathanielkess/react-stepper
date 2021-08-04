import React, { FC } from 'react';

type StepProps = {
  index?: number;
};

export const Step: FC<StepProps> = ({ index = 0, children }) => {
  return <div>{children}</div>;
};
