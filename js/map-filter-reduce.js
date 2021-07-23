const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeLong = users.filter( users => users.languages.length > 2)
console.log(threeLong)

const mapFit = users.map(users => users.email);
console.log(mapFit)

const totalExp = users.reduce((total, person) => {
    return total + person.yearsOfExperience;
}, 0);
console.log(totalExp)

const averageExp = users.reduce((total, person) => {
    return totalExp / person.id;
}, 0);
console.log(averageExp)

let longEm = users.reduce(function (currentLong, user){
    if (user.email.length > currentLong.email.length) {
        return user;
    }else{
        return currentLong;
    }
}, users[0])
console.log(longEm.email)

let nameString = users.reduce(function(accumulator, user){
    if (accumulator === ''){
        return "Your instructors are : " + user.name
    }else{
        return accumulator + ', ' + user.name;
    }
},'')

console.log(nameString + ".")