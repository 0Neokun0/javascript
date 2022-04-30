var employee = {
  empname: "Nishant",
  department : "sales",
  details : function() {
      return this.empname +
          " works with Department " +
          this.department;
  }
};
console.log(employee.details());