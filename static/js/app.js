// from data.js
var tableData = data;

//Populate Data Table
var tbody = d3.select("#sightingsinfo");

//Log Entries into data table
function populateTable(){
    tableData.forEach((d) => {
        var row = tbody.append("tr");
        Object.entries(d).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
};
populateTable();

//Create Listener for Search
var filter = d3.select('#filter-btn')
filter.on("click",function(){
    d3.event.preventDefault();
    console.log("Filter was clicked")

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    if(inputValue == ""){
        tbody.html("");
        populateTable();
        console.log("Filter string was empty, table repopulated!");
    }
    else{
        tbody.html("");
        tableData.forEach((d) => {
            if(d.datetime==inputValue){
                var row = tbody.append("tr");
                Object.entries(d).forEach(([key, value]) => {
                    var cell = tbody.append("td");
                    cell.text(value);
                });
            };
        });
    }
        
})