// // console.log('dom js');
// function makeRed (){
// 	document.body.style.backgroundColor = 'red';
// }
// document.getElementById('make-orange').addEventListener('click', function(){
//       document.body.style.backgroundColor = 'orange';
//     });

// function handleOnClick(){
//   const handlerStatus = document.getElementById('handler-status');
//   handlerStatus.innerText = 'Handle by function attached onclick attribute';
// }

// function handleOnClickShakib(){
//   const handlerStatusPractice = document.getElementById('handler-status');
//   handlerStatusPractice.innerText = 'shakib al hasan';
// }

// document.getElementById('event-listener').addEventListener('click', function(){
//   const handlerStatus = document.getElementById('handler-status');
//   handlerStatus.innerText = 'Handle by event listener';
// })

// document.getElementById('btn-update').addEventListener('click', function(){
//   // console.log('update button clicked');
//   const inputField = document.getElementById('input-field');
//   // console.log(inputField.value);
//   const inputText = inputField.value ;
//   const p = document.getElementById('update-field');
//   p.innerText = inputText;
//   inputField.value = '';
// })

document.getElementById('btn-comment').addEventListener('click', function(){
  // console.log('comment button  clicked');
  const commentField = document.getElementById('comment-area');
  const commentText = commentField.value ;
  // console.log(commentText);
  const commentContainer = document.getElementById('comment-container');
  const p = document.createElement('p');
  p.innerText = commentText;
  commentContainer.append(p);
  commentField.value = '';
})