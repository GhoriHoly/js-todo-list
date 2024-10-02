let i = 0;

//Function for adding new item.
function add_new_item(){

    let new_todo = document.getElementById("new_item").value;

    if(new_todo!=""){
       
        document.getElementById("checkboxes").innerHTML += `<div class="each_todo"><input type='checkbox'  id="${i}"><label> ${new_todo} </label></div>`;

        let todo_list = getTodoItem_from_localstorage(); // checking is it emty or something is there.
        // Saving new todos into local storage.
        todo_list.push({
            "todoItem": new_todo,
            "isCompleted": false
        });
       
        localStorage.setItem("storage_todoItem",JSON.stringify(todo_list));
        document.getElementById('new_item').value = '';  // Clear input field
    
        i++;

    }
    else{
        document.getElementById("notification").innerHTML = "Please add some task in your TODO list!";
    }
    
}


function getTodoItem_from_localstorage(){
    const todo_list = localStorage.getItem('storage_todoItem');
    return todo_list ? JSON.parse(todo_list) : [];
}

function toggleComplete(index){
    const todo_list= getTodoItem_from_localstorage();
    todo_list[index].isCompleted = !todo_list[index].isCompleted;

    //Saving todo to local storage.
    localStorage.setItem('storage_todoItem', JSON.stringify(todo_list));

}


function show_items_from_localstorage(){
    const todo_list = getTodoItem_from_localstorage();
    //console.log(todo_list);

    for(count= 0; count<todo_list.length; count++){
        //console.log(todo_list[count].todoItem + "-" + todo_list[count].isCompleted );
    
        const isChecked = todo_list[count].isCompleted ? 'checked' : '';

        document.getElementById("checkboxes").innerHTML += `<div class="each_todo">
                                                                <input type='checkbox' id="${i}" ${isChecked} onclick="toggleComplete(${i})">
                                                                <label class="text_decoration"> ${todo_list[count].todoItem} </label>
                                                            </div>`;

        //console.log(todo_list[count].isCompleted);
        //console.log(typeof(todo_list[count].isCompleted)); Boolean

        i++;

    }
}

show_items_from_localstorage();




