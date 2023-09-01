var inputText = document.querySelector('.inputTodo')
var dugmeTodo = document.querySelector('.btnTodo')
var lista = document.querySelector('.lista')
var txt = document.getElementById("txtDodajTodo")
var filteropcija = document.querySelector('.filter')

document.addEventListener('DOMContentLoaded', getTodos)

dugmeTodo.addEventListener('click',()=>{
    dodajTodo()
    inputText.value = ""
})

txt.addEventListener('keydown',(e)=>{
    if(e.key === "Enter"){
        dodajTodo()
        inputText.value=""
    }
})

filteropcija.addEventListener('click',filterujTodoListu)

lista.addEventListener('click', brisi)

function dodajTodo(){

    if(inputText.value === ""){
        txt.classList.add("greska")
    }else{
        const todoDiv = document.createElement("div")
        todoDiv.classList.add("todo")

        const novaTodo = document.createElement("li")
        novaTodo.innerText = inputText.value
        novaTodo.classList.add("todoItem")
        todoDiv.appendChild(novaTodo)

        sacuvajLocalTodos(txt.value)

        const uradjenoDugme = document.createElement('button')
        uradjenoDugme.innerHTML = `<button class="dugmicChecked" name="dugme">✔️</button>`
        uradjenoDugme.classList.add("gotovoDugme")
        todoDiv.appendChild(uradjenoDugme)

        const brisiDugme = document.createElement('button')
        brisiDugme.innerHTML = `<button class="dugmicDelete" name="dugme">🗑️</button>`
        brisiDugme.classList.add("brisiDugme")
        todoDiv.appendChild(brisiDugme)

        lista.appendChild(todoDiv)
        txt.classList.remove("greska")
    }
    
}

//brisanjetodo

function brisi(e) {
    const i = e.target
    if(i.classList.contains('dugmicDelete')){
        const todo = i.parentElement.parentElement
        todo.classList.add('fall')
        brisiLocalTodos(todo)
        setTimeout(function(){
            todo.remove()
        },250)
    }

    if(i.classList.contains('dugmicChecked')){
        const todo = i.parentElement.parentElement
        todo.classList.toggle('uradjeno')
    }
}

//filtriranje todova

function filterujTodoListu(e){
    const tudu = lista.childNodes
    console.log(tudu)
    // for(let todo of tudu){
    //     if(e.target.value=="all"){
    //         todo.style.display = "flex";
    //     }else if(e.target.value=="completed"){
    //         if(todo.classList.contains("uradjeno")){
    //             todo.style.display = "flex"
    //         }else{
    //             todo.style.display = "none"
    //         }
    //     }else if(e.target.value=="uncompleted"){
    //         if(!todo.classList.contains("uradjeno")){
    //             todo.display.style = "flex"
    //         }else{
    //             todo.style.display = "none"
    //         }
    // }
        


    // for(let todo of tudu){
    //     switch(e.target.value){
    //             case "all":
    //                 todo.style.display = "flex";
    //                 break;
    //             case "completed":
    //                 if(todo.classList.contains('completed')){
    //                     todo.style.display = "flex"
    //                 }else{
    //                     todo.style.display = "none"
    //                 }
    //                 break;
    //             case "uncompleted":
    //                 if(!todo.classList.contains('completed')){
    //                     todo.style.display = "flex"
    //                 }else{
    //                     todo.style.display = "none"
    //                 }
    //                 break;
    //         }
    // }

    tudu.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains('uradjeno')){
                    todo.style.display = "flex"
                }else{
                    todo.style.display = "none"
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('uradjeno')){
                    todo.style.display = "flex"
                }else{
                    todo.style.display = "none"
                }
                break;
        }
    })
}

//save

function sacuvajLocalTodos(todo){
    let todos
    if(localStorage.getItem('todos') === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

//kreiranje i storage

function getTodos(){
    //console.log("aloo")
    let todos
    if(localStorage.getItem('todos') === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(function(todo){
        const todoDiv = document.createElement("div")
        todoDiv.classList.add("todo")

        const novaTodo = document.createElement("li")
        novaTodo.innerText = todo
        novaTodo.classList.add("todoItem")
        todoDiv.appendChild(novaTodo)

        const uradjenoDugme = document.createElement('button')
        uradjenoDugme.innerHTML = `<button class="dugmicChecked" name="dugme">✔️</button>`
        uradjenoDugme.classList.add("gotovoDugme")
        todoDiv.appendChild(uradjenoDugme)

        const brisiDugme = document.createElement('button')
        brisiDugme.innerHTML = `<button class="dugmicDelete" name="dugme">🗑️</button>`
        brisiDugme.classList.add("brisiDugme")
        todoDiv.appendChild(brisiDugme)

        lista.appendChild(todoDiv)
    })
}

//brisanje iz local storage

function brisiLocalTodos(todo){
    let todos
    if(localStorage.getItem('todos') === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    const todoIndex = todo.children[0].innerText
    todos.splice(todos.indexOf(todoIndex),1)
    localStorage.setItem('todos', JSON.stringify(todos))
}
    


// function brisi(e){
//     var i = e.target
//     var brisidugme = document.querySelector(".dugmicDelete")
//     var cap = brisidugme.parentElement.parentElement
//     var uradjenodugme = document.querySelector('.dugmicChecked')
//     console.log(cap)
//     // if(i === brisidugme){
//     //     cap.classList.add('fall')
//     //     cap.addEventListener('transitionend', function(){
//     //         cap.remove()
//     //     })
//     // }

//     if(i===brisidugme){
//         cap.classList.add('fall')
//         setTimeout(function(){
//             cap.remove()
//         },250)
//     }

//     if(i === uradjenodugme){
//         cap.classList.toggle('uradjeno')
//     }
// }

