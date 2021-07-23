
const myPromise = fetch('https://api.github.com/users', {headers: {'Authorization': 'token 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'}})

myPromise.then(response => console.log(response));
myPromise.catch(error => console.error(error));