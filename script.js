function insert_Row() {
	
    //Write your code here
	let table = document.getElementById('sampleTable');
	let newRow = document.createElement("tr");

	const col1 = document.createElement("td");
	const col2 = document.createElement("td");

	col1.innerHTML = "New Cell1";
	col2.innerHTML = "New Cell2";
	
	newRow.appendChild(col1);
	newRow.appendChild(col2);

	table.insertBefore(newRow, table.firstChild);
	
}
// insert_Row()
