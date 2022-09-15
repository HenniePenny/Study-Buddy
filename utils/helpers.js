const generateGroups = (students, groupSize) => {
  const numberOfGroups = Math.floor(student.length / groupSize);
  const result = students.map((student, index) => {
    return {
      ...student,
      group_number: (index % numberOfGroups) + 1,
    };
  });

  console.log(result);
  return result;
};
