// function drivingEligibility = (person) => {
const drivingEligibility = (person) => {
  if (person.age > 15) {
    console.log(`${personj.name}, you can drive!!`);
  } else {
    const years_needs_to_wait = 16 - person.age;
    console.log(`${person.name}`);
  }
};

drivingEligibility({ name: 'Tina', age: 14 });
