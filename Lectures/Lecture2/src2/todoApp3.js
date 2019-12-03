// store todos in memory (instead of manipulate DOM)
let todos = []

function renderTodo(todo) {
  // render a single todo
}

function render() {
  // render the todos in memory to the page
  list.innerHTML = ''
  todos.map(renderTodo).forEach(todo => list.appendChild(todo))

  // update counts

  return false // to disable automatic page refresh (a kind of a "event" handling)
}

function addTodo(name) {
  const todo = new Todo(name)
  todos.push(todo)
  return render()
}

function removeTodo(todo) {
  todos = todos.filter(t => t !== todo)
  return render()
}
