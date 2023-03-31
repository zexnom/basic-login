let dbUsers = [
    {
        username: "imran",
        password: "1234",
        name: "Muhammad Imran",
        email: "imranmddesa58@gmail.com",
    },
    {
        username: "zexnom",
        password: "5678",
        name: "Muhammad Zexnom",
        email: "zexnomrise@gmail.com",
    },
    {
        username: "manrand",
        password: "2201",
        name: "Muhammad Manrand",
        email: "randman@gmail.com",
    }
]
function login(username, password) {
    console.log("someone try to login with", username, password)
    dbUsers.find(element =>{
        console.log(element)
    })
    let matched = dbUsers.find(element =>
        element.username == username
    )
    console.log(matched)
    if (matched){
        if(matched.password == password){
            return matched
        }
        else{
            return "Password not matched"
        }
    }
    else {
        return "Username not found"
    }
}

//try to login
console.log(login ("imran", "1234"))
console.log(login("imran", "4567"))
