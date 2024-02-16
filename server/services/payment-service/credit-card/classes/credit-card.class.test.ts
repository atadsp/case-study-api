import {CreditCard} from "./credit-card.class";

describe("Test Credit Card Class", () => {

  test("Construct CC Class:", async () => {
    const newCard = new CreditCard(378282246310005, "01/25")
    expect(newCard).toHaveProperty("cc_number");
    expect(newCard.cc_number).toEqual(378282246310005);
    expect(newCard).toHaveProperty("exp_date");
    expect(newCard.exp_date).toEqual("01/25");
  });

  test("Expdate test valid date:", async () => {
    const newCard = new CreditCard(378282246310005, "01/25")
    const validExpDate = newCard.checkExpirationDate()
    expect(validExpDate).toBe(true);
  });
  test("Expdate test invalid date:", async () => {
    const newCard = new CreditCard(378282246310005, "01/79")
    const validExpDate = newCard.checkExpirationDate()
    expect(validExpDate).toBe(false);
  });

  test("test valid number American Express 1:", async () => {
    const newCard = new CreditCard(378282246310005, "01/25")
    const validExpDate = newCard.checkCCNumber()
    expect(validExpDate).toBe(true);
  });
  test("test valid number American Express 2:", async () => {
    const newCard = new CreditCard(371449635398431, "01/25")
    const validExpDate = newCard.checkCCNumber()
    expect(validExpDate).toBe(true);
  });
  test("test valid number Diners Club:", async () => {
    const newCard = new CreditCard(38520000023237, "01/25")
    const validExpDate = newCard.checkCCNumber()
    expect(validExpDate).toBe(true);
  });
  test("test valid number Discover 1:", async () => {
    const newCard = new CreditCard(6011111111111117, "01/25")
    const validExpDate = newCard.checkCCNumber()
    expect(validExpDate).toBe(true);
  });
  test("test valid number Discover 2:", async () => {
    const newCard = new CreditCard(6011000990139424, "01/25")
    const validExpDate = newCard.checkCCNumber()
    expect(validExpDate).toBe(true);
  });
  test("test valid number MasterCard:", async () => {
    const newCard = new CreditCard(5555555555554444, "01/25")
    const validExpDate = newCard.checkCCNumber()
    expect(validExpDate).toBe(true);
  });
  test("test valid number Visa:", async () => {
    const newCard = new CreditCard(4012888888881881, "01/25")
    const validExpDate = newCard.checkCCNumber()
    expect(validExpDate).toBe(true);
  });

  test("test invalid number:", async () => {
    const newCard = new CreditCard(4012888888881882, "01/25")
    const validExpDate = newCard.checkCCNumber()
    expect(validExpDate).toBe(false);
  });

});
