---
id: add-beneficiary
title: Add Bank Beneficiary

---

# Overview

This file helps you understand how to **add a new bank beneficiary** to your account.  
Beneficiaries are required before you can send funds to them.  

It is commonly used when you need to:
- Register bank details for payouts.
- Store beneficiary IDs for automated transfers.
- Reduce errors by validating account information upfront.

---

### Endpoint
POST /v0.2.4/beneficiaries/add

### Authentication
X-API-KEY: `YOUR_API_KEY`
Content-Type: application/json

---

### Request Parameters 
| Field           | Type   | Required | Description                        |
| --------------- | ------ | -------- | ---------------------------------- |
| `name`          | string | ✅ Yes    | Full name of the beneficiary.      |
| `bankCode`      | string | ✅ Yes    | Bank code (varies by country).     |
| `accountNumber` | string | ✅ Yes    | Beneficiary’s bank account number. |
| `currency`      | string | ✅ Yes    | ISO currency code (e.g., NGN).     |

---

### Sample Request 
```bash
POST /v0.2.4/beneficiaries/add HTTP/1.1
Host: api-v2-sandbox.chimoney.io
X-API-KEY: your_api_key_here
Content-Type: application/json

{
  "name": "Ada Lovelace",
  "bankCode": "044",
  "accountNumber": "0123456789",
  "currency": "NGN"
}
```

### Successfule Response (200 OK)
```bash 
{
  "status": "success",
  "data": {
    "beneficiaryId": "bnf_67890abc",
    "name": "Ada Lovelace",
    "bankCode": "044",
    "accountNumber": "0123456789",
    "currency": "NGN",
    "status": "active"
  }
}
```
**Field Breakdown**
- `beneficiaryId`: Unique ID for future transfers.
- `status`: `"active"` means ready for payouts.

---

### Error Responses
Example: Invalid Bank Code (400)
```bash
{
  "status": "error",
  "message": "Invalid bank code."
}
```
**Why this happens:**
- The bank code doesn’t exist or is not supported.

**How to fix:**
- Confirm valid codes from the `/banks/list` endpoint.

---

Example: Invalid Account Number (400)
```bash 
{
  "status": "error",
  "message": "Invalid account number format."
}
```

**Why this happens:**
- Account number length is wrong.
- Non-numeric characters were included.

**How to fix:**
- Ensure account numbers follow the bank’s format (e.g., 10 digits for NGN).

---

Example: Duplicate Beneficiary (409)
```bash
{
  "status": "error",
  "message": "Beneficiary already exists."
}
```

**Why this happens:**
- The same account number was already added.

**How to fix:**
- Reuse the existing beneficiaryId instead of adding again.