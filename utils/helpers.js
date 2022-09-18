const studentData = require('../seeds/studentData.json');

const generateGroups = (students, groupSize) => {
  const numberOfGroups = Math.floor(students.length / groupSize);
  // console.log('numberOfGroups', numberOfGroups);

  // const shuffledArray = students.sort(() => Math.random() - 0.5);
  const shuffledArray = students.sort((a, b) =>
    a.nationality > b.nationality ? 1 : -1
  );
  // console.log(shuffledArray);
  // const sortedArray = studentData.sort((a, b) => {
  //   return a.nationality > b.nationality ? 1 : -1;
  // });

  const distributedGroups = shuffledArray.map((student, index) => {
    // console.log('index', index);
    // console.log('index % numberOfGroups', index % numberOfGroups);
    return {
      ...student,
      group_number: (index % numberOfGroups) + 1,
    };
  });

  // console.log(distributedGroups);
  return distributedGroups;
};

module.exports = generateGroups;
