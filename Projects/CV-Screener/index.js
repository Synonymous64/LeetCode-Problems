console.log("This is about CV Scanner");
// Array of Objects which contains information about the candidate
const data = [
  {
    name: "Prajwal Urkude",
    age: 20,
    city: "Nagpur",
    language: "JavaScript",
    framework: "React",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Khushali Dhakate",
    age: 21,
    city: "Hingna",
    language: "Java",
    framework: "Sprint Boot",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    name: "Aniket Dharpure",
    age: 20,
    city: "Hingna",
    language: "C",
    framework: "Dot Net",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    name: "Khushi Wankhede",
    age: 20,
    city: "Nagpur",
    language: "C++",
    framework: "Dot Net",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
  },
  {
    name: "Vishnu Thandel",
    age: 20,
    city: "Kerla",
    language: "Python",
    framework: "Tansorflow",
    image: "https://randomuser.me/api/portraits/men/69.jpg",
  },
  {
    name: "Kasturi Deogirkar",
    age: 20,
    city: "Nagpur",
    language: "C++",
    framework: "Dot Net",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    name: "Atharva Bhivgade",
    age: 20,
    city: "Nagpur",
    language: "C",
    framework: "Dot Net",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
];
// iterator
const iterator = (profiles) => {
  let nextIndex = 0;
  return {
    next: () => {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
};
// Button Listner for next button
const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", nextCV);
const candidates = iterator(data);
nextCV();

function nextCV() {
  console.log("This is Next Button");
  const currentCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
  if (currentCandidate != undefined) {
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: ${currentCandidate.name}</li>
        <li class="list-group-item">${currentCandidate.age} years old</li>
        <li class="list-group-item">lives in ${currentCandidate.city}</li>
        <li class="list-group-item">proficient in ${currentCandidate.language}</li>
        <li class="list-group-item">tech-stack is ${currentCandidate.framework}</li>
    </ul>
      
      `;
  } else {
    alert("End of Candidates");
    window.location.reload(); // to reload the window
  }
}
