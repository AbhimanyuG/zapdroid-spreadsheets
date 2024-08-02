# zapdroid-spreadsheets

With your desired Google Spreadsheet opened, go to Tools -> Script editor.
It should open an editor in a new page with a Code.gs file containing an empty function.
Remove any contents from Code.gs and save the project at File -> Save. Give any name you want.

Go to project properties and make sure to select Show "appsscript.json" manifest file in editor checkbox.

Go back to code editor, select the Code.gs file and paste the contents from the downloaded BINANCE.gs file.

Do the same for appsscript.json and optionally set your desired timezone.

Save the project again and refresh/reload your Google Spreadsheet (hit F5 on the browser).

Once reloaded, you should see a little message box (toast) at the bottom-right corner.

Go to Binance item at your spreadsheet's main menu and click on the Authorize add-on! item.

A Google's dialog should appear asking for permissions, proceed with all the steps and click Allow.
The popup will close and nothing will change on your spreadsheet yet!
Once the add-on is authorized, repeat step 5 (click Authorize add-on! again) and voila!
