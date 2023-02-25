const findTheOldest = function(people) {
    const peopleWithAges = people.map(person => person);
    peopleWithAges.map(person => {
        if (!person.yearOfDeath) person["yearOfDeath"] = [new Date().getFullYear()];
        person["age"] = person.yearOfDeath - person.yearOfBirth;
    })
    const maxAge = Math.max(... peopleWithAges.map(person => +person.age));
    oldestPersonIndex = peopleWithAges.findIndex(person => +person.age == +maxAge);
    return people[oldestPersonIndex];
    //.sort((person1, person2) => person1.age - person2.age);
};

// Do not edit below this line
module.exports = findTheOldest;
