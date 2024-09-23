#PASSWORD CRACKER PROJECT


##1. Project Overview

In this project, we built a password cracker that attempts to find a given password by trying various commonly used passwords. It compares the user-provided password with a predefined list (wordlist) of common passwords to see if there is a match. This simulates how brute-force attacks work to crack weak passwords.

The password cracker works by:

	•	Asking the user to input a password they want to test.

	•	Checking the wordlist to see if that password exists.

	•	If the password is found, the program informs the user.

	•	If the password is not found, it returns a message indicating the same.

1.1. Objective:

The purpose of this project is to:
	•	Simulate a brute-force attack on passwords.
	•	Highlight the importance of using stronger, less predictable passwords.
	•	Understand how weak passwords can be easily compromised.

1.2 Technologies Used:
	•	Python 3.12 (IDLE)
	•	Text editor to create the wordlist (passwords.txt)
	•	A simple algorithm to compare passwords with a wordlist.

1.3. Code Explanation:
	•	The script imports the wordlist from a text file and loops through each password.
	•	The user enters a password, and the program iterates through the list, comparing each word in the list with the entered password.
	•	If the password is found in the list, the program displays a success message.
	•	If it’s not found, the user is prompted to try another password, without needing to restart the program.

##2. Code Snippets

Below are the key code snippets for the Password Cracker Project.

2.1. Initial Code:

# Function to encrypt the message
def encrypt(message, shift):
    encrypted_message = ""
    for char in message:
        if char.isalpha():  # Check if it's a letter
            shift_char = chr((ord(char) - 65 + shift) % 26 + 65)
            encrypted_message += shift_char
        else:
            encrypted_message += char  # Keep non-letters the same
    return encrypted_message

# Function to decrypt the message
def decrypt(encrypted_message, shift):
    return encrypt(encrypted_message, -shift)  # Reverse the shift for decryption

# Input from the user
message = input("Enter a message to encrypt: ").upper()
shift = int(input("Enter the shift number (1-25): "))

# Encrypt and then decrypt the message
encrypted = encrypt(message, shift)
decrypted = decrypt(encrypted, shift)

print(f"Encrypted Message: {encrypted}")
print(f"Decrypted Message: {decrypted}")


2.2. Challenges Faced:

2.2.1. Program Restart

	•	Problem: Initially, every time a password was entered and found or not found, the program needed to be restarted.

	•	Solution: I implemented a while loop that allows the user to input multiple passwords in one session. This eliminates the need to restart the program every time a password is entered.

	•	Improvement:

	while True:
    		user_password = input("Enter the password to crack (or type 'exit' to quit): ")
    		if user_password.lower() == 'exit':
        			Break

2.2.2. Password Display Overload

	•	Problem: The program listed all passwords in the wordlist every time a password was entered, even if the password was not found.

	•	Solution: We adjusted the code to avoid listing the passwords when the user password was not found. It only shows the search attempt and gives feedback without overwhelming output.

	•	Improvements and Final Code: 
	

# Password Cracker with a Clean Output
def password_cracker(password):
    # Open the wordlist
    with open("passwords.txt", "r") as file:
        for line in file:
            word = line.strip()  # Remove extra spaces and newlines
            if word == password:
                return f"Password '{password}' found in the wordlist!"
    
    return f"Password '{password}' not found in the wordlist."

# Keep the program running to try multiple passwords
while True:
    # Ask the user to enter the password they want to crack
    password_to_crack = input("Enter the password to crack (or type 'exit' to quit): ")

    # If the user types 'exit', break the loop and quit the program
    if password_to_crack.lower() == 'exit':
        print("Exiting the program.")
        break

    # Run the password cracker
    result = password_cracker(password_to_crack)
    print(result)


##3. Testing the Password Cracker 

Before finalizing the project, I conducted multiple tests with different passwords to verify the functionality of the program. Here’s how it went:	

Test Case 1: “123456” - Found in the wordlist.

	•	Outcome: The program successfully identified “123456” as a common password, confirming its presence in the wordlist.

Test Case 2: “qwerty” - Found in the wordlist.

	•	Outcome: The password “qwerty” was found in the wordlist as expected.

Test Case 3: “QWERTY” - Not found in the wordlist.

	•	Outcome: The uppercase version of “qwerty” (“QWERTY”) was not found, as the wordlist only contained lowercase entries. This highlights the case sensitivity of the wordlist.

Test Case 4: “111111” - Found in the wordlist.

	•	Outcome: “111111” was quickly identified as one of the common passwords.

Test Case 5: “kofi8888” - Not found in the wordlist.

	•	Outcome: The custom password “kofi8888” was not found in the wordlist, as it was a unique, more complex combination not typically included in common wordlists.

Test Case 6: “password” - Found in the wordlist.

	•	Outcome: The classic weak password “password” was located in the wordlist, demonstrating how predictable and unsafe it is.

Test Case 7: “sed89Ra” - Not found in the wordlist.

	•	Outcome: “sed89Ra” was not found in the wordlist. This result shows that more complex passwords with a mix of characters are less likely to be cracked using common wordlists.

Test Case 8: “exit” - Exited the program.

	•	Outcome: The program correctly exited after typing “exit”, allowing for easy termination of the program when the user is done.

These test cases confirmed that the Password Cracker performs as expected, successfully identifying common passwords while skipping over complex or custom ones. The ability to exit the program gracefully when “exit” is typed adds a nice finishing touch to its functionality.


##4. Final Step: Improvements, Security Lessons, and Prevention Steps

4.1. Improvements in the Password Cracker:

4.1.1. Efficient Checking:

	•	By adding a loop that allows multiple password inputs without restarting, the program became more user-friendly.

	•	The program also provides clear feedback when a password is or isn’t found, without overwhelming the user with unnecessary output.

4.1.2. Cleaner Output:

	•	The adjusted code ensures that only the necessary information (whether the password is found or not) is displayed. This minimizes the clutter in the program output, improving its usability.

4.2. Security Lessons Learned:

4.2.1. Password Strength:

	•	Weak passwords like “123456” or “password” can easily be cracked using basic programs such as this one. It highlights the importance of choosing strong and unique passwords for different services.
	
4.2.2. Brute-Force Attacks:
	•	This project is a simple demonstration of brute-force attacks, where all possible password combinations or common passwords are tried to guess the correct one. It shows how weak passwords can be cracked in seconds or minutes.

4.2.3. Wordlists:

	•	Attackers use predefined wordlists containing the most common passwords. Using longer, random combinations of characters can make password-cracking attempts more difficult.

4.3. Prevention Steps:

4.3.1. Use Strong Passwords:

	•	Always create strong, complex passwords that include numbers, letters (both upper and lower case), and symbols. Avoid common passwords that can be found in wordlists.

4.3.2. Enable Two-Factor Authentication (2FA):

	•	Even if an attacker gets hold of a password, 2FA adds an extra layer of security that makes unauthorized access difficult.

4.3.3. Password Managers:

	•	Use password managers to generate and store complex passwords. This reduces the need to remember many passwords and ensures each account is secure.

4.4. Conclusion of the Project:

	•	The Password Cracker project demonstrates the vulnerabilities of weak passwords and how easily they can be cracked. It emphasizes the importance of strong password practices and additional security measures like 2FA.

By working through this project, I’ve learned how brute-force attacks work and how attackers use common wordlists to crack passwords. It also provided insight into improving basic security practices and understanding how weak passwords are a significant risk.

This concludes the Password Cracker project documentation. 


##THE END.

