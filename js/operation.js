// 사칙연산을 수행하는 순수 함수

export default function calculateOperation(
  firstNumber,
  secondNumber,
  operator
) {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      if (secondNumber === 0) {
        throw new Error("0으로 나눌 수 없습니다.");
      }
      return firstNumber / secondNumber;
    default:
      throw new Error("유효한 연산자를 선택하세요.");
  }
}