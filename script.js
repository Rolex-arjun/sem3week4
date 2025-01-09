const API_URL = 'http://localhost:5000/api/images';

document.getElementById('generate-btn').addEventListener('click', async () => {
  const prompt = document.getElementById('prompt').value;

  if (!prompt) {
    alert('Please enter a prompt!');
    return;
  }

  try {
    // Send prompt to backend
    const response = await fetch(`${API_URL}/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    // Display the generated image
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = `<img src="${data.imageUrl}" alt="Generated Image" />`;
  } catch (error) {
    console.error('Error:', error);
  }
});
