var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["nama"] = document.getElementById("nama").value;
    formData["jumlah"] = document.getElementById("jumlah").value;
    formData["tenor"] = document.getElementById("tenor").value;
    formData["cicilan"] = document.getElementById("cicilan").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.nama;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.jumlah;
    cell4 = newRow.insertCell(2);
		cell4.innerHTML = data.tenor;
    cell3 = newRow.insertCell(3);
		cell3.innerHTML = data.cicilan;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nama").value = selectedRow.cells[0].innerHTML;
    document.getElementById("jumlah").value = selectedRow.cells[1].innerHTML;
    document.getElementById("tenor").value = selectedRow.cells[2].innerHTML;
    document.getElementById("cicilan").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nama;
    selectedRow.cells[1].innerHTML = formData.jumlah;
    selectedRow.cells[2].innerHTML = formData.tenor;
    selectedRow.cells[3].innerHTML = formData.cicilan;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("nama").value = '';
    document.getElementById("jumlah").value = '';
    document.getElementById("tenor").value = '';
    document.getElementById("cicilan").value = '';
    selectedRow = null;
}