const extractString = (s) => {
    let res = Number.parseInt(s.slice(15));
    return res;
}
let s = "Please give Rs 1000";
console.log(extractString(s));