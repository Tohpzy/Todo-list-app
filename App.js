const textInput = document.querySelector('#textInput');
const addButton = document.querySelector('#press');
let tasks = document.querySelector('.tasks')
let taskName = document.querySelector('.taskname')



//validation starts
addButton.addEventListener('click', () => {
  if (textInput.value.length == 0) {
    alert('Please fill out this field ')
    return;
  }
  if (!validateMessage()) {
    alert('NB: entry must not be more than 23 characters ')
    return;
  }
  // let oldTexts = JSON.parse(localStorage.getItem('notes')) || [];

  // let text = {
  //   text: textInput.value
  // }
  // oldTexts.push(text);
  // localStorage.setItem('notes', JSON.stringify(oldTexts));
  // alert('Note was successfully updated')
  // location.reload();


})
//validation ends

//the task content gangan


let oldTexts = JSON.parse(localStorage.getItem("notes")) || []
addButton.addEventListener("click", () => {
  let text = textInput.value;
  oldTexts.push(text);
  localStorage.setItem("notes", JSON.stringify(oldTexts))
  location.reload()

})

for (let oldText of oldTexts) {
  //creating a new div
  let div = document.createElement("div")
  div.innerHTML = `
    <div class = "task" >
     <span class = "taskname">${oldText}
    </span>
    <button class="delete">
    <i class="far fa-trash-alt"></i>
    </button>
    </div>  
  `
  tasks.append(div)
}

const delButton = document.querySelectorAll('.delete')
const task = document.querySelectorAll('.task')

for (let i = 0; i < delButton.length; i++) {
  delButton[i].addEventListener('click', () => {
    let oldTexts = JSON.parse(localStorage.getItem("notes")) || []
    oldTexts.splice(task[i], 1)

    localStorage.setItem("notes", JSON.stringify(oldTexts))

    location.reload()

  })
}


// validation section
function validateMessage() {
  let inputArea = textInput.value;
  let required = 20;
  let left = required - textInput.length;

  if (left > 0) {
    inputError.innerHTML = left + 'More character required'
    return false;
  } else {
    inputError.innerHTML = '<i class="fa fa-check-square" aria-hidden="true"></i>';
    return true;
  }
}
textInput.addEventListener('keyup', validateMessage)









//    .onclick = function () {
//    if (document.querySelector('.todo_inputF input').value.length == 0) {
//      alert('please enter the task!')
//    } else {
//      // localStorage.setItem(textInput);
//      // location.reload();
//      document.querySelector('.tasks').innerHTML += `

//   <div class= "task">
//  <span class = "taskname">
//  </span>
// <button class="delete">
//     <i class="far fa-trash-alt"></i>
//                 </button>
//             </div>  `;

//      // now active cancel button
//      let current_task = document.querySelectorAll('.delete');
//      for (let i = 0; i < current_task.length; i++) {
//        current_task[i].onclick = function () {
//          this.parentNode.remove();
//        }
//      }

//    }
//  }



// localstorage
// const textInput = document.querySelector('#textInput');
// const addButton = document.querySelector('#press');
// const taskSection = document.querySelector('.tasks');
// const task = document.querySelector('.task');
// //the task content gangan
// const taskName = document.querySelector('.taskname');
// const delButton = document.querySelector('.delete');

// addButton.onclick = function () {
//   const inputTt = textInput.value;
//   console.log(inputTt);

//   if (inputTt) {
//     localStorage.setItem(inputTt);
//     location.reload();
//   }
// }