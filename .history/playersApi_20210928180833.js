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
  console.log(average(24, 88, 12, 4));

  const people = [
    { name: 'Nally', age: 28, position: 'c' },
    { name: 'Tovo', age: 32, position: 'c' },
    { name: 'Anton', age: 24, position: 'g' },
    { name: 'Tiko', age: 29, position: 'pf' },
    { name: 'Amelia', age: 32, position: 'pg' },
    { name: 'Tami', age: 36, position: 'pf' },
    { name: 'Lee', age: 37, position: 'g' },
    { name: 'Shreij', age: 25, position: 'c' },
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
    // return average(acc[key])
    },
    {});
  }
  // console.log(acc[0])

  const groupedPeople = groupBy(people, 'position');
  // for (person in groupedPeople)
  // person.reduce(function(prevAmt, currAmt)
  // {console.log(person)}
  // for (thing of person)
  // console.log(thing)
  // )
  // let avgAgeByPosition = groupedPeople.reduce(function(prevAmt, currAmt){console.log("hi Lu")})

  console.log(groupedPeople);
  // console.log(groupedPeople)
  // for (l of groupedPeople){

  // console.log( "Yes Indeed!")
  // }

  // groupedPeople is:
  // {
  //   c: [
  //     { name: 'Alice', age: 21, position: 'c' },
  //     { name: 'Max', age: 20, position: 'c' },
  //     { name: 'Shreiga', age: 21, position: 'c' }
  //   ],
  //   g: [
  //     { name: 'Anton', age: 24, position: 'g' },
  //     { name: 'Lee', age: 20, position: 'g' }
  //   ],
  //   pg: [ { name: 'Amelia', age: 22, position: 'pg' } ]
  // }
  function average(...nums) {
    let sum = 0;
    let avg = 0;

    for (const num of nums) {
      sum += num;
      avg = sum / nums.length;
    }

    return avg;
  }
  // console.log(average(24, 88, 12, 4));
};
playersApi();
