// function logItems(n: number){

//     for (let i = 0; i < n; i++){
//         console.log(i);
//     }

// }
// logItems(10)

// function wrapInArray(obj: string | string[]) {
//   if (typeof obj === "string") {
//     return [obj];
            
// // (parameter) obj: string
//   }
//   return obj;
// }

// console.log(wrapInArray("Words"))

type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const justine: User = {
  name: 'Justine',
  age: 23,
};

const isJustineAnAdult: boolean = isAdult(justine);