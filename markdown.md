# Website Usage Instructions

To use our website, follow these steps:

1. Open the website in your preferred web browser.
2. Navigate to the desired page using the navigation menu or any provided links.
3. Read the content and interact with any available features or functionalities.
4. If applicable, fill out any forms or provide necessary information.
5. Submit or save any changes made on the website.
6. Continue browsing or navigate to other pages as needed.

## Explanation of Code Implementation

### Classes

Classes are used to define objects with specific properties and behaviors. They provide a blueprint for creating multiple instances of similar objects. In our website's code, classes are utilized for organizing and encapsulating related functions and data.

### Switch Statements

Switch statements allow us to execute different blocks of code based on different conditions. They provide a more concise way to handle multiple possible values or cases.

### Try-Catch-Finally Statements

Try-catch-finally statements are used for error handling and ensuring proper execution even in the presence of exceptions. The code within the `try` block is executed, and if an error occurs, it is caught and handled in the `catch` block. The `finally` block is executed regardless of whether an error occurred or not.


## Hosting on Netlify from Visual Studio Code Terminal
To host the website on Netlify from the Visual Studio Code terminal, follow these steps:
1. create a new folder within othe root folder named deploy, copy the 3 files, (index.html, index.css and sandbox.js) into the folder called deploy. The files in this folder to Netlify. 

2. Ensure that you have a Netlify account. If not, sign up for a free account at [Netlify](https://www.netlify.com/).

3. Install the Netlify CLI by running the following command in the Visual Studio Code terminal:
npm install netlify-cli -g

4. Navigate to the website's project directory in the terminal using the `cd` command.

5.Log in to your Netlify account by running the following command and following the prompts:
netlify login

6.Next, enter the following code in your terminal:
netlify deploy

You will come acrosss a few prompts that you have to responde to, and these are the responses you should make:
What would you like to do?: Create & configure a new site
Team: <choose the default option>
Site name: Bank-Account-Management
Publish directory: deploy

Once the files have been uploaded, click on the "Website Draft URL" provided and inspect the website, everything should work well. 

7. Next, enter the following code in your terminal:
netlify deploy --prod

You will be asked for the publish directory. Use deploy. this points to the deploy folder you created earlier

The message "Deploy is live!" and your website URL would be displayed. Your site has been deployed successfully .
Copy the Website URL display and paste on your brower to visit the webdite

