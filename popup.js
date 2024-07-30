document.getElementById('screenshotButton').addEventListener('click', () => {
    chrome.tabs.captureVisibleTab(null, {}, (image) => {
      // Create a link element
      const link = document.createElement('a');
      link.href = image;
      link.download = 'screenshot.png';
      
      // Programmatically click the link to trigger the download
      link.click();
    });
  });
  