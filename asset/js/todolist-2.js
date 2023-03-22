//app.js

const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const addTodoBtn = document.querySelector("#addTodo");
const todoList = document.querySelector("#todoList");

const apiUrl = "https://crudcrud.com/api/4b214c50375a4d7d9867376b698994c9/todolist" // Ganti dengan URL API yang telah Anda buat

// Function untuk menampilkan daftar todo
function showTodoList() {
    axios
        .get(apiUrl)
        .then((response) => {
            const todos = response.data;
            let todoListHTML = "";
            todos.forEach((todo) => {
                todoListHTML += `<li>${todo.title}</li>`;
            });
            todoList.innerHTML = todoListHTML;
        })
        .catch((error) => {
            console.log(error);
        });
}

// Panggil function showTodoList agar daftar todo muncul saat pertama kali halaman dimuat
showTodoList();

// Function untuk menambahkan todo baru
function addTodo() {
    const todoTitle = todoInput.value.trim();
    if (!todoTitle) {
        alert("Todo title is required!");
        return;
    }
    axios
        .post(apiUrl, { title: todoTitle })
        .then((response) => {
            showTodoList();
            todoInput.value = "";
        })
        .catch((error) => {
            console.log(error);
        });
}

// Tambahkan event listener untuk tombol "Add"
addTodoBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addTodo();
});

// Tambahkan event listener untuk form, agar todo juga dapat
function addTodo() {
    const input = document.getElementById("todoInput");
    const newTodo = {
        title: input.value,
        completed: false,
    };

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            getTodos();
            input.value = "";
        })
        .catch((error) => console.error(error));
}

function toggleTodoCompleted() {
    const toggle = document.getElementById("todoToggle");
    const newTodo = {
        title: input.value
    }
}
// const todo = document.getElementById('todo')

// //fitur todo
// // 1.menambahkan
// // 2.coret
// // 3.menghapus

// function add() {
//     //1. ambil nilai dari textnya
//     let newText = document.getElementById('new_text')
//     console.log(newText.value)
//     //2. tambahkan list baru ke dalam ul
//     let newTodo = "<li> <span onclick='toggle(this)'>" + newText.value +
//         "<span onclick='removeItem(this)'> [x] </span>" +
//         "</li>"


//     todo.insertAdjacentHTML('afterbegin', newTodo)


//     //kosongkan fieldnya
//     newText.value = ""

//     //
// }

// function toggle(el) {
//     el.classList.toggle('done')
// }

// function removeItem(el) {
//     el.parentElement.remove()
// }

// const apiUrl = 'https://crudcrud.com/api/4b214c50375a4d7d9867376b698994c9/tasks';
// const taskList = document.getElementById('task-list');
// const taskForm = document.querySelector('form');

// function getTasks() {
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(tasks => {
//             taskList.innerHTML = '';
//             tasks.forEach(task => {
//                 const li = document.createElement('li');
//                 li.textContent = task.task;
//                 taskList.appendChild(li);
//             });
//         });
// }

// taskForm.addEventListener('submit', event => {
//     event.preventDefault();
//     const taskInput = document.getElementById('task');
//     const task = taskInput.value;
//     taskInput.value = '';
//     fetch(apiUrl, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ task })
//     })
//         .then(response => response.json())
//         .then(() => {
//             getTasks();
//         });
// });

// getTasks();