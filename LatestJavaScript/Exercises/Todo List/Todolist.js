console.log('To do list');
let list = document.getElementById('list');
console.log(list);
let ele = document.createElement("div");
let create = document.getElementById('create');
let delete1 = document.getElementById('delete');
let elp = document.createElement('h4');
elp.classList = 'text-center'
let key, value;
let totalChilds = () => {
    key = prompt("Enter the headline of the Note")
    value = prompt("Enter the description of the Note");
    localStorage.setItem(key, value);
    ele.innerHTML = `<li
    class="list-group-item d-flex justify-content-between align-items-start"
    >
    <div class="ms-2 me-auto">
    <div class="fw-bold">${key}</div>
    ${value}
    </div>
    </li>`;
    list.appendChild(ele)
    list.appendChild(ele.cloneNode(true))
    list.removeChild(ele)[list.children.length - 1];
}
create.addEventListener('click', totalChilds)
delete1.addEventListener('click', () => {
    console.log('deleted');
    localStorage.removeItem(key);
    list.removeChild(list.lastElementChild);
})