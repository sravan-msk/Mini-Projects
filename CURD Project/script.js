const form = document.getElementById("userForm");
const tableBody = document.getElementById("tableBody");

let data = [];
let editIndex = null;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const role = document.getElementById("role").value;

  if (editIndex === null) {
    data.push({ name, email, role });
  } else {
    data[editIndex] = { name, email, role };
    editIndex = null;
  }

  form.reset();
  renderTable();
});

function renderTable() {
  tableBody.innerHTML = "";

  data.forEach((item, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.role}</td>
        <td>
          <button class="edit-btn" onclick="editRow(${index})">Edit</button>
          <button class="delete-btn" onclick="deleteRow(${index})">Delete</button>
        </td>
      `;

    tableBody.appendChild(row);
  });
}

function editRow(index) {
  const item = data[index];

  document.getElementById("name").value = item.name;
  document.getElementById("email").value = item.email;
  document.getElementById("role").value = item.role;

  editIndex = index;
}

function deleteRow(index) {
  data.splice(index, 1);
  renderTable();
}
