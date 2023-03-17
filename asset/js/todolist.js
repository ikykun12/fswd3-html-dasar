// Mencari elemen HTML dengan id todo-list dan menyimpannya dalam variabel todoList.
const todoList = document.getElementById("todo-list");
// Mencari elemen HTML dengan id new-todo dan menyimpannya dalam variabel newTodoInput.
const newTodoInput = document.getElementById("new-todo");
// Mencari elemen HTML dengan id clear-completed dan menyimpannya dalam variabel clearCompletedButton.
const clearCompletedButton = document.getElementById("clear-completed");

function renderTodos() {
    // Dapatkan todos dari localStorage
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    // Kemudian, elemen HTML yang menampilkan daftar tugas (todoList) dikosongkan menggunakan todoList.innerHTML = "".
    todoList.innerHTML = "";

    // Fungsi untuk merender daftar tugas (todo list) yang tersimpan di dalam localStorage ke dalam elemen HTML yang sesuai.
    todos.forEach((todo, index) => {
        const todoElement = document.createElement("li");
        todoElement.className = "flex items-center py-2";

        const todoCheckbox = document.createElement("input");
        todoCheckbox.type = "checkbox";
        todoCheckbox.checked = todo.completed;
        todoCheckbox.addEventListener("change", () => {
            toggleTodoCompleted(index);
        });
        todoElement.appendChild(todoCheckbox);

        const todoText = document.createElement("span");
        todoText.className = "ml-3";
        todoText.innerText = todo.text;
        if (todo.completed) {
            todoText.className += " line-through text-gray-500";
        }
        todoElement.appendChild(todoText);

        const todoDeleteButton = document.createElement("button");
        todoDeleteButton.className = "ml-auto bg-red-500 text-white px-4 py-2 rounded-md";
        todoDeleteButton.innerText = "Delete";
        todoDeleteButton.addEventListener("click", () => {
            deleteTodo(index);
        });
        todoElement.appendChild(todoDeleteButton);

        todoList.appendChild(todoElement);
    });
}
//Fungsi untuk menambahkan tugas baru ke dalam localStorage dan kemudian merender ulang daftar tugas.
function addTodo() {
    const text = newTodoInput.value.trim();
    if (text.length === 0) {
        return;
    }
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push({ text, completed: false });
    localStorage.setItem("todos", JSON.stringify(todos));
    newTodoInput.value = "";
    renderTodos();
}
//Fungsi untuk menghapus tugas dari localStorage dan kemudian merender ulang daftar tugas.
function deleteTodo(index) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
}
//Fungsi untuk menandai tugas sebagai selesai atau belum selesai, kemudian menyimpan perubahan ke dalam localStorage dan merender ulang daftar tugas.
function toggleTodoCompleted(index) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos[index].completed = !todos[index].completed;
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
}
//Fungsi untuk menghapus semua tugas yang sudah selesai dari localStorage dan merender ulang daftar tugas.
function clearCompleted() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const newTodos = todos.filter((todo) => !todo.completed);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    renderTodos();
}

// Event listener yang akan dipanggil saat halaman selesai dimuat. Fungsi renderTodos akan dipanggil untuk merender daftar tugas yang tersimpan di localStorage.
document.addEventListener("DOMContentLoaded", renderTodos);
//Event listener yang akan dipanggil saat pengguna menekan tombol "Submit" pada form untuk menambahkan tugas baru. Fungsi addTodo akan dipanggil untuk menambahkan tugas baru ke dalam localStorage dan merender ulang daftar tugas.
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    addTodo();
});
clearCompletedButton.addEventListener("click", clearCompleted);