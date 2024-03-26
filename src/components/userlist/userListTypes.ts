export type userData = {
  id: number;
  fname: string;
  lname: string;
  email: string;
  dept_name: string;
  position_sh_name: string;
  section_name: string;
  username: string;
  reg_date: string;
  emp_id: number;


};

  //raw data for table head
  export const thData = [
    "Username",
    "First Name",
    "Last Name",
    "Position",
    "Email",
    "Business Unit",
    "Department",
    "Created",
    "Actions",
  ];

  export type userListById = {
     
      emp_id: "",
      username: "",
      password: "",
      confirm_password: "",
      current_password: "",
      new_password: "",
      confirm_new_password: "",
      fname: "",
      mname: "",
      lname: "",
      position_name: "",
      email: "",
      title: "",
      section_name: "",
      dept_name: "",
      position_id: 0,
      dept_id: 0,
      section_id: 0,
      status_code: "",
      img_src: "",
    
  }
