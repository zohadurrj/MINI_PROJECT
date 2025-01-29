document.getElementById('generateForm').addEventListener('click', function () {
  const itemCount = parseInt(document.getElementById('itemCount').value);
  const dynamicForms = document.getElementById('dynamicForms');
  const uploadForm = document.getElementById('uploadForm');

  dynamicForms.innerHTML = '';

  if (!itemCount || itemCount <= 0) {
    alert('Please enter a valid number of items.');
    return;
  }

  for (let i = 1; i <= itemCount; i++) {
    const formGroup = document.createElement('div');
    formGroup.classList.add('form-group', 'border', 'p-3');

    formGroup.innerHTML = `
      <h5>Item ${i}</h5>
      <label for="title${i}" class="form-label">Title:</label>
      <input type="text" id="title${i}" name="title${i}" class="form-control" required>
      
      <label for="description${i}" class="form-label mt-2">Description:</label>
      <textarea id="description${i}" name="description${i}" class="form-control" rows="3" required></textarea>
      
      <label for="image${i}" class="form-label mt-2">Upload Image:</label>
      <input type="file" id="image${i}" name="image${i}" class="form-control" accept="image/*" required>
      
      <label for="music${i}" class="form-label mt-2">Upload Music:</label>
      <input type="file" id="music${i}" name="music${i}" class="form-control" accept="audio/*" required>
    `;

    dynamicForms.appendChild(formGroup);
  }

  uploadForm.style.display = 'block';
});
