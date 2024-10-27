// Function to generate multiplication table
function generateTable() {
    const number = document.getElementById("number-input").value;
    const outputDiv = document.getElementById("table-output");
    outputDiv.innerHTML = ""; // Clear previous content

    // Check if input is a valid number
    if (number === "" || isNaN(number)) {
        outputDiv.innerHTML = "<p>Please enter a valid number.</p>";
        return;
    }

    // Generate multiplication table
    let tableContent = "<table>";
    for (let i = 1; i <= 10; i++) {
        tableContent += `<tr><td>${number} x ${i} = ${number * i}</td></tr>`;
    }
    tableContent += "</table>";

    // Display the table inside the green box
    outputDiv.innerHTML = tableContent;
}
