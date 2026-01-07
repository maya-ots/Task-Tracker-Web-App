const columns = document.querySelectorAll(".task-container");

columns.forEach(col => {
  col.addEventListener("dragover", e => {
    e.preventDefault();
    col.classList.add("drag-over");
  });

  col.addEventListener("dragleave", () => {
    col.classList.remove("drag-over");
  });

  col.addEventListener("drop", () => {
    const card = document.querySelector(".dragging");
    col.appendChild(card);
    col.classList.remove("drag-over");
  });
});

function enableDrag(task){
  task.addEventListener("dragstart", () => {
    task.classList.add("dragging");
  });

  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });
}

function addTask(columnId){
  const title = prompt("Task title?");
  if(!title) return;

  const card = document.createElement("div");
  card.className="task";
  card.draggable=true;

  card.innerHTML = `
      <h4>${title}</h4>
      <p>Task description...</p>
  `;

  enableDrag(card);
  document.getElementById(columnId).appendChild(card);
}
