var programmingLanguages = ['Python', 'PHP', 'JavaScript'];
console.log(programmingLanguages);
console.log(programmingLanguages(0));

programmingLanguages.push('java');
console.log(programmingLanguages);

programmingLanguages.pop();
console.log|(programmingLanguages);

programmingLanguages.unshift('c#');
console.log(programmingLanguages);

programmingLanguages.shift();
console.log(programmingLanguages);

programmingLanguages.slice(0, 2, 'Ruby')

console.log(Math.random()*5);

console.log(Math.floor(Math.random()*6));

var students = ["Drini", "Mali"];

var [s1, s2] = students;

console.log(s1);
console.log(s2);

var places = ["London", "New York", "Paris", "Madrid"];

var[firstPlace, , secondPlace] = places;

console.log(secondPlace);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var [fist, second, ...otherNumbers];
console.log(first);
console.log(second);
console.log(otherNumbers);
