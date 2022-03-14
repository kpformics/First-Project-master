//fake API

var faker = require("faker");

var database = { employees: [] };

for (var i = 1; i <= 50; i++) {
  database.employees.push({
    id: i,
    name: "employee" + i.toString(),
    details: faker.lorem.sentences(),
    salary: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    phone: faker.datatype.number(),
    email: "employee" + i.toString() + "@getnada.com",
    birthDate: "birthdate" + i.toString(),
    gender: i % 2 == 0 ? "male" : "female",
    city: "city" + i.toString(),
    jobTitle: "jobtitle" + i.toString(),
    employmenttype: "Employmenttype" + i.toString(),
    joiningDate: "joiningdate" + i.toString(),
    contractExpiry: "31/12/2022",
    documents: "Document" + i.toString(),
  });
}

console.log(JSON.stringify(database));
