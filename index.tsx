import React, { Component, createRef, FC, useRef } from 'react';
import { render } from 'react-dom';
import { IStepperRef, SkillTestingQuiz, Stepper } from './components';
import Hello from './Hello';
import './style.css';

const App: FC = () => {
  const stepperRef = createRef<IStepperRef>();

  const handleclick = index => () => {
    stepperRef.current?.goTo(index);
  };

  const handleQuizCompleted = () => {
    stepperRef.current.goTo(1)
  }

  return (
    <div>
      <Hello name={'React'} />
      <p>Start editing to see some magic happen :)</p>
      {/* <Stepper ref={stepperRef}>
        <Stepper.Step>
          <p>one</p>
        </Stepper.Step>
        <Stepper.Step>
          <p>two</p>
        </Stepper.Step>
        <Stepper.Step>
          <p>three</p>
        </Stepper.Step>
      </Stepper>
      <button onClick={handleclick(0)}>To Index 1</button>
      <button onClick={handleclick(1)}>To Index 1</button>
      <button onClick={handleclick(2)}>To Index 1</button> */}

      <Stepper ref={stepperRef}>
        <Stepper.Step>
          <SkillTestingQuiz onQuizCompleted={handleQuizCompleted} />
        </Stepper.Step>
        <Stepper.Step>
          <p>Screen Two</p>
        </Stepper.Step>
        <Stepper.Step>
          <p>Screen Three</p>
        </Stepper.Step>
      </Stepper>


      <button onClick={handleclick(0)}>One</button>
      <button onClick={handleclick(1)}>Two</button>
      <button onClick={handleclick(2)}>Three</button>
    </div>
  );
};

render(<App />, document.getElementById('root'));
