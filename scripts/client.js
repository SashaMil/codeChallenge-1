$(document).ready(readyNow);
console.log('hello');

function readyNow() {
  $('#generate').on('click', createDiv);
}

let counter = 0;
function createDiv() {
  console.log(counter);
  counter++;
  let newDiv = '<div class="color"><button class="swap">Swap</button><button class="delete">Delete</button><p>'+counter+'</p></div>'
  $('body').append(newDiv);

  $('.swap').on('click', switchColors);
  $('.delete').on('click', deleteDivs)

  }

  // function switchColors() {
  //   if ($(this).parents('div').css('background-color','red')) {
  //     $(this).parents('div').css('background-color', 'yellow');
  //     $(this).css('background-color', 'white');
  //   } else if ($(this).parents('div').css('background-color', 'yellow')) {
  //     $(this).parents('div').css('background-color', 'red');
  //   }
  // }
  
  function switchColors() {
    $(this).parents('div').toggleClass('otherColor');
  }

  function deleteDivs() {
    $(this).parents('div').remove();
  }
