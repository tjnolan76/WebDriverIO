# WebDriverIO - WebAppSecurity website testing

WebDriverIO framework setup using Page-Object Model, Node.js, WebDriverIO v6, Javascript, Mocha.

Features include:
  - Working examples of test cases, test classes, page models, libraries, and components.
  - Setup for running tests in Parallel using multiple instances of Chrome.
  - Ability to take screenshots
  
Jenkins setup:
  - Download jenkins.war from jenkins.io
  - Add to root directory of this project
  - Run java -jar jenkins.war --httpPort=8080 --enable-future-java
  - Now, go to localhost:8080 and follow the on-screen instruction to create an admin account
  - Once logged in, click 'New Item'.
  - Enter a name for the project. e.g. WebDriverIO Jenkins build.
  - Click and choose 'Freestyle project'
  - Add a description
  - Under General, select 'Advanced'
  - Select 'Use custom workspace' and enter the directory where this project is located. e.g. C:\repos\WDIO-TESTING
  - Go to 'Build' and click the 'Add build step' button.
  - Since I'm using Windows, I chose 'Execute Windows batch command'. 
    (You could choose execute shell if using other OSes.)
  - Enter command: 'npm run test' without the quotes.
  - Click Save
  - You can now select the project and click 'Build Now'.
  If everything is setup properly, the test should now be running.
