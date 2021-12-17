const { Campus, Student } = require("../models");

const seedDB = async () => {
  const dummy_campus = await Campus.create({
    name: "Hunter College",
    imageUrl: "https://s29068.pcdn.co/wp-content/uploads/hunter-campus.jpg",
    address: "695 Park Ave, New York, NY 10065",
    description: "This is a school in NYC.",
  });
  //   const dummy_campus2 = await Campus.create({
  //     name: "Harvard",
  //     description: "This is a school in MA.",
  //   });

  const dummy_student = await Student.create({
    firstname: "Joe",
    lastname: "Shmo",
    email: "abc@mail.com",
    imageUrl:
      "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
    gpa: 3.2,
  });

  await dummy_student.setCampus(dummy_campus);
};

module.exports = seedDB;
