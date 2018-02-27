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
    function createTask() {
        var newTask = document.createElement('div')
        var taskDueDate = document.createElement('div')
        var taskContent = document.createElement('p')
        var taskHeader = document.createElement('h4')
        var dueByHeader = document.createElement('h4')
        newTask.className = 'new-task col-s-12 col-md-4 col-lg-2'
        newTask.id = 'newTask'+index
        var xIcon = document.createElement('span')
        xIcon.className = 'glyphicon glyphicon-remove-sign'
        xIcon.id = index
        var value = localStorage.getItem('note'+ index)
        var oNote = JSON.parse(value)
        taskContent.innerText = oNote.note
        taskDueDate.innerText = oNote.notedate
        newTask.appendChild(xIcon)
        newTask.appendChild(taskContent)
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

function loadData() {
    if (localStorage.length > 0){
        let key = localStorage.counter
        // while key 
        // localStorage.getItem(key)
        
    }
    
}