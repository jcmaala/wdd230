const json_file = 'https://brotherblazzard.github.io/canvas-content/fruit.json'

const ingredientList = document.querySelector('.ingredientList');

fetch(json_file)
    .then(response => response.json())
    .then(datalist => {
      const lists = ['firstlist', 'secondlist', 'thirdlist'];
      
      lists.forEach(listId => {
        const fruit_list = document.getElementById(listId); 
        
        datalist.forEach(fruit => {
          const choice = document.createElement('option');
          choice.textContent = fruit.name;
          choice.value = fruit.name;
          fruit_list.appendChild(choice);
        });
      });
    })
    .catch(error => {
      console.error('error', error);
});