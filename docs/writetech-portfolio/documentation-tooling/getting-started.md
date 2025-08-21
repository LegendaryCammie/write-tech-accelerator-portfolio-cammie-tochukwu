---
id: getting-started
title: Getting Started
---

# Getting Started with JSONPlaceholder

JSONPlaceholder is a free, online REST API that you can use for prototyping, testing, and learning how to work with APIs.  It simulates common resources like **users, posts, comments, photos, and todos** without the need to set up your own backend.
  

This improved guide is designed to be beginner-friendly with **clear steps, diagrams, and examples**.

---

## 📑 Table of Contents
- [Prerequisites](#-prerequisites)
- [Base URL](#-base-url)
- [First Request — Fetch Posts](#-first-request--fetch-posts)
- [Fetch a Single User](#-fetch-a-single-user)
- [Creating Data (POST)](#-creating-data-post)
- [Deleting Data](#-deleting-data)
- [Summary](#-summary)

---

## 🔧 Prerequisites

Before you start, make sure you have the following:

- **Internet connection** 🌍  
- A tool to test API calls:
  - [Postman](https://www.postman.com/downloads/)  
  - [cURL](https://curl.se/) (comes preinstalled on most systems)  
  - Or simply your browser!  

:::tip
If you’re new, **Postman** is the easiest way to start experimenting with API requests.  
:::
<p align="center">
 <img src="/img/postman-interface.gif" alt="Postman Interface" width="500"/>
</p>

---


##  Base URL

All requests start from this base URL:

https://jsonplaceholder.typicode.com

Example:  
- `GET /posts` → `https://jsonplaceholder.typicode.com/posts`  
- `DELETE /posts/1` → `https://jsonplaceholder.typicode.com/posts/1`  

---

## How to Fetch Data (GET)

The `GET` method lets you retrieve data from the API. For example, fetching posts:

```bash
GET https://jsonplaceholder.typicode.com/posts
```
You can also fetch a single resource:

```bash
GET https://jsonplaceholder.typicode.com/posts/1
```
---
## How to Create Data (POST)

The POST method allows you to add a new resource.
Example: creating a new post:

```bash
POST https://jsonplaceholder.typicode.com/posts
```

Request body (JSON):

```bash
{
  "title": "Hello JSONPlaceholder",
  "body": "This is my first test post!",
  "userId": 1
}
```

Visual Example
Here’s what the response looks like in Postman when you send a POST request:

<p align="center">
  <img src="/img/successful-post-request.jpg" alt="Postman POST response example" width="600"/>
</p>
---

## How to Remove Data (DELETE)

The DELETE method removes a resource.
For example, deleting post with id=1:

```bash
DELETE https://jsonplaceholder.typicode.com/posts/1
```

<p align="center">
  <img src="/img/delete-request.jpg" alt="Delete request" width="600"/>
</p>

Even though you get a success response, no real data is deleted.
JSONPlaceholder always fakes the deletion so you can practice safely.

---

## Next Steps
Now that you know how to:
- Fetch data (GET)
- Create data (POST)
- Remove data (DELETE)

👉 You’re ready to dive into the [API Reference](/docs/writetech-portfolio/documentation-tooling/api-reference/get-user.md), where we’ll go endpoint-by-endpoint.





