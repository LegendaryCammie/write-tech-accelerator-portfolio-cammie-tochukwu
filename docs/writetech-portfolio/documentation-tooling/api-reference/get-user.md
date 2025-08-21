---
id: get-user 
title: Get User Endpoint
--- 

The **Get User endpoint** lets you retrieve details about a single user by their ID.  
This is often one of the first requests developers try out when exploring an API, since it helps confirm that their environment (Postman, curl, or `fetch()`) is working correctly.  

It’s also a good example of how APIs use **path parameters** (`:id`) to fetch specific records.  


---

GET https://jsonplaceholder.typicode.com/users/{id}


## Path Parameters  

| Parameter | Type   | Required | Description                    |
|-----------|--------|----------|--------------------------------|
| `id`      | number | ✅ Yes   | The ID of the user to retrieve |

---

## Example Request (JavaScript fetch)
```javascript
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(data => console.log(data));
``` 

## Example Response 
```json 
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874"
  }
}
```

:::tip Quick Tip
If you don’t know which IDs exist, try /users first to list them all, then pick one.
:::

<p align="center">
  <img src="/img/get-example.png" alt="Postman GET response example" width="600"/>
</p>

