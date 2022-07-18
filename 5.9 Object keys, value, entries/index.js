let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

alert(sumSalaries(salaries)); // 650

function sumSalaries(salaries) {
  const totalSalary = Object.values(salaries).reduce(
    (current, total) => total + current
  );
  return totalSalary;
}
