import React, { FC } from 'react';

type Props = {
  onQuizCompleted: () => void;
};

export const SkillTestingQuiz: FC<Props> = ({ onQuizCompleted }) => {
  return (
    <div>
      <p>Skill Testing Quiz</p>
      <button onClick={onQuizCompleted}>Finish the Quiz</button>
    </div>
  );
};
