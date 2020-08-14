// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Iterate through each student/grade pair
function buildTable(i) {
    
    tbody.html("");
    
    i.forEach((sightings) => {

    // Append one table row per student/grade
        var row = tbody.append("tr");
  
    // append one cell for the student and one cell for the grade
        Object.entries(sightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });;
  });
};

buildTable(tableData)

  // Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select(".filter list-group-item");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
      
    var filteredData = tableData.filter(date => date.datetime === inputValue);
  
    console.log(filteredData);

    buildTable(filteredData);
};



