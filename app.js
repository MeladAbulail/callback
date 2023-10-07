// Ex7

// const namesArray = ["Rawan", "Jafar", "Hind", "Muhammad", "Esraa", "Dareen"];

// const resultArray = [];

// namesArray.forEach(function(name) {
//     resultArray.push(name);
// });

// console.log(resultArray);


// Ex8
// function projectSeries(series) {
//     let resultArray = [];

//     series.forEach(function (item) {
//         resultArray.push({
//             id: item.id,
//             title: item.title
//         });
//     });

//     return resultArray;
// }

// let newSeries = [
//     {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     },
//     {
//         "id": 65432445,
//         "title": "The Chamber",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 675465,
//         "title": "Fracture",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     }
// ];

// let result = projectSeries(newSeries);

// console.log(result);


// Ex9
// function projectSeries(series) {
//     return series.map(function (item) {
//         return {
//             id: item.id,
//             title: item.title
//         };
//     });
// }

// let newSeries = [
//     {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     },
//     {
//         "id": 65432445,
//         "title": "The Chamber",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 675465,
//         "title": "Fracture",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     }
// ];

// let result = projectSeries(newSeries);

// console.log(result);


// Ex10
// function filterSeriesByRating(series) {
//     return series.filter(function (item) {
//         return item.rating[0] < 5;
//     });
// }

// let newSeries = [
//     {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     },
//     {
//         "id": 65432445,
//         "title": "The Chamber",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 675465,
//         "title": "Fracture",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     }
// ];

// let result = filterSeriesByRating(newSeries);

// console.log(result);


//Ex11
// const stringsArray = ["Java", "JavaScript", "Python", "C++", "PHP"];

// const longestString = stringsArray.reduce(function (longest, currentString) {
//     return currentString.length > longest.length ? currentString : longest;}, "");

// console.log(longestString);


// Ex12
// let pokemonData = [
//     {
//         "game_index": 76,
//         "version": {
//           "name": "red",
//           "url": "https://pokeapi.co/api/v2/version/1/"
//         }
//       },
//       {
//         "game_index": 76,
//         "version": {
//           "name": "blue",
//           "url": "https://pokeapi.co/api/v2/version/2/"
//         }
//       },
//       {
//         "game_index": 76,
//         "version": {
//           "name": "yellow",
//           "url": "https://pokeapi.co/api/v2/version/3/"
//         }
//       },
//       {
//         "game_index": 132,
//         "version": {
//           "name": "gold",
//           "url": "https://pokeapi.co/api/v2/version/4/"
//         }
//       },
//       {
//         "game_index": 132,
//         "version": {
//           "name": "silver",
//           "url": "https://pokeapi.co/api/v2/version/5/"
//         }
//       },
//       {
//         "game_index": 132,
//         "version": {
//           "name": "crystal",
//           "url": "https://pokeapi.co/api/v2/version/6/"
//         }
//       },
//       {
//         "game_index": 132,
//         "version": {
//           "name": "ruby",
//           "url": "https://pokeapi.co/api/v2/version/7/"
//         }
//       },
//       {
//         "game_index": 132,
//         "version": {
//           "name": "sapphire",
//           "url": "https://pokeapi.co/api/v2/version/8/"
//         }
//       },
//       {
//         "game_index": 132,
//         "version": {
//           "name": "emerald",
//           "url": "https://pokeapi.co/api/v2/version/9/"
//         }
//       },
//       {
//         "game_index": 132,
//         "version": {
//           "name": "firered",
//           "url": "https://pokeapi.co/api/v2/version/10/"
//         }
//       },
//       {
//         "game_index": 132,
//         "version": {
//           "name": "leafgreen",
//           "url": "https://pokeapi.co/api/v2/version/11/"
//         }
//       },
//       {
//         "game_index": 132,
//         "version": {
//           "name": "diamond",
//           "url": "https://pokeapi.co/api/v2/version/12/"
//         }
//     }
// ];

// function displayName(pokemonData) {
//     return pokemonData.reduce(function (names, entry) {
//         names.push(entry.version.name);
//         return names;
//     }, []);
// }

// let result = displayName(pokemonData);
// console.log(result);


// Ex13
// a output: Hi Coach ! Rawan
// var employee = {
//     firstName: 'Rawan',
//     sayHi: function(){
//         console.log("Hi Coach ! " + this.firstName);
//     }
// }

// employee.sayHi();

// The console.log statement prints "Hi Coach ! " followed by the value of this.firstName, which is 'Rawan' in this case.


//b output:  Car owner? true
//When you call employee.printInfo();, it executes the printInfo method, and this.info.hasCar refers to the hasCar property inside the info object.
// var employee = {
//     firstName: 'Rawan',
//     info: {
//         hasCar: true,
//         hasPet: true
//     },
//     printInfo: function(){
//         console.log("Car owner? " + this.info.hasCar);
//     }
// };

// employee.printInfo();

// //C output: Zarqa

// When you call employee.info.printAddress();, it executes the printAddress method, and this.info.data.address refers to the address property inside the data object.

// var employee = {
//     firstName: 'Rawan',
//     info: {
//         hasCar: true,
//         hasPet: true,
//         printAddress: function(){
//             return this.data.address;
//         },
//         data: {
//             address: "Zarqa"
//         }
//     },
// }

// employee.info.printAddress();

