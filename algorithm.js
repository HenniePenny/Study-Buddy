// const input = [
//   {
//     firstName: 'Artemis',
//     lastName: 'Smith',
//     gender: 'FEMALE',
//     nationality: 'Greek',
//     cohort_id: '1',
//   },
//   {
//     firstName: 'Hermes',
//     lastName: 'Gordon',
//     gender: 'MALE',
//     nationality: 'American',
//     cohort_id: '1',
//   },
//   {
//     firstName: 'Oedipus',
//     lastName: 'Dale',
//     gender: 'MALE',
//     nationality: 'German',
//     cohort_id: '1',
//   },
// ];

// const output2 = [
//   {
//     firstName: 'Artemis',
//     lastName: 'Smith',
//     gender: 'FEMALE',
//     nationality: 'Greek',
//     cohort_id: '1',
//     group_number: '1',
//   },
//   {
//     firstName: 'Hermes',
//     lastName: 'Gordon',
//     gender: 'MALE',
//     nationality: 'American',
//     cohort_id: '1',
//     group_number: '2',
//   },
//   {
//     firstName: 'Oedipus',
//     lastName: 'Dale',
//     gender: 'MALE',
//     nationality: 'German',
//     cohort_id: '1',
//     group_number: '3',
//   },
// ];

const input = [
  {
    firstName: 'Artemis',
    lastName: 'Smith',
    gender: 'FEMALE',
    nationality: 'Greek',
    cohort_id: '1',
  },
  {
    firstName: 'Hermes',
    lastName: 'Gordon',
    gender: 'MALE',
    nationality: 'American',
    cohort_id: '1',
  },
  {
    firstName: 'Oedipus',
    lastName: 'Dale',
    gender: 'MALE',
    nationality: 'German',
    cohort_id: '1',
  },
];
const output = input.map((student) => {
  return {
    ...student,
    group_number: 1 % 6,
  };
});

console.log(output);

//   const output = input.map((student) => {
//     return {
//       ...student,
//       group_number: 1 % 6,
//     };
//   });
