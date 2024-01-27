
// const buttons = document.querySelectorAll('.button');
// const paragraphs = document.querySelectorAll('.paragraph');

// buttons.forEach((button, index) => {
//   button.addEventListener('click', () => {

//     // Toggle the display of the clicked paragraph
//     const isHidden = paragraphs[index].style.display === 'none';
//     paragraphs[index].style.display = isHidden ? 'block' : 'none';

//     // Toggle the button icon
//     button.src = isHidden ? "./assets/images/icon-minus.svg" : "./assets/images/icon-plus.svg";
//   });
// });

const buttons = document.querySelectorAll('.button');
const paragraphs = document.querySelectorAll('.paragraph');

buttons.forEach((button,index)=>{
  button.addEventListener('click',()=>{

    // Toggle the display of the clicked paragraph
    const isHidden = paragraphs[index].style.display === 'none';
    paragraphs[index].style.display = isHidden ? 'block' : 'none';

    // Toggle the button icon
    button.src = isHidden ? "./assets/images/icon-minus.svg" : "./assets/images/icon-plus.svg"
  });
});