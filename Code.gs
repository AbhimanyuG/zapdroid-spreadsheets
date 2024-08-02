/**
 * Sends a POST request to httpbin.org with a prompt and returns the reverse of the prompt from the response.
 *
 * @param {string} prompt The prompt to send in the POST request.
 * @return The reverse of the prompt from the response.
 * @customfunction
 */
function ZAP(prompt) {
  // Fixed URL for POST request
  var URL = "https://httpbin.org/post";

  // Show "busy..." while processing
  //var cell = SpreadsheetApp.getActiveSpreadsheet().getActiveCell();
  //cell.setValue("busy...");
  
  try {
    // Prepare the payload
    var payload = JSON.stringify({ prompt: prompt });
    
    // Set up the request options
    var options = {
      'method' : 'post',
      'contentType': 'application/json',
      'payload' : payload
    };
    
    // Make the HTTP request
    var response = UrlFetchApp.fetch(URL, options);
    var json = JSON.parse(response.getContentText());
    
    // Get the prompt from the response and reverse it
    var returnedPrompt = json.json.prompt;
    var reversedPrompt = returnedPrompt.split('').reverse().join('');
    
    return reversedPrompt;
  } catch (error) {
    // If there's an error, return the error message
    return "Error: " + error.toString();
  }
}

/**
 * Creates a custom menu in Google Sheets.
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Zapdroid')
    .addItem('Authorize add-on!', 'showAuthorizationDialog')
    .addToUi();
}

/**
 * Shows an authorization dialog.
 */
function showAuthorizationDialog() {
  var ui = SpreadsheetApp.getUi();
  ui.alert('Authorization Required', 'Please authorize this add-on to use external services.', ui.ButtonSet.OK);
  
  // Attempt to make a UrlFetchApp call to trigger authorization
  try {
    UrlFetchApp.fetch('https://httpbin.org/get');
    ui.alert('Authorization Successful', 'The add-on has been successfully authorized.', ui.ButtonSet.OK);
  } catch (e) {
    ui.alert('Authorization Failed', 'Failed to authorize the add-on. Please try again.', ui.ButtonSet.OK);
  }
}
