const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

// To do list를 저장하기 위한 array 선언.
const toDos = [];

function saveToDos(){
    // Javascript 객체(Object) 나 배열(Array) 를 String으로 변환 할 수 있다.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    // console.dir 을 통해서 버튼에 해당하는 li를 찾아갈 수 있다. 지금은 target.parentElement 또는 target.parentNode로 추적가능
    // target은 클릭된 HTML Element
    // console.log(event.target.parentElement);

    // 따라서 클릭하면 삭제하고 싶은 li를 다음과 같이 정의할 수 있다.
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    // 속성 추가하기
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo);

    // li 태그 내부에 span 태그 , button 추가
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // input에 현재 내용을 복사. 이미 newTodo 변수에 값을 저장했기 때문에 이후의 value는 신경쓰지 않아도 됨.
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// 람다를 사용하지 않을때, function으로 선언하여 사용해도 됨.
function sayHello(item){
    console.log("This is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

// ToDos가 없을때 처리
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    // sayHello fucntion 호출이 아닌 람다를 사용하여 forEach 구문 완성.(short-cut)
    parsedToDos.forEach((item) => console.log("This is the turn of ", item));
}