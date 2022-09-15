let a = document.getElementsByTagName("h2")[0];
// a.innerHTML = "Hello there"
// a.innerHTML = "<i>Hello there</i>"
// console.log(a);
let div = document.createElement("div");
div.innerHTML = "<i>Hello there</i>";
a.append(div);
a.prepend(div); //* will become the first child in the container
a.before(div); //* will take outside up of the container
a.after(div); //* it will be outside down of the container
a.replaceWith(div); //* the a which has attribute h2 will get replaced by div
