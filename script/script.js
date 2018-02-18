var index = getCounter();
var task = document.getElementById('note')
var taskDate = document.getElementById('date')
var saveBtn = document.querySelector('div.form-paper button')
saveBtn.addEventListener('click', Save)

function Save() {
        var _note = task.value;
        var _notedate = taskDate.value;
        var o = {note : _note , notedate: _notedate}
        index++;
        var key = "note" + index;
        localStorage.setItem(key , JSON.stringify(o));
        localStorage.setItem("counter" , index);

        createTask()
    }

    function getCounter() {
        return localStorage.counter || 0;
    }

var taskContainer = document.querySelector('.task-container')
    function createTask() {
        var newTask = document.createElement('div')
        var taskDueDate = document.createElement('div')
        var taskContent = document.createElement('p')
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
for (let index = 0; index < deleteBtnsArr.length; index++) {
    deleteBtnsArr[index].addEventListener('click', deleteTask);
    }   
}
function deleteTask(){
    localStorage.removeItem('note' + this.id)
    console.log(this.id)
    var newTask = document.getElementById('newTask' + this.id)
    newTask.outerHTML = ""
    delete newTask

}