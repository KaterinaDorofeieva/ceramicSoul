
import "/src/sass/style.scss";



let text = "Hello world";
text = "this is a text";
const pi = 3.14;
const isOpen = false
console.log(text);


const object = {
    name: "Kate",
    age: 24,
}; // настройки описание человека, чего-то

const titles = [
    "Make your dream come true or decorate your home",
    "create or buy",
    5
];

console.log(object.age);
console.log(titles[1]);

console.log(text);

function calc(a, b) {
    console.log(a + b);

}
calc(2, 5);

if (isOpen) {
    console.log("Shop is open");
} else {
    console.log("Shop is close");
}

const vase = document.querySelector('.touch__decor');
console.log(vase);

vase.addEventListener('click', () => {
    console.log(vase);
})

