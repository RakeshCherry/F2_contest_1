let employees = [
    {id: 1, name: "john", age: "18", profession: "developer"},
    {id: 2, name: "jack", age: "20", profession: "developer"},
    {id: 3, name: "karen", age: "19", profession: "admin"}
  ];


//   function to print whose profession is developer using .map 
  
  function PrintDeveloperbyMap() {
    const developers = employees.map(employee => {
      if (employee.profession === "developer") {
        return employee;
      }
    });
    console.log(developers);
  }

//   function to print whose profession is developer using .ForEach 
  
  function PrintDeveloperbyForEach() {
    employees.forEach(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }

//   function to add new data to existing Array 
  
  function addData() {
    const newEmployee = {id: 4, name: "susan", age: "20", profession: "intern"};
    employees.push(newEmployee);
    console.log(newEmployee);
  }

//   function to remove the data that having profession admin 
  
  function removeAdmin() {
    employees = employees.filter(employee => employee.profession !== "admin");
    console.log(employees);
  }

//   functin to create the new another array with all different data 

  function concatenateArray() {
    const newArray = [
      {id: 4, name: "alice", age: "22", profession: "creater"},
      {id: 5, name: "bob", age: "24", profession: "manager"},
      {id: 6, name: "eve", age: "23", profession: "designer"}
    ];

    // concatenating the previous array with new array 
  
    const concatenatArray = employees.concat(newArray);
    console.log(concatenatArray);
  }
  