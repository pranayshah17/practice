
window.addEventListener("DOMContentLoaded", () => {

    const task = JSON.parse(localStorage.getItem("task"))



    if (task && task.length > 0) {

        const tabledata = document.getElementById("tabledata");
        let actualdate = new Date();
        let realdate = `${actualdate.getFullYear()}-${actualdate.getMonth() + 1 < 10 ? `0${actualdate.getMonth() + 1}` : actualdate.getMonth() + 1}-${actualdate.getDate() < 10 ? `0${actualdate.getDate()}` : actualdate.getDate()}`
        let Realfrtime = `${(actualdate.getHours() < 10) ? `0${actualdate.getHours()}` : `${actualdate.getHours()}`}:${(actualdate.getMinutes() + 1 < 10) ? `0${actualdate.getMinutes() + 1}` : `${actualdate.getMinutes() + 1}`}`

        for (let i = 0; i < task.length; i++) {
            const row = document.createElement("tr");

            row.innerHTML = `
            <td> ${i + 1}</td>
            <td>${task[i].name}</td>
            <td>${task[i].mail_id}</td>
            <td>${task[i].appDate}</td>
            <td>${task[i].frtime}</td>
            <td>${task[i].Endtime}</td>
            <td>${task[i].Despvalue}</td>`
            tabledata.appendChild(row)

            if (task[i].appDate > realdate) {
                row.className = ("table-primary")
            }
            if ((task[i].appDate < realdate) || task[i].appDate == realdate && task[i].Endtime < Realfrtime) {
                row.className = ("table-secondary")
            }
            if (task[i].appDate == realdate && task[i].frtime < Realfrtime && task[i].Endtime >= Realfrtime) {
                row.className = ("table-success")

            }
            if (task[i].appDate == realdate && task[i].frtime > Realfrtime) {
                row.className = ("table-danger")

            }

        }
    }
})
// function ExpiredAppointment() {
//     const tabledata = document.getElementById("tabledata")
//     tabledata.innerHTML = ""
//     const task = JSON.parse(localStorage.getItem("task"))
//     let actualdate = new Date();
//     let realdate = `${actualdate.getFullYear()}-${actualdate.getMonth() + 1 < 10 ? `0${actualdate.getMonth() + 1}` : actualdate.getMonth() + 1}-${actualdate.getDate() < 10 ? `0${actualdate.getDate()}` : actualdate.getDate()}`

//     let Realfrtime = `${(actualdate.getHours() < 10) ? `0${actualdate.getHours()}` : `${actualdate.getHours()}`}:${(actualdate.getMinutes() + 1 < 10) ? `0${actualdate.getMinutes() + 1}` : `${actualdate.getMinutes() + 1}`}`

//     const filterdata = task.filter((appointment) => {
//         return (appointment.appDate <= realdate && appointment.frtime < Realfrtime && appointment.Endtime < Realfrtime)


//     })

//     for (let i = 0; i < filterdata.length; i++) {
//         const row = document.createElement("tr");



//         row.innerHTML = `
//             <td> ${i + 1}</td>
//             <td>${filterdata[i].name}</td>
//             <td>${filterdata[i].mail_id}</td>
//             <td>${filterdata[i].appDate}</td>
//             <td>${filterdata[i].frtime}</td>
//             <td>${filterdata[i].Endtime}</td>
//             <td>${filterdata[i].Despvalue}</td>`
//         tabledata.appendChild(row)
//         row.className = ("table-secondary")
//     }
// }
// function filterrunningAppointment() {
//     const tabledata = document.getElementById("tabledata")
//     tabledata.innerHTML = ""
//     const task = JSON.parse(localStorage.getItem("task"))
//     let actualdate = new Date();
//     let realdate = `${actualdate.getFullYear()}-${actualdate.getMonth() + 1 < 10 ? `0${actualdate.getMonth() + 1}` : actualdate.getMonth() + 1}-${actualdate.getDate() < 10 ? `0${actualdate.getDate()}` : actualdate.getDate()}`

//     let Realfrtime = `${(actualdate.getHours() < 10) ? `0${actualdate.getHours()}` : `${actualdate.getHours()}`}:${(actualdate.getMinutes() + 1 < 10) ? `0${actualdate.getMinutes() + 1}` : `${actualdate.getMinutes() + 1}`}`

//     const filterdata = task.filter((appointment) => {
//         return (appointment.appDate == realdate && appointment.frtime < Realfrtime && appointment.Endtime >= Realfrtime)
//     })

//     for (let i = 0; i < filterdata.length; i++) {
//         const row = document.createElement("tr");



//         row.innerHTML = `
//             <td> ${i + 1}</td>
//             <td>${filterdata[i].name}</td>
//             <td>${filterdata[i].mail_id}</td>
//             <td>${filterdata[i].appDate}</td>
//             <td>${filterdata[i].frtime}</td>
//             <td>${filterdata[i].Endtime}</td>
//             <td>${filterdata[i].Despvalue}</td>`
//         tabledata.appendChild(row)
//         row.className = ("table-success")
//     }
// }


// function TodaysAppointment() {
//     const tabledata = document.getElementById("tabledata")
//     tabledata.innerHTML = ""
//     const task = JSON.parse(localStorage.getItem("task"))
//     let actualdate = new Date();

//     let realdate = `${actualdate.getFullYear()}-${actualdate.getMonth() + 1 < 10 ? `0${actualdate.getMonth() + 1}` : actualdate.getMonth() + 1}-${actualdate.getDate() < 10 ? `0${actualdate.getDate()}` : actualdate.getDate()}`

//     let Realfrtime = `${(actualdate.getHours() < 10) ? `0${actualdate.getHours()}` : `${actualdate.getHours()}`}:${(actualdate.getMinutes() + 1 < 10) ? `0${actualdate.getMinutes() + 1}` : `${actualdate.getMinutes() + 1}`}`

//     const filterdata = task.filter((appointment) => {
//         return (appointment.appDate == realdate && appointment.frtime > Realfrtime)

//     })

//     for (let i = 0; i < filterdata.length; i++) {
//         const row = document.createElement("tr");



//         row.innerHTML = `
//              <td> ${i + 1}</td>
//             <td>${filterdata[i].name}</td>
//             <td>${filterdata[i].mail_id}</td>
//             <td>${filterdata[i].appDate}</td>
//             <td>${filterdata[i].frtime}</td>
//             <td>${filterdata[i].Endtime}</td>
//             <td>${filterdata[i].Despvalue}</td>`
//         tabledata.appendChild(row)
//         row.className = ("table-danger")
//     }
// }
// function UpcomingAppointment() {
//     const tabledata = document.getElementById("tabledata")
//     tabledata.innerHTML = ""
//     const task = JSON.parse(localStorage.getItem("task"))
//     let actualdate = new Date();

//     let realdate = `${actualdate.getFullYear()}-${actualdate.getMonth() + 1 < 10 ? `0${actualdate.getMonth() + 1}` : actualdate.getMonth() + 1}-${actualdate.getDate() < 10 ? `0${actualdate.getDate()}` : actualdate.getDate()}`

//     let Realfrtime = `${(actualdate.getHours() < 10) ? `0${actualdate.getHours()}` : `${actualdate.getHours()}`}:${(actualdate.getMinutes() + 1 < 10) ? `0${actualdate.getMinutes() + 1}` : `${actualdate.getMinutes() + 1}`}`

//     const filterdata = task.filter((appointment) => {
//         return (appointment.appDate > realdate)

//     })

//     for (let i = 0; i < filterdata.length; i++) {
//         const row = document.createElement("tr");



//         row.innerHTML = `
//              <td> ${i + 1}</td>
//             <td>${filterdata[i].name}</td>
//             <td>${filterdata[i].mail_id}</td>
//             <td>${filterdata[i].appDate}</td>
//             <td>${filterdata[i].frtime}</td>
//             <td>${filterdata[i].Endtime}</td>
//             <td>${filterdata[i].Despvalue}</td>`
//         tabledata.appendChild(row)
//         row.className = ("table-primary")
//     }
// }








function sortingtable(status) {

    const rowcolor = {
        upcooming: "table-primary",
        expired: "table-secondary",
        running: "table-success",
        today: "table-danger"
    }
    const tabledata = document.getElementById("tabledata")
    tabledata.innerHTML = ""
    const task = JSON.parse(localStorage.getItem("task"))
    // let actualdate = new Date();

    // let realdate = `${actualdate.getFullYear()}-${actualdate.getMonth() + 1 < 10 ? `0${actualdate.getMonth() + 1}` : actualdate.getMonth() + 1}-${actualdate.getDate() < 10 ? `0${actualdate.getDate()}` : actualdate.getDate()}`

    // let Realfrtime = `${(actualdate.getHours() < 10) ? `0${actualdate.getHours()}` : `${actualdate.getHours()}`}:${(actualdate.getMinutes() + 1 < 10) ? `0${actualdate.getMinutes() + 1}` : `${actualdate.getMinutes() + 1}`}`

    const filterdata = task.filter((value) => {
        return sortingcondition(status, value)

    })

    for (let i = 0; i < filterdata.length; i++) {
        const row = document.createElement("tr");



        row.innerHTML = `
             <td> ${i + 1}</td>
            <td>${filterdata[i].name}</td>
            <td>${filterdata[i].mail_id}</td>
            <td>${filterdata[i].appDate}</td>
            <td>${filterdata[i].frtime}</td>
            <td>${filterdata[i].Endtime}</td>
            <td>${filterdata[i].Despvalue}</td>`
        tabledata.appendChild(row)
        row.className = rowcolor[status]
    }
}

function sortingcondition(status, value) {
    let actualdate = new Date();

    let realdate = `${actualdate.getFullYear()}-${actualdate.getMonth() + 1 < 10 ? `0${actualdate.getMonth() + 1}` : actualdate.getMonth() + 1}-${actualdate.getDate() < 10 ? `0${actualdate.getDate()}` : actualdate.getDate()}`

    let Realfrtime = `${(actualdate.getHours() < 10) ? `0${actualdate.getHours()}` : `${actualdate.getHours()}`}:${(actualdate.getMinutes() + 1 < 10) ? `0${actualdate.getMinutes() + 1}` : `${actualdate.getMinutes() + 1}`}`
    const condition = {
        upcooming: (value.appDate > realdate),
        expired: ((value.appDate < realdate) || value.appDate == realdate && value.Endtime < Realfrtime),
        running: (value.appDate == realdate && value.frtime < Realfrtime && value.Endtime >= Realfrtime),
        today: (value.appDate == realdate && value.frtime >= Realfrtime && value.Endtime >= Realfrtime),
    }
    return condition[status]
}