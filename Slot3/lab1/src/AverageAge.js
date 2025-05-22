import React from "react";


const averageAge = (...ages) => {
  if (ages.length === 0) return 0;
  const total = ages.reduce((sum, age) => sum + age, 0);
  return (total / ages.length).toFixed(2); 
};

const AverageAge = () => {
  const avg = averageAge(30, 25, 35, 40, 28); 

  return (
    <div>
      <p>Average Age: {avg}</p>
    </div>
  );
};

export default AverageAge;