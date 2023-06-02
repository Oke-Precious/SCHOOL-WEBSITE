// const url = 'https://www.google.com/recaptcha/api/siteverify'; // Replace with the actual API endpoint URL
const requestData = {
    name: 'John Doe',
    email: 'johndoe@example.com'
  };
  
  fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  })
    .then(response => response.json())
    .then(data => {
      // Handle the API response data
      console.log(data);
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
  