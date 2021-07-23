
function userNameF(userName) {
    return fetch("https://api.github.com/users/" + userName + "/events/public",
        {headers: {'Authorization': 'token ' + myGitHubKey}})
        .then((response) => {
            return response.json();
        }).then(function(jsonData){
            return jsonData[0].created_at;
    });
}
function wait(numMillis) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numMillis)
        }, numMillis);
    })
}
