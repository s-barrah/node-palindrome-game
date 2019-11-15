
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


const palindrome2 = (str) => {

  // Use the RegExp to remove non alphanumeric characters
  const regex = /[^A-Za-z0-9]/g;

  // Lowercase the string
  const lowRegStr = str.toLowerCase().replace(regex, '');

  // Get string length
  const len = lowRegStr.length;

  // Convert string into an array
  const stringArray = str.split('');

  // Find non matches
  const results = stringArray.filter((item, index) => item !== str[len - 1 - index]);

  // Empty array means all matched
  return results.length === 0;
};

const palindrome3 = (str) => {

  // replace non alphanumeric characters
  const regex = /[^A-Za-z0-9]/g;

  // Lowercase the string and use the RegExp to remove unwanted characters from it
  str = str.toLowerCase().replace(regex, '');

  // Get string length
  const len = str.length;

  // As long as the characters from each part match, the FOR loop will go on
  for (let i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false; // When the characters don't match anymore, false is returned and we exit the FOR loop
    }
  }
  // Both parts are strictly equal, it returns true => The string is a palindrome
  return true;
};

export default {
  palindrome
};
