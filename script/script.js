var index = getCounter();
    function Save() {
        var _note = note.value;
        var _notedate = notedate.value;
        var o = {note : _note , notedate: _notedate}
        index++;
        var key = "note" + index;
        window.localStorage.setItem(key , JSON.stringify(o));
        window.localStorage.setItem("counter" , index);

    }


    function getCounter() {
        return localStorage.counter || 0;
    }

    var saveBtn = document.querySelector('div.form-paper button')
    saveBtn.addEventListener('click', Save)