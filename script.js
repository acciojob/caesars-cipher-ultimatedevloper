// Define the alphabet as a constant
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Define the rot13 function
function rot13(str) {
  // Initialize an empty string for the decoded result
  let decoded = '';

  // Loop through each character of the input string
  for (let i = 0; i < str.length; i++) {
    // Get the current character
    let char = str[i];

    // Check if the character is a letter
    if (ALPHABET.includes(char)) {
      // Get the index of the character in the alphabet
      let index = ALPHABET.indexOf(char);

      // Shift the index by 13 places
      index = (index + 13) % 26;

      // Get the new character from the alphabet
      char = ALPHABET[index];
    }

    // Append the character to the decoded string
    decoded += char;
  }

  // Return the decoded string
  return decoded;
}
