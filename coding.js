// <div>
// var ingredientList = $(' .ingredientList');
// var submit = $(' .submit-btn');
// submit.on("click" ,createNewUser);
//
// function createNewUser () {
//   var toDo = $(' .name').val();
//
//   appendNewToDo(toDo)
//   $('.name').val("");
// }
//
// function appendNewToDo(toDo) {
//   toDoList.append ('
//   <div class="to-do-card">
//   <p>${toDo}</p>
// <input type="checkbox" class="checkbox">
// </div>
// `);
//
//
//   var checkbox = $(' .checkbox')
//   checkbox.on("click", remove )
// }
//
// function remove() {
// event.target.parentNode.remove();
// }
//
//
//
//
//
// var toDoList = $('.toDoList');
// var submit = $('.submit-btn');
// submit.on("click",createNewUser);
//
// function createNewUser () {
//   var toDo = $('.name').val();
//
// //   appendNewToDo(toDo)
// //   $('.name').val("");
// // }
// //
// // function appendNewToDo(toDo) {
// //   toDoList.append (`
// // <div class="to-do-card">
// // <p>${toDo}</p>
// // <input type="checkbox" class="checkbox">
// // </div>
// // `);
// //
// //
// //   var checkbox = $(' .checkbox')
// //   checkbox.on("click", remove )
// // }
// //
// // function remove() {
// // event.target.parentNode.remove();
// // }
// var toDoList = $('.toDoList');
// var submit = $('.submit-btn');
// submit.on("click",createNewUser);
//
// function createNewUser () {
//   var toDo = $('.name').val();
//
//   appendNewToDo(toDo)
//   $('.name').val("");
// }
//
// function appendNewToDo(toDo) {
//   toDoList.append (`
// <div>
// <p class = "newCard">${toDo}</p>
// <input type="checkbox" class= "checkbox">
// </div>
// `);
//   var checkbox = $(' .checkbox')
//   checkbox.on("click", remove )
// }
//
// function remove() {
// event.target.parentNode.remove();
// }
//
// const ratings = {
//  chocolate_cake : 2.8,
//   coffee_ice_cream : 3.3,
// };
// const starTotal = 5;
//
// for(const rating in ratings) {
//   // 2
//   const starPercentage = (ratings[rating] / starTotal) * 100;
//   // 3
//   const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
//   // 4
//   document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
// }
