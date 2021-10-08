//...........................................Lesson№1..................................................

// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector(".btn-block")
// ;

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
//  console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//    console.log('hello');
// }
// btns[0].addEventListener('mouseenter', () =>{
//    if(btns[1].classList.toggle('red')) {

//    }
// });

// wrapper.addEventListener('click', (event) => {
//    // console.dir(event.target);
//       if (event.target && event.target.matches("button")) {
//             console.log('hello');
//       }
// });

// // btns.forEach(btn => {
// //    btn.addEventListener('click', () => {
// //       console.log('hello');
// //    });
// // });



// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);

//...........................................Lesson№3..................................................

// const btn = document.querySelector('.btn');
// let timerId,
//    i = 0;

// function myAnimation() {
//    const elem = document.querySelector('.box');
//    let pos = 0;
//    const id = setInterval(frame, 10);

//    function frame() {
//       if (pos == 300) {
//          clearInterval(id);
//       } else {
//          pos++;
//          elem.style.top = pos + "px";
//          elem.style.left = pos + "px";
//       }
//    }
// }

// btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//    timerId = setInterval(logger, 1000);
//    console.log('done');
// });


// function logger() {
//    if (i==3) {
//       clearInterval(timerId);
//    }
//    console.log('text');
//    i++;
// }

// let id = setTimeout(function log(){
//    console.log('htllo');
//    id =  setTimeout( log, 500);
// }, 500);

//...........................................Lesson№4..................................................

// const now = new Date(); 

// console.log(now);
// console.log(now.getHours());
// console.log(now.getMonth());
// console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset());

// let start = new Date();

// for (let i = 0; i<10000; i++){
//    let some = i**3;
// }
// let end = new Date();

// console.log(start);
// console.log(end - start);

// alert(`${end-start}`);

//...........................................Lesson№9..................................................

// function User(name, id) {
//    this.name = name;
//    this.id = id;
//    this.human = true;
//    this.hello = function (){
//       console.log(`Hello ${this.name}, you are ${this.id} y.o.`);
//    };
// }

// User.prototype.exit = function() {
//    console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new User('Ivan', 23);
// const alex = new User('Alex', 30);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);

//...........................................Lesson№10.................................................

// function showThis(a, b) {
//    console.log(this);
//    function sum() {
//       console.log(this);
//       return a+b;
//    }
//    console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//    a: 20,
//    b:30,
//    sum: function() {
//       console.log(this);
//    }
// };

// obj.sum();

// function User(name, id) {
//    this.name = name;
//    this.id = id;
//    this.human = true;

// }
// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//    console.log(this);
//    console.log(this.name + surname);
// }

// const user = {
//    name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['smith']);

// function count (num) {
//    return this*num;
// }

// const double = count.bind(2);

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//    e.target.style.backgroundColor = 'red';
// });

// const obj = {
//    num: 5,
//    sayNumner: function () {
//       const say = () => {
//          console.log(this);
//       };

//       say();
//    }
// };

// obj.sayNumner();

// const double = (a) => {
//    return a*2;
// };

//...........................................Lesson№11.................................................

// class Rectangle {
//    constructor (height, width) {
//       this.height = height;
//       this.width = width;
//    }

//    calcArea() {
//       return this.height * this.width;
//    }
// }

// class ColoredRectangleWithText extends Rectangle {
//    constructor(height, width, text, bgColor) {
//       super(height, width);
//       this.text = text;
//       this.bgColor = bgColor;
//    }

//    showMyProps() {
//       console.log(`Текст ${this.text}, цветж ${this.bgColor}`);
//    }
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'red');

// div.showMyProps();
// console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(10, 100);
// console.log(square.calcArea());
// console.log(long.calcArea());

//...........................................Lesson№12.................................................
