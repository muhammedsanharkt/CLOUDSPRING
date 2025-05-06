function getValue(){
    let btnGroup = document.createElement("div");
    let newTask = document.getElementById("newTaskAddingField").value;
    if (newTask === ""){
        return;
    }
    var newList = document.createElement("li");

    newList.innerText = newTask;
    var ul = document.getElementById("newli");
    ul.appendChild(newList);
    newList.className = "listdivision";

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "edit-button";
    editBtn.onclick = function(){
        let editingFile = newList.childNodes[0].nodeValue.trim();

        document.getElementById("newTaskAddingField").value = editingFile;
        newList.remove();
    }
    btnGroup.appendChild(editBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "DELETE";
    deleteBtn.className = "delete-button";
    
    deleteBtn.onclick = function(){
        newList.remove();
    };
    btnGroup.appendChild(deleteBtn);
    newList.appendChild(btnGroup);



    document.getElementById("newTaskAddingField").value = "";

    
}




