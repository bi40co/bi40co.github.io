##PACKET SNIFFING PROJECT

#1. Project Overview
In this project, I developed a Packet Sniffing program using Python and the Scapy library. The program captures and displays network packets as they are sent and received on my network. This project helped me understand how data travels over a network and how packet sniffing can be used for network monitoring and troubleshooting.
	Key Features:
	•	Capture and display network packets in real time.
	•	Display detailed information about each packet, such as source and destination IP addresses, port numbers, and raw data.
	•	Ability to modify the program to capture specific types of packets or continuously sniff packets.

#2. Setting Up the Environment
Before starting the project, I needed to set up the environment to run a packet-sniffing program.
	2.1. Python Installation:
	•	I already had Python installed, so I moved straight to installing the necessary library for packet sniffing.
	2.2. Installing Scapy:
	•	Scapy is the Python library I used to capture and analyze network packets. To install Scapy, I needed to use pip, Python's package manager.

	•	Challenge: When I tried to install Scapy using pip, I received an error: zsh: command not found: pip. This meant that my system did not recognize the pip command.

	•	Solution: I resolved this by running python3 -m ensurepip --upgrade, which installed pip. Then I used pip3 install scapy to successfully install the Scapy library.
	2.3. Creating the Python Script:
	•	After Scapy was installed, I opened IDLE to create a new Python file. I saved the file as packet_sniffer.py and was ready to start writing the code.

#3. Writing the Packet Sniffing Code
Once the environment was set up, I began writing the code for the packet-sniffing program using the Scapy library.
	3.1. Importing Scapy:
		I started by importing the sniff function from Scapy:	from scapy.all import sniff
	3.2. Creating a Callback Function:

	•	I defined a callback function called packet_callback to handle each packet that the program captures. This function prints detailed information about each packet using the .show() method:		def packet_callback(packet):
    		print(packet.show())  # Print packet details
	3.3. Starting Packet Sniffing:
	•	I used Scapy’s sniff() function to start capturing packets. I specified that the program should capture only 10 packets for testing purposes:		sniff(prn=packet_callback, count=10)
	•	Challenge: Initially, I had some confusion about where to write the code, and I mistakenly tried running the from scapy.all import sniff command directly in the terminal. This led to an error message: zsh: command not found: from.
	•	Solution: I realized that the code needed to be written in a Python file and run using IDLE or from the terminal as a script. Once I did that, everything worked as expected.

	3.4. Running the Code:
	•	I ran the script in IDLE by pressing F5, and the program started capturing and displaying packets in real time. Each packet's source, destination, protocol, and raw data were displayed in the output window.

#4. Running the Caesar Cipher.

After writing the packet-sniffing code, I tested the program to see if it could capture network packets and display their details.

	4.1. Running the Program:

	•	I ran the packet_sniffer.py file using IDLE by pressing F5, and the program began capturing packets on my network. Each packet was printed with detailed information such as the source and destination IP addresses, protocol, and raw data.

	4.2. Understanding the Output:

	•	The program printed each packet it captured. The output included:
	◦	Source (src): The device sending the packet.
	◦	Destination (dst): The device receiving the packet.
	◦	Protocol: The type of protocol being used (e.g., TCP, UDP).
	◦	Raw Data: The actual data being transmitted (sometimes encrypted or encoded).

	•	Each packet looked like a block of text with different layers of information, showing how data moves across the network.


	4.3. Stopping the Program:
	•	Since the program was set to capture 10 packets, it stopped automatically after reaching that limit. However, if I wanted to stop the program earlier or if it was running continuously, I used the Ctrl + C command to interrupt it.

	•	Challenge: After pressing Ctrl + C, I saw a message that said “KeyboardInterrupt.” At first, I wasn’t sure what it meant.

	•	Solution: I learned that this is Python’s way of saying that the program was stopped by the user, which is exactly what I wanted to happen.

#5. Challenges and How I Overcame Them.

Throughout the project, I faced a few challenges, but I was able to overcome them with persistence and problem-solving. Here’s a summary of the main challenges and how I addressed them:

	5.1. Issue with pip Installation:

	•	Challenge: Initially, the terminal didn’t recognize the pip command when I tried to install Scapy. I received the error zsh: command not found: pip.

	•	Solution: To fix this, I used the command python3 -m ensurepip --upgrade, which installed pip. After that, I successfully installed Scapy by using pip3 install scapy.

	5.2. Error While Running Python Code in Terminal:

	•	Challenge: I mistakenly tried running Python import commands (from scapy.all import sniff) directly in the terminal, which resulted in an error message.

	•	Solution: I realized that I needed to write the code in a Python file, such as packet_sniffer.py, and run it in IDLE or from the terminal using python3 packet_sniffer.py. This resolved the issue, and the code executed properly.

	5.3. Understanding “KeyboardInterrupt”:

	•	Challenge: When I stopped the program with Ctrl + C, I saw the message “KeyboardInterrupt” and was initially unsure what it meant.

	•	Solution: After some clarification, I understood that “KeyboardInterrupt” simply indicates that I successfully stopped the program manually, which is a normal behavior when using Ctrl + C.

#6. Final Thoughts And Next Steps

The packet-sniffing project was a great learning experience that helped me understand how network data travels across a network and how to capture it using Python and Scapy. It provided a deeper look into how packet analyzers work, and I can now see the importance of packet sniffing for network monitoring and troubleshooting.

	6.1. Key Takeaways:

	•	Understanding Network Packets: I learned about the structure of network packets, including source and destination addresses, protocols, and raw data.

	•	Using Scapy: The Scapy library proved to be a powerful tool for capturing and analyzing network traffic.

	•	Overcoming Challenges: The project presented challenges, especially with setting up Scapy and understanding how packet sniffing works, but I was able to overcome them by researching and applying the right solutions.

	6.2. Next Steps:

	•	Advanced Filtering: I could improve the project by adding filters to capture specific types of packets, such as web traffic (HTTP) or DNS queries.

	•	Saving Packets: Another useful feature would be to save the captured packets to a file for later analysis.

	•	Continuous Packet Sniffing: I could modify the program to run continuously, capturing packets indefinitely or until manually stopped.

This project is a great starting point for deeper exploration into network security and analysis!


#THE END.

