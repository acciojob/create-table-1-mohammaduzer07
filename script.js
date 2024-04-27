function insert_Row() {
	
    //Write your code here
	const table = document.getElementById('sampleTable');
	const newRow = document.createElement("tr");

	const col1 = document.createElement("td");
	const col2 = document.createElement("td");
	
	const text1 = document.createTextNode("New Cell1");
    const text2 = document.createTextNode("New Cell2");

	// col1.textContent = "New Cell1";
	// col2.textContent = "New Cell2";
	col1.appendChild(text1);
    col2.appendChild(text2);
	
	newRow.appendChild(col1);
	newRow.appendChild(col2);

	table.insertBefore(newRow, table.firstChild);
	
}
