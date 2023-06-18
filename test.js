const email = document.querySelector(".email");
const nameOfUser = document.querySelector(".name");
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
const button = document.querySelector(".submit-btn");
const formValid = document.querySelector("form");
console.log(formValid);

const savedDatas = JSON.parse(localStorage.getItem("name")) || [];



formValid.addEventListener('submit', (e) => {
    e.preventDefault();

    let info = {
        "name": nameOfUser.value,
        "email": email.value
    }
    savedDatas.push(info);
    localStorage.setItem("name", JSON.stringify(savedDatas));
    console.log(savedDatas);
    tbody.innerHTML = "";
    // create table
    savedDatas.forEach((data) => {
        const { name, email } = data;



        const tableRow = document.createElement("tr");
        const tableHeadName = document.createElement("td");
        const tableHeadEmail = document.createElement("td");
        const deletIcon = document.createElement("td");

        tableHeadName.classList.add("one");
        tableHeadEmail.classList.add("one");
        deletIcon.classList.add("one");
        deletIcon.classList.add("delet");

        tableRow.appendChild(tableHeadName);
        tableRow.appendChild(tableHeadEmail);
        tableRow.appendChild(deletIcon);

        tableHeadName.innerText = name;
        tableHeadEmail.innerText = email;
        deletIcon.innerText = "delet";

        tbody.appendChild(tableRow);
        table.style.display = "block";

        //delet 
        deletIcon.addEventListener("click", () => {
            alert("Are you sure you want to delete this?");
            const deletRow = deletIcon.parentNode.parentNode;
            deletRow.removeChild(deletIcon.parentNode);

            // Remove the data from storedData
            const index = savedDatas.findIndex(
                (data) => data.email === email && data.name === name
            );
            if (index !== -1) {
                savedDatas.splice(index, 1);
                // Update the data in localStorage after deletion
                localStorage.setItem("name", JSON.stringify(savedDatas));
            }
        });



    })



})
window.addEventListener('DOMContentLoaded', () => {
    savedDatas.forEach((data) => {
        const { name, email } = data;

        const tableRow = document.createElement("tr");
        const tableHeadName = document.createElement("td");
        const tableHeadEmail = document.createElement("td");
        const deleteIcon = document.createElement("td");

        tableHeadName.classList.add("one");
        tableHeadEmail.classList.add("one");
        deleteIcon.classList.add("one");
        deleteIcon.classList.add("delete");

        tableHeadName.innerText = name;
        tableHeadEmail.innerText = email;
        deleteIcon.innerText = "delete";

        tableRow.appendChild(tableHeadName);
        tableRow.appendChild(tableHeadEmail);
        tableRow.appendChild(deleteIcon);

        tbody.appendChild(tableRow);
    });
    table.style.display = "block";
});
