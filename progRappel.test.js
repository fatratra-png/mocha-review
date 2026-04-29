import { expect } from "chai";
import { countAdult, getIvandry, getRetakeExams } from "./progRappel.js";
import { describe } from "mocha";

describe("countAdult", () => {
  it("should return the count of ages 18 or above", () => {
    const ages = [15, 18, 22, 17, 30];
    const result = countAdult(ages);
    expect(result).to.equal(3);
  });

  it("should return 0 if no ages are 18 or above", () => {
    const ages = [10, 12, 15];
    const result = countAdult(ages);
    expect(result).to.equal(0);
  });
});

describe("getIvandry", () => {
  it("should return the count of addresses containing 'ivandry'", () => {
    const addresses = [
      "Logt 18 Analamahitsy",
      "HEI Ivandry",
      "Tennis Ivandry",
      "La City Ivandry",
      "Analakely",
    ];
    const result = getIvandry(addresses);
    expect(result).to.equal(3);
  });

  it("should return 0 if no addresses contain 'ivandry'", () => {
    const addresses = ["123 Main Street", "456 Elm Street"];
    const result = getIvandry(addresses);
    expect(result).to.equal(0);
  });
});

describe("getRetakeExams", () => {
  it("should return the list of UEs that require retake exams", () => {
    const student = {
      std: "STD26001",
      firstName: "John",
      lastName: "Doe",
      grades: {
        WEB1: 20,
        PROG1: 17,
      },
    };
    const result = getRetakeExams(student);
    expect(result).to.deep.equal([]); // ✅ deep.equal pour comparer les tableaux par valeur
  });

  it("should return UEs with grade below 10", () => {
    const student = {
      std: "STD26002",
      firstName: "Jane",
      lastName: "Smith",
      grades: {
        WEB1: 8,
        PROG1: 15,
        THEORIE1: 5,
      },
    };
    const result = getRetakeExams(student);
    expect(result).to.deep.equal(["WEB1", "THEORIE1"]);
  });
});
