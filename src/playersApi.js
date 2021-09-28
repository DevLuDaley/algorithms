const playersApi = () => {
  function average(...nums) {
    let sum = 0;
    let avg = 0;

    for (const num of nums) {
      sum += num;
      avg = sum / nums.length;
    }

    return avg;
  }
  console.log(average(18, 20, 22, 22, 30, 24, 30, 34));

  const people = [
    { name: 'Nally', age: 18, position: 'c' },
    { name: 'Shreij', age: 20, position: 'c' },
    { name: 'Anton', age: 22, position: 'g' },
    { name: 'Tiko', age: 30, position: 'pf' },
    { name: 'Amelia', age: 24, position: 'pg' },
    { name: 'Tami', age: 30, position: 'pf' },
    { name: 'Lee', age: 24, position: 'g' },
  ];

  function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
      const add = 0;
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj.age);
    //   console.log('yo ', average(acc[key]));
      return acc;
    },
    {});
  }

  const groupedPeople = groupBy(people, 'position');
  
  function avgArr(total, num) {
    return total + num;
  }
const avgPositionAgesList = []
//   const centerAges = groupedPeople.c;
  for (const playerPos in groupedPeople) {
    const avgPositionAges = groupedPeople.[playerPos].reduce(avgArr) / groupedPeople.[playerPos].length
    // console.log(groupedPeople.[playerPos].reduce(avgArr) / groupedPeople.[playerPos].length)
   avgPositionAgesList.push(avgPositionAges)
}
console.log(avgPositionAgesList);
console.log(avgPositionAgesList[0]);
// const {"pg", "g", "c", "f"} = avgPositionAgesList[0];
const [pg, g, c, f] = avgPositionAgesList;
console.log(g);

};
playersApi();
