const app = document.querySelector(".todo-app")
const taskList = app.querySelector(".task-list")
const input = app.querySelector(".add-task-input")
const addButton = document.querySelector(".add-button")

let tasks = [
  { id: 1, title: "Buy new sweatshirt", completed: true },
  { id: 2, title: "Read an article", completed: true },
  { id: 3, title: "Write blog post", completed: false },
  { id: 4, title: "Watch Mr Robot", completed: false },
  { id: 5, title: "Run", completed: false },
]

function renderTasks() {
  taskList.innerHTML = ""
  tasks.forEach((task) => {
    const li = document.createElement("li")
    li.className = `task-item ${task.completed ? "completed" : ""}`
    li.innerHTML = `
      <span class="task-title">${task.title}</span>
      <div class="status-icon" data-id="${task.id}">
       ${
         task.completed
           ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>`
           : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" x2="16" y1="15" y2="15"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>`
       }
      </div>
    `
    taskList.appendChild(li)
  })
}

function addTask() {
  const title = input.value.trim()
  if (!title) return
  tasks.push({ id: tasks.length + 1, title, completed: false })
  input.value = ""
  renderTasks()
}

function toggleStatus(id) {
  const task = tasks.find((t) => t.id === id)
  if (!task) return
  task.completed = !task.completed
  renderTasks()
}

addButton.addEventListener("click", addTask)
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask()
})

taskList.addEventListener("click", (e) => {
  const statusIcon = e.target.closest(".status-icon")
  if (statusIcon) {
    const taskId = statusIcon.dataset.id
    toggleStatus(Number(taskId))
  }
})

renderTasks()
