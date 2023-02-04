
let num1 = 400;
let num2 = 10;
const SUM = "+";
const sub = "-";
const mul = "*";
const div = "/";
const remainder = "%"
let input_op = "%";
let result = 0;

if (input_op === SUM) {
    result = num1 + num2;
    console.log(result)
} else if (input_op === sub) {
    result = num1 - num2;
    console.log(result)

} else if (input_op === mul) {
    result = num1 * num2;
    console.log(result)

} else if (input_op === div) {
    result = num1 / num2;
    console.log(result)

} else if (input_op === remainder) {
    result = num1 % num2
    console.log(result)

} else {
    console.log("invalid input please check!")
}
