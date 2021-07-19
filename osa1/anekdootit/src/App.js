import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(0);
  const [points, setPoints] = useState({});

  const vote = () => {
    const copy = { ...points };
    copy[selected] = (copy[selected] || 0) + 1;
    if (copy[selected] > (copy[mostVoted] || 0)) {
      setMostVoted(selected);
    }

    setPoints({ ...copy });
  };

  return (
    <div>
      <h1>anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected] ?? 0} votes</p>
      <button onClick={vote}>vote</button>
      <button
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      >
        next anecdote
      </button>

      <h2>anecdote with most votes</h2>
      <p>{anecdotes[mostVoted]}</p>
    </div>
  );
};

export default App;
