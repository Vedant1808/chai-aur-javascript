/*
🔹 What is fetch()?
fetch() is a built-in JavaScript method used to make HTTP requests (like GET, POST, etc.) to a server.
It returns a Promise.
*/

const requestUrl = "https://api.github.com/users/hiteshchoudhary";

fetch(requestUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(typeof data); // 'object'
    console.log(data.followers); // follower count
  })
  .catch((error) => console.error("Error:", error));

/*
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Hello',
    body: 'This is a post.',
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  */
