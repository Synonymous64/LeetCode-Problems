// let api = "https://anapioficeandfire.com/api/characters/583";
// const fetchContent = async (api) => {
//     let p = await fetch(api);
//     let data = await p.json();
//     return data;
// }
// let data = fetchContent(api);
// console.log(data);
// console.log(data.name);

//! Other way -->
let p = fetch("https://anapioficeandfire.com/api/characters/583");
p.then((response)=>{
    console.log(response);
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    return response.json();
}).then((value2) => {
    console.log(value2);
    console.log(value2.name);
})
