// const add = function (a, b) {
//     console.log(arguments)
//     return a+b;
// }
// console.log('add:' + add(55, 1));

// const add2 = (a, b) => {
//     return a+b;
// }
// console.log('add2:' + add2(55, 1));

// const user = {
//     name: 'Anton',
//     cities: ['Gothenburg', 'Vancouver', 'Malmö'],
//     printPlacesLived() {
//         return this.cities.map((city) => this.name + ' has lived in ' + city);
//     }
// }

// console.log(user.printPlacesLived());

const multiplier = {
    //numbers - array of numbers
    // multiplyBy - single number
    //multiply - return a new array where the numbers have been multiplied
    numbers: [10, 20, 30],
    muliplyBy: 3,
    multiply(){
        return this.numbers.map((number) => number * this.muliplyBy);
    }
};

console.log(multiplier.multiply());