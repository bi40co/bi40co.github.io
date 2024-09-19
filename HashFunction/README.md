#HASH FUNCTION PROJECT

##1. Project Overview

In this project, I developed a hash function program that allows the user to input any message and choose between three popular hash algorithms: MD5, SHA-1, and SHA-256. The program generates the corresponding hash for the input message based on the user’s selected algorithm.

The main features of this project include:

	•	Taking a user’s input (message).

	•	Giving the user a choice between MD5, SHA-1, and SHA-256 hash algorithms.

	•	Generating the hash value for the selected algorithm.

	•	Allowing multiple runs, so the user can hash several messages without restarting the program.


##2. Setting Up the Environment

To build the hash function project, I first ensured that my development environment was ready. 

Here’s how I did it:

	2.1. Installed Python:

	•	I already had Python installed.

	2.2. Opened IDLE:

	•	I used Python’s built-in IDLE editor to write the code. I opened IDLE and created a new file by selecting File > New File.

	•	I saved the file as hash_function.py.

This setup allowed me to start writing and testing the hash function code.


##3. Writing the Code for the Hash Function

After setting up the environment, I started writing the code to create the hash function. Here are the key steps I followed:

	3.1. Imported the Hashlib Library:

	•	I used Python’s hashlib library, which contains the built-in hash algorithms. This library allows us to easily generate hashes for any input:
		
		import hashlib

	3.2. Created a Loop to Continuously Accept Input:

	•	I used a while loop so that the program could keep running, allowing the user to hash multiple messages without needing to restart the program:

			while True:
				message = input("Enter a message to hash (or type 'exit' to quit): ")
    				if message.lower() == 'exit':
          					break
	
	3.3. Asked the User to Choose a Hash Algorithm:

	•	The program gives the user the option to choose between MD5, SHA-1, or SHA-256:
		
			print("Choose a hashing algorithm:")
			print("1. MD5")
			print("2. SHA-1")
			print("3. SHA-256")

			choice = input("Enter the number of the algorithm (1/2/3): ")
	
	3.4. Generated the Hash Based on User’s Choice:

	•	The program checks the user’s choice and generates the hash using the appropriate algorithm. It converts the input message to bytes (using .encode()) and then computes the hash:

			if choice == '1':
    				hash_object = hashlib.md5(message.encode())
    				hash_name = "MD5"
			elif choice == '2':
    				hash_object = hashlib.sha1(message.encode())
   				hash_name = "SHA-1"
			elif choice == '3':
    				hash_object = hashlib.sha256(message.encode())
    				hash_name = "SHA-256"
			else:
   				print("Invalid choice!")
   				continue

	3.5. Displayed the Resulting Hash:

	•	Once the hash was generated, the program printed the result in a readable hexadecimal format using .hexdigest():

			hash_value = hash_object.hexdigest()
			print(f"{hash_name} Hash: {hash_value}")



##4. Testing the Hash Function

After writing the core code, I tested the program to ensure it worked properly with different inputs and hash algorithms. Here’s how I tested it:

	4.1. Running the Program:

	•	I ran the program in IDLE by pressing F5 or selecting Run > Run Module from the menu.

	•	The program prompted me to enter a message to hash and then asked me to select a hashing algorithm.

	4.2. Tested with Different Inputs:

	•	I entered the word "Kofi" and tested all three hashing algorithms:

	•	MD5: Produced the hash: e84bd6fbc0b62bf0df10b7d25b32e310

	•	SHA-1: Produced the hash: 53a846ed832efe58941e19c150eca31437b1380c.

	•	SHA-256: Produced the hash: e30b018da6f541141701cc2499f098fa4d72c172afe590e22a3add60f36af1f9

	4.3. Testing Different Messages:

	•	I tested the program with various messages, including sentences, numbers, and special characters, to ensure it worked for any type of input.

	•	For example, entering the message "Hello, World!" with a shift of 3 in SHA-256 resulted in:
 		
		SHA-256 Hash:        dffd6021bb2bd5b0af676290809ec3a53191dd81c7f70a4b28688a362182986f


            4.4. Multiple Runs Without Restarting:

	•	Thanks to the while loop, I could hash multiple messages by simply entering a new message each time. The program only exited when I typed “exit.”

These tests confirmed that the program worked as expected, generating correct and different hash values based on the chosen algorithm.


##5: Ethical Considerations and Practical Applications

When building a hash function project, it’s important to understand the ethical considerations and practical uses of hashing. Here’s how I thought about these topics:

	5.1. Ethical Considerations:

	•	Data Integrity: Hash functions are often used to verify data integrity, ensuring that information (like files or passwords) hasn’t been tampered with. However, they should be used responsibly, particularly when dealing with sensitive 		data.

	•	Security: While hash functions like MD5 and SHA-1 can generate hashes, they are no longer considered secure for protecting sensitive information. More modern algorithms, like SHA-256, should be used in real-world applications.

	•	Respecting Privacy: When dealing with any sort of encryption or hashing, it’s important to respect people’s privacy and not misuse these tools to access or manipulate sensitive data without permission.

	5.2. Practical Applications:

	•	Password Storage: Websites and applications typically store passwords in hashed form. When a user logs in, the entered password is hashed and compared to the stored hash to verify identity without ever storing the password in plain 		text.

	•	File Integrity Checking: Hash functions can be used to check if a file has been modified. If the hash of the file changes, it means the file’s contents have been altered.

	•	Digital Signatures: In cryptography, hashing is used in combination with encryption to create digital signatures, ensuring that data has not been altered in transmission.

These considerations show the wide range of applications hash functions have, as well as the responsibilities that come with using them.



#THE END.
