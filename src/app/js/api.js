export function apiCall(onFinished) {
    console.log("res")
    fetch('https://jsonplaceholder.typicode.com/posts/2')
    .then(function(res) {
       
        return res.json()
    })
    .then(onFinished) 

}