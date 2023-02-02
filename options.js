var colorSelect = document.getElementById('color-select');
var saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', function() {
  chrome.storage.sync.set({ color: colorSelect.value }, function() {
    window.close();
  });
});

chrome.storage.sync.get('color', function(data) {
  colorSelect.value = data.color || 'red';
});
