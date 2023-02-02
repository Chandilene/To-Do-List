const ul = document.getElementById("List");

function newTask() {
  let valueInput = document.getElementById("task-title").value;
  const element = document.createElement("li");
  element.innerHTML = ` 
  <span>${valueInput}</span>
  <button type="button">
  <i class="fa-sharp fa-solid fa-trash"></i>
  </button>
`;
  ul.appendChild(element);
}

function loadInitialTasks() {
  let liList = "";
  for (let i = 0; i < 3; i++) {
    liList += `  
    <li>
     <span>Tarefa de exemplo ${i + 1}</span>
     <button type="button">
     <i class="fa-sharp fa-solid fa-trash"></i>
     </button>
    </li>
 `;
  }
  ul.innerHTML = liList;
}
loadInitialTasks();
