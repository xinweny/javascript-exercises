const findTheOldest = function(people) {
  const currentYear = (new Date()).getFullYear();
  
  const sortedByAge = people.sort((current, next) => {
    current.age = (!current.yearOfDeath) ? currentYear - current.yearOfBirth : current.yearOfDeath - current.yearOfBirth;
    next.age = (!next.yearOfDeath) ? currentYear - next.yearOfBirth : next.yearOfDeath - next.yearOfBirth;

    return next.age - current.age;
  });

  return sortedByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
