---
id: post-transaction
title: Post Transaction Endpoint
---

The **Post Transaction endpoint** lets you create a new post in the system.  
While JSONPlaceholder is a fake API and doesn’t save the data permanently, it mimics the behavior of a real-world **POST request**, where you send data (title, body, userId) and get back a response with a new `id`.  

This is a great way to practice **sending data to an API** and working with request headers and JSON payloads.  

POST https://jsonplaceholder.typicode.com/posts


## Request Body  

| Field     | Type   | Required | Description                       |
|-----------|--------|----------|-----------------------------------|
| `title`   | string | ✅ Yes   | The title of the post.            |
| `body`    | string | ✅ Yes   | The content/body of the post.     |
| `userId`  | number | ✅ Yes   | The ID of the user creating it.   |

:::tip Quick Tip  
Always include `Content-type: application/json` in the headers when sending POST requests.  
:::

---

## Example Request (JavaScript fetch)
```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    title: 'Hello World',
    body: 'This is my first test post.',
    userId: 1
  }),
})
  .then(response => response.json())
  .then(data => console.log(data));
```
## Example Response 
```json
{
  "title": "Hello World",
  "body": "This is my first test post.",
  "userId": 1,
  "id": 101
}
```

:::info Note
The id value in the response (like 101) is simulated.
It won’t persist if you try to fetch it again — this is just for learning & testing.
:::

<p align="center">
  <img src="/img/post-example.jpg" alt="Postman POST response example" width="600"/>
</p>