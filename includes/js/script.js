var startYear = 1950;
var endYear = new Date().getFullYear(); 
var selectElement = document.getElementById("year");
for (let year = startYear; year <= endYear; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    selectElement.appendChild(option);
}
// end
