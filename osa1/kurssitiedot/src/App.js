import React from "react";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

const Header = ({ course: { name } }) => {
  return <h1>{name}</h1>;
};

const Content = ({ course: { parts } }) => {
  return (
    <>
      {parts.map((part, index) => (
        <Part part={part} />
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
  <p>Total {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
);

export default App;
