// Get the element with the id you assigned and save it to a variable
// Console.log that variable.
let image = document.querySelector('#container')
console.log(image)
// Get the h2 element and save it to a variable h2.
// Console.log that variable.
let h2 = document.querySelector('h2')
console.log(h2)
// Using JavaScript, change the innerText of your h2 to have
// 3 exclamation points at the end
document.querySelector('h2').innerText = 'Welcome to West Jordan!!!'
// Get all of the elements with the class you assigned and
// save them to a variable. Console.log that variable.
let section = document.querySelectorAll('.section')
console.log(section)
//  Change the style/color of the text of your ONE of your li elements
// to your favorite html color
document.querySelector('ol').children[0].style.color = 'DarkOliveGreen'
// Change the innerText of one of your list items to
// 'Jamboree sandwich at the Jambo-ree'
document.querySelector('ol').children[1].innerText = 'Jamboree sandwich at the Jambo-ree'
