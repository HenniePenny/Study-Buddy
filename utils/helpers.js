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

  const gender_counter = {};
  // populate group numbers with their gender count
  distributedGroups.forEach((el) => {
    if (gender_counter[el.group_number]) {
      if (gender_counter[el.group_number][el.gender]) {
        gender_counter[el.group_number][el.gender]++;
      } else {
        gender_counter[el.group_number][el.gender] = 1;
      }
    } else {
      gender_counter[el.group_number] = { [el.gender]: 1 };
    }
  });

  const halfGroupSize = groupSize / 2;
  Object.keys(gender_counter).forEach((group) => {
    if (gender_counter[group]['MALE'] === groupSize) {
      console.log('All male', group);
    }
    if (gender_counter[group]['FEMALE'] === groupSize) {
      console.log('All female', group);
    }
    if (gender_counter[group]['OTHER'] === groupSize) {
      console.log('All other', group);
    }
  });

  // console.log(distributedGroups);
  return distributedGroups;
};

module.exports = generateGroups;
