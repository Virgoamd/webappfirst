function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = e.parameter;

    // Agar aapko file upload handle karna hai:
    var fileData = e.postData.getDataAsString(); // Ye pura post data string hogi
    // File processing ke liye, aapko multipart parser lagana padega ya koi library use karni padegi.

    sheet.appendRow([
        new Date(), 
        data.employee, 
        data.mobile, 
        data.start_date, 
        data.end_date,
        data.duration, 
        data.email, 
        data.address,
        data.department, 
        data.reason, 
        data.type,
        fileData // yahan file data store karne ke liye
    ]);

    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}


// Web App ke liye doGet function, jo HTML file serve karega
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

// File upload function jo client se call hoga
function uploadFileToDrive(fileName, fileData) {
  try {
    // fileData: "data:application/pdf;base64,JVBERi0xLjQKJ..." ya image ke liye
    var parts = fileData.split(',');
    if (parts.length < 2) {
      throw new Error("Invalid file data.");
    }
    var base64Data = parts[1];
    var contentTypeMatch = parts[0].match(/:(.*?);/);
    if (!contentTypeMatch) {
      throw new Error("Invalid content type.");
    }
    var contentType = contentTypeMatch[1];
    
    // Base64 data decode karke blob banayein
    var decodedBytes = Utilities.base64Decode(base64Data);
    var blob = Utilities.newBlob(decodedBytes, contentType, fileName);
    
    // File ko Google Drive par create karein
    var file = DriveApp.createFile(blob);
    
    // Google Sheet (Sheet1) me file URL store karein
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Sheet1"); // zaroori: sahi sheet name ho
    var lastRow = sheet.getLastRow();
    // Maan lijiye hum file URL ko column A mein daal rahe hain
    sheet.getRange(lastRow + 1, 1).setValue(file.getUrl());
    
    // File URL return karein
    return file.getUrl();
  } catch (err) {
    return "Error: " + err.message;
  }
}
