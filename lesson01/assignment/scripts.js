// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){
  // Handle sum-form submit event
  const sumForm = document.getElementById('sum-form');
  sumForm.addEventListener('submit', function(event){
     // Prevent the form from trying to submit to a server
    event.preventDefault();
    const inputField = sumForm.querySelector('.input');
    const userInput = inputField.value;
    const numbersArray = userInput.split(",").map(Number);
    // Use reduce to sum all the numbers in the data array
    const sum = numbersArray.reduce((accumulator, currentElement) => accumulator + currentElement, 0);
    sumForm.querySelector('.output').textContent = `The Sum of given array is: ${sum}`;
     // Clear the form field so the user can try again
    inputField.value = '';
  });

  // Handle max-form submit event
  const maxForm = document.getElementById('max-form');
  maxForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault();
    const inputField = maxForm.querySelector('.input');
    const userInput = inputField.value;
    const numbersArray = userInput.split(",").map(Number);
    //Find Maximum form using math.max
    const max = Math.max(...numbersArray);
    maxForm.querySelector('.output').textContent = `The Maximum of given array is: ${max}`;
     // Clear the form field so the user can try again
    inputField.value = '';
  });

  // Handle filter-form submit event
  const filterForm = document.getElementById('filter-form');
  filterForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault();
    const inputField = filterForm.querySelector('.input');
    const userInput = inputField.value;
    const numbersArray = userInput.split(",").map(Number);
    //To filter elements using a condition use filter
    const evenNumbers = numbersArray.filter(num => num % 2 === 0);
    filterForm.querySelector('.output').textContent = `The Even Numbers in the given array is: ${evenNumbers.join(", ")}`;
     // Clear the form field so the user can try again
    inputField.value = '';
  });

  // Handle capitalize-form submit event
  const capitalizeForm = document.getElementById('capitalize-form');
  capitalizeForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault();
    const inputField = capitalizeForm.querySelector('.input');
    const userInput = inputField.value;
    //Use toUpperCase to convert user input into upper case
    const capitalizedText = userInput.toUpperCase();
    capitalizeForm.querySelector('.output').textContent = `The Capitalized Text is: ${capitalizedText}`;
     // Clear the form field so the user can try again
    inputField.value = '';
  });
});
