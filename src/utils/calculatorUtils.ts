
export const calculate = (firstValue: number, secondValue: number, operation: string): number => {
  switch (operation) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '×':
      return firstValue * secondValue;
    case '÷':
      return secondValue !== 0 ? firstValue / secondValue : 0;
    default:
      return secondValue;
  }
};

export const formatDisplay = (value: number): string => {
  // Handle very large or very small numbers
  if (Math.abs(value) > 999999999 || (Math.abs(value) < 0.000001 && value !== 0)) {
    return value.toExponential(5);
  }
  
  // Convert to string and handle decimal places
  const stringValue = value.toString();
  
  // If the number is too long, truncate it
  if (stringValue.length > 10) {
    return parseFloat(value.toPrecision(8)).toString();
  }
  
  return stringValue;
};
