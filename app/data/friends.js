class Person {
  constructor(
    name = "Name",
    photo = "https://via.placeholder.com/300",
    scores = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
  }
}

const people = [
  new Person("Jack", undefined, [2, 3, 5, 4, 1, 3, 5, 2, 5, 1]),
  new Person("Jaylon", undefined, [1, 4, 4, 4, 3, 2, 2, 3, 1, 5])
];

module.exports = {Person:new Person, people:people};