# zapdroid-spreadsheets

## Setup instructions

With your desired Google Spreadsheet opened, go to Tools -> Script editor.

![image](https://github.com/user-attachments/assets/0470071c-44f4-4767-abe9-bef71d0a2fd7)

It should open an editor in a new page with a Code.gs file containing an empty function.
Remove any contents from Code.gs and save the project at File -> Save. Give any name you want.

![image](https://github.com/user-attachments/assets/8c363d58-e2ff-4e93-ab50-2c80c0ffdd41)


Go to project properties and make sure to select Show "appsscript.json" manifest file in editor checkbox.

![image](https://github.com/user-attachments/assets/50dc769a-d14a-43a1-826d-fbc28376665d)

Go back to code editor, select the Code.gs file in the directory and copy/paste the contents from Code.gs of this repo.



Do the same for appsscript.json and optionally set your desired timezone.

Save the project again and refresh/reload your Google Spreadsheet (hit F5 on the browser).

Once reloaded, you should see a navigation item "Zapdroid" 

![image](https://github.com/user-attachments/assets/4c1df057-164b-48b8-bb05-7b7e569452f6)

Go to Zapdroid at your spreadsheet's main menu and click on the Authorize add-on! item.

![image](https://github.com/user-attachments/assets/bc09d35a-bf64-4032-aaa9-83a60a2c2d77)

A Google's dialog should appear asking for permissions, proceed with all the steps and click Allow.

![image](https://github.com/user-attachments/assets/cd5c9496-05bf-4b3f-933f-8182f2743337)

![image](https://github.com/user-attachments/assets/afa5c1a8-8085-4c1e-90fc-d056829017dc)

![image](https://github.com/user-attachments/assets/d36cad07-e191-46f6-bd65-b9877b80db4a)

The popup will close and nothing will change on your spreadsheet yet!

Once the add-on is authorized, repeat step 5 (click Authorize add-on! again) and voila!

## Usage

From any cell, now you can interact with AI with '=ZAP()' function

![image](https://github.com/user-attachments/assets/94686365-dee6-4ca8-ac0c-936eadd33f4c)

Test it by prompting with "hi"

![image](https://github.com/user-attachments/assets/a6e3ccb9-9bc1-46b6-8d1a-d93f7e64432f)

It should reply like this:

![image](https://github.com/user-attachments/assets/21a903e9-af3e-4eb7-8f76-5d3cffc3c837)

In this example, we generate keywords for our site from product title

![image](https://github.com/user-attachments/assets/a8ef9729-77c0-4169-8f78-222cfa95b0bd)

All set!

![image](https://github.com/user-attachments/assets/e51047be-2189-49a0-9892-2592f4223a81)

