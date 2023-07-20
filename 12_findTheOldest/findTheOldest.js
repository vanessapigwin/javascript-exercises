const findTheOldest = function(data) {
    let maxAge = 0;
    let oldest = '';

    for (person of data) {
        person.yearOfDeath = !(person.yearOfDeath) ? new Date().getFullYear() : person.yearOfDeath;
        age = person.yearOfDeath - person.yearOfBirth;

        if (age > maxAge) {
            maxAge = age;
            oldest = person;
        }
    }
    return oldest;
    
};

// Do not edit below this line
module.exports = findTheOldest;
