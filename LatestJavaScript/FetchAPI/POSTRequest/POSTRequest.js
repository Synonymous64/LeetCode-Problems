// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//! sample Fetch 
const sampleFetch = async (id) => {
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let response = await data.json();
    return response;
}
// ! POST Request through JAVASCRIPT -->
const createContent = async (todo) => {
    let options = {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(todo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json();
    return response;
}
const mainFunct = async () => {
    let todo = {
        title: 'Prajwal',
        body: 'Hackerman',
        userId: 1,
    }
    let content = await createContent(todo);
    console.log(content);
    console.log(await sampleFetch(4));
}
mainFunct();