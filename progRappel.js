// Compte les personnes majeures (>= 18 ans)
export function countAdult(ages) {
  return ages.filter((age) => age >= 18).length;
}

// Compte les adresses contenant 'ivandry' (insensible à la casse)
export function getIvandry(addresses) {
  return addresses.filter((addr) => addr.toLowerCase().includes("ivandry"))
    .length;
}

// Retourne les UEs avec une note < 10 (rattrapage)
export function getRetakeExams(student) {
  return Object.entries(student.grades)
    .filter(([ue, grade]) => grade < 10)
    .map(([ue]) => ue);
}
