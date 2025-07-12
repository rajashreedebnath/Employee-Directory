// Mock Data in memory
let employees = [
  { id: 1, firstName: "Alice", lastName: "Smith", email: "alice@example.com", department: "HR", role: "Manager" },
  { id: 2, firstName: "Bob", lastName: "Johnson", email: "bob@example.com", department: "IT", role: "Developer" },
  { id: 3, firstName: "Charlie", lastName: "Lee", email: "charlie@example.com", department: "Finance", role: "Analyst" }
];

let filteredEmployees = [...employees];
let perPage = 10;
let currentPage = 1;

// Elements
const employeeList = document.getElementById('employeeList');
const addEmployeeBtn = document.getElementById('addEmployeeBtn');
const employeeModal = document.getElementById('employeeModal');
const employeeForm = document.getElementById('employeeForm');
const cancelBtn = document.getElementById('cancelBtn');
const searchInput = document.getElementById('searchInput');
const filterBtn = document.getElementById('searchBtn');
const filterSidebar = document.getElementById('filterSidebar');
const applyFilterBtn = document.getElementById('applyFilterBtn');
const resetFilterBtn = document.getElementById('resetFilterBtn');
const sortSelect = document.getElementById('sortSelect');
const perPageSelect = document.getElementById('perPageSelect');

// Sidebar filter inputs
const filterFirstName = document.getElementById('filterFirstName');
const filterDepartment = document.getElementById('filterDepartment');
const filterRole = document.getElementById('filterRole');

function renderEmployees() {
  employeeList.innerHTML = '';
  let start = (currentPage - 1) * perPage;
  let end = start + perPage;
  filteredEmployees.slice(start, end).forEach(emp => {
    const card = document.createElement('div');
    card.className = 'employee-card';
    card.innerHTML = `
      <p><strong>ID:</strong> ${emp.id}</p>
      <p><strong>Name:</strong> ${emp.firstName} ${emp.lastName}</p>
      <p><strong>Email:</strong> ${emp.email}</p>
      <p><strong>Department:</strong> ${emp.department}</p>
      <p><strong>Role:</strong> ${emp.role}</p>
      <button class="editBtn" data-id="${emp.id}">Edit</button>
      <button class="deleteBtn" data-id="${emp.id}">Delete</button>
    `;
    employeeList.appendChild(card);
  });
}

// ---------- ADD/EDIT Modal ----------
function openModal(edit = false, emp = null) {
  employeeModal.classList.remove('hidden');
  document.getElementById('modalTitle').textContent = edit ? 'Edit Employee' : 'Add Employee';
  employeeForm.reset();
  if (edit && emp) {
    document.getElementById('employeeId').value = emp.id;
    document.getElementById('firstName').value = emp.firstName;
    document.getElementById('lastName').value = emp.lastName;
    document.getElementById('email').value = emp.email;
    document.getElementById('department').value = emp.department;
    document.getElementById('role').value = emp.role;
  }
}
function closeModal() {
  employeeModal.classList.add('hidden');
}
addEmployeeBtn.addEventListener('click', () => openModal());
cancelBtn.addEventListener('click', closeModal);
employeeForm.addEventListener('submit', e => {
  e.preventDefault();
  const id = document.getElementById('employeeId').value;
  const newEmp = {
    id: id ? parseInt(id) : Date.now(),
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    department: document.getElementById('department').value,
    role: document.getElementById('role').value
  };
  if (!validateEmail(newEmp.email)) {
    alert('Invalid email format.');
    return;
  }
  if (id) {
    const index = employees.findIndex(e => e.id == id);
    employees[index] = newEmp;
  } else {
    employees.push(newEmp);
  }
  filteredEmployees = [...employees];
  renderEmployees();
  closeModal();
});
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// ---------- TOP SEARCH BAR (ENTER) ----------
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const term = searchInput.value.toLowerCase();
    filteredEmployees = employees.filter(emp =>
      emp.firstName.toLowerCase().includes(term) ||
      emp.lastName.toLowerCase().includes(term) ||
      emp.email.toLowerCase().includes(term)
    );
    currentPage = 1;
    renderEmployees();
  }
});

// ---------- FILTER BUTTON - Opens Sidebar ----------
filterBtn.addEventListener('click', () => {
  filterSidebar.classList.add('visible');
});

// ---------- APPLY FILTER IN SIDEBAR ----------
applyFilterBtn.addEventListener('click', () => {
  const fn = filterFirstName.value.toLowerCase();
  const dept = filterDepartment.value.toLowerCase();
  const role = filterRole.value.toLowerCase();
  filteredEmployees = employees.filter(emp =>
    (!fn || emp.firstName.toLowerCase().includes(fn)) &&
    (!dept || emp.department.toLowerCase().includes(dept)) &&
    (!role || emp.role.toLowerCase().includes(role))
  );
  currentPage = 1;
  renderEmployees();
  filterSidebar.classList.remove('visible');
});

// ---------- RESET FILTER IN SIDEBAR ----------
resetFilterBtn.addEventListener('click', () => {
  filterFirstName.value = '';
  filterDepartment.value = '';
  filterRole.value = '';
  filteredEmployees = [...employees];
  currentPage = 1;
  renderEmployees();
  filterSidebar.classList.remove('visible');
});

// ---------- Sorting ----------
sortSelect.addEventListener('change', () => {
  const sortBy = sortSelect.value;
  if (sortBy) {
    filteredEmployees.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }
  renderEmployees();
});

// ---------- Per page ----------
perPageSelect.addEventListener('change', () => {
  perPage = parseInt(perPageSelect.value);
  renderEmployees();
});

// ---------- Delegated edit/delete ----------
employeeList.addEventListener('click', e => {
  if (e.target.classList.contains('editBtn')) {
    const id = e.target.dataset.id;
    const emp = employees.find(emp => emp.id == id);
    openModal(true, emp);
  }
  if (e.target.classList.contains('deleteBtn')) {
    const id = e.target.dataset.id;
    employees = employees.filter(emp => emp.id != id);
    filteredEmployees = [...employees];
    renderEmployees();
  }
});

// Initial render
renderEmployees();
