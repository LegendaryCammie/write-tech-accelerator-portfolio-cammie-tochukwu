---
id: getting-started
title: Getting Started 
--- 


# What is Chimoney?  
Chimoney is a **payments and value-transfer platform** that lets businesses and developers send money, airtime, gift cards, and other digital assets across the globe.  
Its **API-first design** means you can integrate payouts, wallets, and global transfers directly into your product or workflow.  

:::tip
**Think of Chimoney as a bridge:** it connects different forms of value (cash, airtime, vouchers, etc.) and makes them move seamlessly across countries.
::: 

---

### Requirements
Before you begin, ensure you have the following: 
1. A Chimoney Sandbox account (sign up [here](https://sandbox.chimoney.io))
2. An **API Key** (generated after creating a test app in the Chimoney Developer Dashboard)   
3. **Postman (recommended)** or any API client   
4. Basic understanding of REST APIs (requests, headers, and responses)

:::tip
It’s best to use the **Postman Desktop Agent**, especially on **MacOS Safari users**, since browser-only mode can throw *Cloud Agent errors*.  
::: 

---

### Base URL  
All requests should be made to:  
https://api.chimoney.io/v0.2

---

### Authentication
Chimoney uses an **API Key** for authentication.

1. Go to the **Developer Dashboard**  
2. Create a **test app**  
3. Copy your generated **API Key**  

Include the key in the request header like this:
Authorization: Bearer <your_api_key>
Content-Type: application/json

:::caution
Forgetting the `Authorization` header will result in a **401 Unauthorized error**.  
Always double-check that your key is included before sending a request.
:::

---

## Sample Request (Postman / cURL)

**Postman**  
- Open Postman  
- Create a new request  
- Set the method (e.g., `POST` or `GET`)  
- Add the endpoint (see reference docs for specifics)  
- Include required headers  

Example:
POST https://api.chimoney.io/v0.2/accounts/balance
Authorization: Bearer <your_api_key>
Content-Type: application/json

**cURL Example:**
```bash
curl -X POST "https://api.chimoney.io/v0.2/accounts/balance" \
-H "Authorization: Bearer <your_api_key>" \
-H "Content-Type: application/json"
```
If you use the wrong method (like GET instead of POST), you’ll see a 405 Method Not Allowed error.
Always confirm the method type from the reference docs.

## Common Errors
| Error Code | Meaning | Fix |
|------------|---------|-----|
| 400 | Bad Request | Check your parameters or request body format|
| 401 | Unauthorized | API key missing or invalid |
| 403 | Forbidden | You don't have access to this resource |
| 404 | Not Found | Wrong endpoint URL |
| 405 | Method Not Allowed | Used GET instead of POST (or vice versa) |
| 500 | Internal Server Error | Something went wrong on Chimoney’s side |

Most errors happen because of missing headers, wrong HTTP method, or an expired API key. Start by checking those three first.

---

## Next Steps

Now that you’ve got the **basics out of the way** — API keys, headers, and requests — the next step is to see what a **real successful request and response** looks like.  

👉 Check out the **Reference Docs** where we walk through actual Chimoney endpoints (like checking your balance or sending a transfer), with sample requests and JSON responses:

- [View API Reference →](./reference/get-balance.md)

---



