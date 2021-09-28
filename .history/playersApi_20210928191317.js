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
      // obj['age'] = parseInt(obj['age'])
      // obj['age'] = Number(obj['age'])
      // let realAge = obj['age'].join
      acc[key].push(obj.age);
      // const cars = new Array("Saab", "Volvo", "BMW");
      // acc[key] += Number(obj['age'])
      // acc[key] += parseInt(obj['age'])
      // add += obj['age']
      // acc[key].push(obj = [])
      // acc[key].push(add)

      // average(acc[key])
      // console.log(average(acc[key]))
      // for(i = 0; i < acc[key].length; i++){

      // }
      // console.log(acc[key].length)
      // acc[key] += parseInt(obj['age'])
      // acc[key] += add.push(obj['age'])
      // acc[key] += realAge
      // acc[key] += obj['age']
      // console.log(realAge)
      // console.log(acc[key])
      // for (pos of acc[key])
      // console.log(pos)
      // for (g of acc[key]){
      //   // console.log(g)
      // }

      console.log('yo ', average(acc[key]));
      return acc;
  
    },
    {});
  }
  

  const groupedPeople = groupBy(people, 'position');
  
  function avgArr(total, num) {
    return total + num;
  }

  const centerAges = groupedPeople.c;
  for (const role in groupedPeople) {
    const avgGuard = groupedPeople.[role].reduce(avgArr) / groupedPeople.[role].length
    // console.log(groupedPeople.[role].reduce(avgArr) / groupedPeople.[role].length)
    console.log(avgGuard);
  }

};
playersApi();
