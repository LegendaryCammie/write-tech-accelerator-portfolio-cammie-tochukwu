---
id: wallet-details
title: Get Single Wallet Details
---


This file helps you understand how to fetch the details of a specific wallet in Chimoney. 

It is commonly used when you need
- Confirm if a wallet is active and funded before sending money.
- Display live balances to users.
- Troubleshoot when transactions fail due to insufficient funds.

A successful request should return key wallet details like `walletID`, `currency`, `balance`, and `status`. If the response shows `**active**` with a non-zero balance, the wallet is in good standing and ready for transactions.

---


### Endpoint
POST /v0.2.4/wallets/lookup

### Authentication
All requests must include your API key. If missing or invalid, you’ll receive a `401 Unauthorized`.
X-API-KEY: `YOUR_API_KEY`
Content-Type: application/json

---

### Request Parameters
| Field      | Type   | Required | Description                      |
| ---------- | ------ | -------- | -------------------------------- |
| `walletId` | string | ✅ Yes    | Unique identifier of the wallet. |

---
### Sample Request
```bash 
POST /v0.2.4/wallets/lookup HTTP/1.1
Host: api-v2-sandbox.chimoney.io
X-API-KEY: your_api_key_here
Content-Type: application/json

{
  "walletId": "wallet_12345xyz"
}
```
### Successful Response (200 OK)
```bash
{
  "status": "success",
  "data": {
    "walletId": "wallet_12345xyz",
    "currency": "USD",
    "balance": 1500.75,
    "status": "active",
    "lastUpdated": "2025-08-28T09:45:00Z"
  }
}
```
**Field Breakdown**

- `walletId`:  The wallet you queried.
- `currency`: ISO code for the wallet’s currency (e.g., USD, NGN).
- `balance`: Current available funds in that wallet.
- `status`:  `"active"` means usable; `"inactive"` means it cannot send/receive.
- `lastUpdated`:  Timestamp when the wallet was created.

---

### Error Responses
Example: Wallet Not Found (404)
```bash
{
  "status": "error",
  "message": "Wallet not found."
}
```
**Why this happens**:
- Wrong walletId
- Wallet belongs to another sub-account

**How to fix**:
- Double-check you’re using the right wallet ID from `/wallets/list`.

:::note
1. Always store wallet IDs securely, they are required for transfers.
2. If the wallet is `"inactive"`, do not attempt transfers, they will fail.
:::

---
Example: Unauthorized (401)
```bash
{
  "status": "error",
  "message": "Unauthorized. Missing or invalid API key."
}
```

**Why this happens**:
- API key not sent in header
- Expired or incorrect key

**How to fix**:
- Confirm you’ve added X-API-KEY with a valid key.


:::tip
For testing, use the sandbox API and confirm balances reset as expected.
:::
