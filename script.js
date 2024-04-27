function insert_Row() {
	
    //Write your code here
	const table = document.getElementById('sampleTable');
	const newRow = document.createElement("tr");

	const col1 = document.createElement("td");
	const col2 = document.createElement("td");
	
	col1.textContent = "New Cell1";
	col2.textContent = "New Cell2";

	newRow.appendChild(col1);
	newRow.appendChild(col2);

	// table.insertBefore(newRow, table.firstChild);
	table.tBodies[0].insertBefore(newRow, table.tBodies[0].firstChild);
}
