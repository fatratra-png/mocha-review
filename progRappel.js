export function countAdult(ages) {
  let countAges = 0;
  for (let a in ages) {
    if (a >= 18) {
      countAges++;
    }
  }
  return countAges;
}

export function getIvandry(addresses) {
  let countAddr = 0;
  for (let addr in addresses) {
    if (typeof addr === "string" && addr.toLowerCase().includes("ivandry")) {
      countAddr++;
    }
  }
  return countAddr;
}

export function getRetakeExams(student) {
  if (!student || !student.grades) {
    return [];
  }
  let countRetakes = [];
  for (let ue in student.grades) {
    if (student.grades[ue] < 10) {
      countRetakes.push(ue);
    }
  }
  return countRetakes;
}
