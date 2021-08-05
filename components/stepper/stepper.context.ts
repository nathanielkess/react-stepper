import React from 'react';

export type StepperContextType = {
  currentIndex: number;
  prevIndex: number;
};

export const StepperContext: React.Context = React.createContext({
  currentIndex: 0,
  prevIndex: -1
});
