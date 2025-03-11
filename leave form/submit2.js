document.getElementById("uploadForm").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    let formData = new FormData(this);
    let fileInput = document.getElementById("fileInput");
    
    if (fileInput.files.length > 0) {
      let file = fileInput.files[0];
      let reader = new FileReader();
      
      reader.onload = async function () {
        let base64String = reader.result.split(",")[1];
  
        formData.append("fileData", base64String);
        formData.append("fileName", file.name);
        formData.append("fileType", file.type);
  
        await sendData(formData);
      };
  
      reader.readAsDataURL(file);
    } else {
      await sendData(formData);
    }
  });
  
  async function sendData(formData) {
    let url = "https://script.google.com/macros/s/AKfycbytU1dZ07guqM9fQXPBwer856Hr4ETobltIPl1mU6cFXf-u2fSiTKNTsZIor9p0yEpX/exec"; // Apps Script URL 
  
    let response = await fetch(url, {
      method: "POST",
      body: formData,
      
      
    });
  
    if (response.ok) {
      
      alert("Your leave Form hass bheen Submitted Successfully! ");
      document.getElementById("uploadForm").reset();
      
    } else {
      alert("Error submitting form.");
    }
  }
 