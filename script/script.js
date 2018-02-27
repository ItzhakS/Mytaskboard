var index = getCounter();
var task = document.getElementById('note')
var taskDate = document.getElementById('date')
var saveBtn = document.querySelector('div.form-paper button')

saveBtn.addEventListener('click', Save)

function Save() {
    if (task.value == "" ){
        task.required = true;
        console.log(task.value, 'empty')
        return
    }else if (taskDate.value == ""){
        taskDate.required = true;
        return
    }
    else {
        task.required = false; 
        taskDate.required = false
        var _note = task.value;
        var _notedate = taskDate.value;
        var o = {note : _note , notedate: _notedate}
        index++;
        var key = "note" + index;
        localStorage.setItem(key , JSON.stringify(o));
        localStorage.setItem("counter" , index);

        createTask()
        }
    }

    function getCounter() {
        return localStorage.counter || 0;
    }

var taskContainer = document.querySelector('.task-container')
    function createTask(idx=null) {
        var newTask = document.createElement('div')
        var taskDueDate = document.createElement('div')
        var taskContent = document.createElement('p')
        var taskHeader = document.createElement('h4')
        var dueByHeader = document.createElement('h4')
        newTask.className = 'new-task col-s-12 col-md-4 col-lg-2'
        var xIcon = document.createElement('span')
        xIcon.className = 'glyphicon glyphicon-remove-sign'
        if(!idx) {
            newTask.id = 'newTask'+index
            var value = localStorage.getItem('note'+ index)
            taskHeader.innerText = `Task #${index}`
            xIcon.id = index            
            
            
        } else {
            newTask.id = 'newTask'+idx
            var value = localStorage.getItem('note'+ idx)
            taskHeader.innerText = `Task #${idx}`
            xIcon.id = idx;            
        }
        
        var oNote = JSON.parse(value)
        dueByHeader.innerText = 'Due By: '
        dueByHeader.style.display = 'inline'
        dueByHeader.id = 'dueByHeader'
        taskContent.innerText = oNote.note
        taskDueDate.innerText = oNote.notedate
        newTask.appendChild(xIcon)
        newTask.appendChild(taskHeader)
        newTask.appendChild(taskContent)
        newTask.appendChild(dueByHeader)
        newTask.appendChild(taskDueDate)
        console.log(oNote)
        taskContainer.appendChild(newTask)
        window.getComputedStyle(newTask).opacity
        newTask.className += ' fade-in'
        task.value = ""
        taskDate.value = ""

        deleteBtns()
        
    }


function deleteBtns(){
var deleteBtnsArr = document.querySelectorAll('.glyphicon-remove-sign')
for (let i=0; i<deleteBtnsArr.length; i++) {
    deleteBtnsArr[i].addEventListener('click', deleteTask);
    }   
}
function deleteTask(){
    localStorage.removeItem('note' + this.id)
    index--
    console.log(this.id)
    var newTask = document.getElementById('newTask' + this.id)
    var xIcon = document.getElementById(this.id)
    xIcon.outerHTML = ""
    delete xIcon
    newTask.className = 'new-task fade-out'
    setTimeout(function () {
        newTask.outerHTML = ""
        delete newTask
    }, 1000)
}
document.body.onload = function () {
    loadData()
}
function loadData() {
    console.log(localStorage.length)
    if (localStorage.length > 0){
        let key = localStorage.getItem('counter')
        while (key > 0) {
            let idx = key
            if(localStorage.getItem('note'+idx))
                createTask(idx)
            key--
        }
    }
    
}