interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Eammon",
    lastName: "Kiprotich",
    age: 22,
    location: "Kenya"
}

const student2: Student = {
    firstName: "testFirstName",
    lastName: "lastLastName",
    age: 21,
    location: "testCountry"
}

const studentsList: Student[] = [student1, student2];

const tableBody = document.querySelector("#studentsTable tbody") as HTMLTableElement;

studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName; // Correct: Add first name here

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location; // Add location here

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tableBody.appendChild(row);
});
