let sortAscending = true;
function sorting() {

    let lsgetdata = JSON.parse(localStorage.getItem("countrydata"))

    newdata = lsgetdata.sort((a, b) => {
        if (sortAscending) {
            return a.population - b.population;
        } else {
            return b.population - a.population;
        }

    }
    )

    tabledata.innerHTML = ""
    for (let i = 0; i < newdata.length; i++) {
        const row = document.createElement("tr");

        row.innerHTML = `
    <td>${i + 1}</td>
    <td>${newdata[i].name.common}</td>
    <td>${newdata[i].name.official}</td>
    <td>${newdata[i].capital}</td>
    <td>${newdata[i].region}</td>
    <td>${newdata[i].area}</td>
    <td>${newdata[i].population}</td>
    <td>${newdata[i].flag}</td>`
        tabledata.appendChild(row)
        if ((newdata[i].area >= 0 && newdata[i].area <= 10000)) {
            row.className = "table-secondary"
        }
        if ((newdata[i].area > 10001 && newdata[i].area <= 50000)) {
            row.className = "table-warning"
        }
        if ((newdata[i].area > 50000 && newdata[i].area <= 100000)) {
            row.className = "table-success"
        }
        if ((newdata[i].area > 100000)) {
            row.className = "table-danger"
        }
    }
    sortAscending = !sortAscending
}