import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
dayjs.extend(customParseFormat);

export class CreditCard {
  public cc_number = 0;

  public exp_date = "01/79";

  constructor(cc_number: number, exp_date: string) {
    this.cc_number = cc_number;
    this.exp_date = exp_date;
  }

  public checkExpirationDate = (): Boolean => {
    const end_date = dayjs(this.exp_date, "MM-YY").endOf("month");
    const today = dayjs();
    return end_date.isAfter(today);
  };

  public checkCCNumber = (): Boolean => {
    // 378282246310005
    if (!this.cc_number || this.cc_number.toString().length < 14) {
      return false;
    }

    const digits = String(this.cc_number)
      .split("")
      .reverse()
      .map((x) => parseInt(x));

    const check_sum = digits.shift();
    if (!check_sum) {
      return false;
    }

    let total = 0;
    digits.forEach((val: number, index: number) => {
      if (index % 2 === 0) {
        // if index is even
        // multiply by 2
        let sum = val * 2;
        if (sum > 9) {
          // if new value is greater than 10, subtract 9 (equivalent to adding the digits together)
          sum -= 9;
        }
        // add to running total
        total += sum;
      } else {
        total += val;
      }
    });

    // add the check digit to the running total and it should equal a number divisible by 10
    total += check_sum;
    return total % 10 === 0;
  };
}
