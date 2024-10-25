const NumberComponent = () => {
  let even = [0, 2, 4, 6, 8];
  let odd = [1, 3, 5, 7, 9];

  let evenList = [];
  even.forEach((num) => {
    evenList.push(<li key={num}>{num}</li>);
  });

  let oddList = [];
  odd.forEach((num) => {
    oddList.push(<li key={num}>{num}</li>);
  });

  let combined = [...even, ...odd].sort((a, b) => a - b);

  let combinedList = [];
  combined.forEach((num) => {
    combinedList.push(<li key={num}>{num}</li>);
  });

  return (
    <>
      <h1>Numbers</h1>
      <h2>Even</h2>
      <ul>{evenList}</ul>
      <h2>Odd</h2>
      <ul>{oddList}</ul>
      <h2>Combined</h2>
      <ul>{combinedList}</ul>
    </>
  );
};

export default NumberComponent;
