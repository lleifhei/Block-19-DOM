//Freelancers Array
const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
    { name: "Carol", price: 70, occupation: "programmer" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

//Names
const nameList = document.querySelectorAll('.names');
for (let i = 0; i < nameList.length; i++) {
    nameList[i].innerHTML = freelancers[i].name;
}
console.log(nameList);

//Occupations
const occupationList = document.querySelectorAll('.occupations');
for (let i = 0; i < occupationList.length; i++) {
    occupationList[i].innerHTML = freelancers[i].occupation;
}
console.log(occupationList);

//Starting Price
const startingPriceList = document.querySelectorAll('.prices');
for (let i = 0; i < startingPriceList.length; i++) {
    startingPriceList[i].innerHTML = freelancers[i].price;
}
console.log(startingPriceList);

//Generate Random Freelancer Function
function generateRandomFreelancer() {
    const randomIndex = Math.floor(Math.random() * freelancers.length);
    return freelancers[randomIndex];
}
console.log(generateRandomFreelancer());

//Average Starting Price Function
function findAverageStartingPrice() {
    if (freelancers.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < freelancers.length; i++) {
    sum += freelancers[i].price;
    }
    return sum / freelancers.length;
}
console.log(findAverageStartingPrice());

