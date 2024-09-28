# SETTING UP A VIRTUAL HOME LAB 


## 1. Project Overview


This project focuses on setting up a virtual home lab for cybersecurity and ethical hacking practice using virtual machines (VMs). The lab consists of three key operating systems: Ubuntu, Kali Linux, and Windows 11 Pro. These systems are hosted using VMware Fusion and UTM, two virtualization tools.

The process involved installing the following:


	1. Ubuntu on VMware Fusion: A stable Linux distribution that can be used for various tasks like networking and server management.

	2. Kali Linux on UTM: A security-focused Linux distribution used for penetration testing and ethical hacking.

	3. Windows 11 Pro on UTM: A widely-used operating system, which faced some challenges during installation, particularly with wireless connectivity due to the missing Spice tools package.


Challenges faced during the setup were primarily related to the Windows 11 Pro installation. Initially, the system failed to connect to any wireless networks after installation. This was due to the absence of the Spice tools package, which provides necessary drivers and network functionality. The issue was resolved by reinstalling Windows 11 and including the Spice tools package during the setup process.


The goal of this project is to provide a versatile environment for practicing cybersecurity techniques, exploring networking, and simulating real-world attack scenarios.



## 2. Installing VMware Fusion and Setting Up Ubuntu


	2.1. Installing VMware Fusion:
	
		- I downloaded VMware Fusion from the official VMware website. Once the download was complete, I opened the .dmg installer and followed the on-screen instructions to install it on my Mac.
	
		- After installation, I launched VMware Fusion from the Applications folder.


	2.2. Creating a New Virtual Machine:
	
	
		- I clicked New in VMware Fusion to start the process of creating a virtual machine (VM).
	
		- I selected the option to install the operating system from an ISO file, which I had already downloaded from the Ubuntu official website.
	
		- I chose the Ubuntu ISO file and proceeded to allocate resources to the VM:
	
			RAM: 2048 MB (2GB).
			CPU: 2 CPUs.

		These resources were sufficient for Ubuntu’s requirements.
	

	2.3. Installing Ubuntu:
	
		- After configuring the virtual machine, I powered it on, which loaded the Ubuntu ISO and started the installation process.
	
		- I followed the default installation options (language, timezone, disk partitioning, etc.) provided by the Ubuntu installer.
	
		- Once the installation was complete, I restarted the virtual machine, and Ubuntu booted successfully.
	

	2.4. Finalizing Ubuntu Setup:

		- After the installation, I set up a basic user account and performed a quick update of the system to ensure all necessary packages and dependencies were up to date.

		- With Ubuntu running smoothly inside VMware Fusion, I had successfully set up my first virtual machine for the home lab.

		- In order to access a wireless connectivity, I am required to insert a wifi network connectivity usb drive.



## 3: Installing UTM and Setting Up Kali Linux



	3.1. Installing UTM:
   		
		- After setting up Ubuntu on VMware Fusion, I proceeded to install **UTM**, another virtualization tool. UTM is an open-source alternative that supports running a variety of operating systems, including **Kali Linux**.
   		
		- I downloaded UTM from its official website and followed the installation steps, which were straightforward: opening the `.dmg` file and dragging the UTM application into the **Applications** folder.


	3.2. Downloading Kali Linux ISO:

		- Before setting up the virtual machine, I downloaded the **Kali Linux ISO** from the official Kali website.

		- The downloaded ISO was needed to install Kali Linux within UTM.


	3.3. Creating a Virtual Machine in UTM:

   		- After launching UTM, I clicked on **Create New Virtual Machine**.

   		- I selected **Linux** as the operating system type, then uploaded the **Kali Linux ISO** file.

   		- Similar to the Ubuntu setup, I allocated resources to the virtual machine:

     			- RAM: 4096 MB (4GB), given Kali's resource demands for cybersecurity tools.

	     		- CPU: 4 CPUs.

	3.4. Installing Kali Linux:

		- I started the virtual machine in UTM, which booted the Kali Linux installer from the ISO.

		- I followed the default installation options provided by the installer (choosing language, region, disk configuration, etc.).

		- After the installation was completed, Kali Linux was successfully running inside UTM.

	3.5. Finalising Kali Setup:

		- After the initial boot, I set up a **user account** and ensured that all required tools for penetration testing were installed.
		
		- I then updated the system to ensure it had the latest security patches and software updates.



## 4. Installing Windows 11 Pro in UTM and Overcoming the Wireless Network Issue



	4.1. Installing Windows 11 Pro in UTM:

		- After successfully setting up Ubuntu and Kali Linux, I proceeded to install Windows 11 Pro in UTM.

		- First, I downloaded the Windows 11 ISO from the Microsoft website.

		- Then, I launched UTM, clicked on "Create New Virtual Machine", and selected 'Windows' as the operating system type.

		- I uploaded the Windows 11 ISO file and allocated the following resources:

			- RAM: 4096 MB (4GB).
     			- CPU: 1GB Processor.

	
	4.2. Initial Installation of Windows 11 Pro:

		- I started the virtual machine, which booted from the Windows 11 ISO, and followed the on-screen instructions to install the operating system.

		- The installation went smoothly, and I was able to create a user account and finalise the basic setup.

	
	4.3. Challenge: No Wireless Network Connection:

		- After the installation was complete, I noticed that Windows 11 Pro was not able to connect to any wireless networks.

		- Upon further investigation, I realised that the "Spice tools package", which provides essential drivers for network connectivity, had not been included during the installation process. This package is required for network functionality in virtual machines running on UTM.

	
	4.4. Solution: Reinstalling Windows 11 Pro with Spice Tools:

		- To resolve the issue, I decided to reinstall Windows 11 Pro.

		- This time, during the virtual machine creation, I made sure to include the "Spice tools package". This package was available as an additional option in UTM's settings during the VM creation process.

		- After completing the installation and including Spice tools, Windows 11 Pro was now able to connect to wireless networks without any issues.

	
	4.5. Finalising Windows 11 Pro Setup:

		- With the network issue resolved, I completed the Windows 11 setup and ensured that all necessary drivers and updates were installed.

		- The virtual machine was now fully functional, with network access and all required features working properly.



## 5: Conclusion and Final Setup



	5.1. Overview of the Virtual Lab:  

		After successfully installing and configuring Ubuntu, Kali Linux, and Windows 11 Pro across VMware Fusion and UTM, I had completed the setup of my virtual home lab. Each virtual machine was fully functional, with networking, user accounts, and necessary software updates in place.

	
	5.2. Challenges and Solutions:  

		The main challenge I faced during this process was with the **Windows 11 Pro installation**, where the virtual machine couldn’t connect to any wireless networks due to the absence of the **Spice tools package**. Reinstalling Windows 11 and ensuring that the Spice tools were included resolved the issue, allowing the VM to connect to wireless networks successfully.

	
	5.3. Usage and Future Expansion:  

		The virtual home lab now serves as an environment where I can practice ethical hacking, explore networking concepts, and simulate real-world attacks for learning purposes. The Ubuntu VM can be used for general Linux tasks, while Kali Linux provides a security-focused platform for penetration testing. Windows 11 Pro allows testing on a widely-used operating system.
   

In the future, I may expand this lab by adding more virtual machines or experimenting with additional security tools and configurations.



	5.4. Conclusion:
  
		The virtual home lab setup provides a versatile environment for hands-on learning in cybersecurity, networking, and ethical hacking. By overcoming challenges such as network connectivity issues in the Windows 11 Pro installation, I was able to build a reliable system for personal and professional development in cybersecurity.



## END.


























