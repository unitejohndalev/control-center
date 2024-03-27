// Ascending sort functions
const ascendingSort = (property) => (a, b) => {
  if (a[property] < b[property]) return -1;
  if (a[property] > b[property]) return 1;
  return 0;
};

// Descending sort functions
const descendingSort = (property) => (a, b) => {
  if (a[property] > b[property]) return -1;
  if (a[property] < b[property]) return 1;
  return 0;
};

// Sort by username
const ascendingSortByUsername = ascendingSort("username");
const descendingSortByUsername = descendingSort("username");

// Sort by fname
const ascendingSortByFname = ascendingSort("fname");
const descendingSortByFname = descendingSort("fname");

// Sort by lname
const ascendingSortByLname = ascendingSort("lname");
const descendingSortByLname = descendingSort("lname");

// Sort by position_sh_name
const ascendingSortByPosition = ascendingSort("position_sh_name");
const descendingSortByPosition = descendingSort("position_sh_name");

// Sort by email
const ascendingSortByEmail = ascendingSort("email");
const descendingSortByEmail = descendingSort("email");

// Sort by dept_name
const ascendingSortByDept = ascendingSort("dept_name");
const descendingSortByDept = descendingSort("dept_name");

// Sort by section_name
const ascendingSortBySection = ascendingSort("section_name");
const descendingSortBySection = descendingSort("section_name");

// Sort by reg_date
const ascendingSortByRegDate = ascendingSort("reg_date");
const descendingSortByRegDate = descendingSort("reg_date");

// Sort by emp_id
const ascendingSortByEmpId = ascendingSort("emp_id");
const descendingSortByEmpId = descendingSort("emp_id");

// Apply sorting to userList
const ascendingUserListByUsername = [...userList].sort(ascendingSortByUsername);
const descendingUserListByUsername = [...userList].sort(
  descendingSortByUsername
);

const ascendingUserListByFname = [...userList].sort(ascendingSortByFname);
const descendingUserListByFname = [...userList].sort(descendingSortByFname);

const ascendingUserListByLname = [...userList].sort(ascendingSortByLname);
const descendingUserListByLname = [...userList].sort(descendingSortByLname);

const ascendingUserListByPosition = [...userList].sort(ascendingSortByPosition);
const descendingUserListByPosition = [...userList].sort(
  descendingSortByPosition
);

const ascendingUserListByEmail = [...userList].sort(ascendingSortByEmail);
const descendingUserListByEmail = [...userList].sort(descendingSortByEmail);

const ascendingUserListByDept = [...userList].sort(ascendingSortByDept);
const descendingUserListByDept = [...userList].sort(descendingSortByDept);

const ascendingUserListBySection = [...userList].sort(ascendingSortBySection);
const descendingUserListBySection = [...userList].sort(descendingSortBySection);

const ascendingUserListByRegDate = [...userList].sort(ascendingSortByRegDate);
const descendingUserListByRegDate = [...userList].sort(descendingSortByRegDate);

const ascendingUserListByEmpId = [...userList].sort(ascendingSortByEmpId);
const descendingUserListByEmpId = [...userList].sort(descendingSortByEmpId);

// Render ascending sorted user list by username
ascendingUserListByUsername.map((user: userData, idx) => {
  // Your mapping logic here
});

// Render descending sorted user list by username
descendingUserListByUsername.map((user: userData, idx) => {
  // Your mapping logic here
});

// Render ascending sorted user list by other properties as needed
// descendingUserListBy... for descending sorting
