function addNote() {
    var input = document.notes.inpText.value;
    document.notes.inpText.value = "";
    var divInput = '<div id = "'+input+'"  class = "bg-info" ><div class = "spacing">'+ input+ '</div>' + '<input type="button" value="Delete Note" onclick="deleteNote(' + input + ')" class = "btn btn-danger"></div>'

    document.getElementById("displayNotes").innerHTML += divInput;
    
}
function deleteNote(text){
    $(text).remove();
}
