// const sqr = (x) => {
//     return x*x;
// }

// const square = x => x*x;

// console.log(square(4));

const getFirstName = fullName => fullName.split(" ")[0];

const getFirstNameBig = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFirstName('Anton Klock'));
console.log(getFirstNameBig('Anton Klock'));