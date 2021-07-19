import React from "react";

export const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

const Header = ({ course: { name } }) => {
  return <h1>{name}</h1>;
};

const Content = ({ course: { parts } }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const Part = ({ part: { name, exercises } }) => (
  <p>
    {name} {exercises}
  </p>
);

const Total = ({ course: { parts } }) => (
  <p>
    Total of {parts.reduce((acc, curr) => acc + curr.exercises, 0)} exercises
  </p>
);
