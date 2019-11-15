
export const palindrome = (str) => {
  // Use the RegExp to remove non alphanumeric characters
  const regex = /[\W_]/g;
  // Lowercase the string
  const lowRegStr = str.toLowerCase().replace(regex, '');
  // reverse the string
  const reverseStr = lowRegStr.split('').reverse().join('');
  // Check if reverseStr is strictly equals to lowRegStr and return a Boolean
  return reverseStr === lowRegStr;
};

export default {
  palindrome
};
