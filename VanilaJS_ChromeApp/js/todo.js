const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    // input에 현재 내용을 복사. 이미 newTodo 변수에 값을 저장했기 때문에 이후의 value는 신경쓰지 않아도 됨.
    const newTodo = toDoInput.value;
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);