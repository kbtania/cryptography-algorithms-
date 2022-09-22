## Implementation of basic cryptography algorithms

### Vigenere cipher

Vigenere Cipher is a method of encrypting alphabetic text. It uses a simple form of polyalphabetic substitution. A polyalphabetic cipher is any cipher based on substitution, using multiple substitution alphabets.
Decryption is performed by going to the row in the table corresponding to the key, finding the position of the ciphertext letter in this row, and then using the column’s label as the plaintext.

### Caesar cipher 

To cipher a given text we need an integer value, known as a shift which indicates the number of positions each letter of the text has been moved down. 
The encryption can be represented using modular arithmetic by first transforming the letters into numbers, according to the scheme, A = 0, B = 1,…, Z = 25. 

- Traverse the given text one character at a time.
- For each character, transform the given character as per the rule, depending on whether we’re encrypting or decrypting the text.
- Return the new string generated.


![alt text](https://media.geeksforgeeks.org/wp-content/uploads/ceaserCipher.png)
