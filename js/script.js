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