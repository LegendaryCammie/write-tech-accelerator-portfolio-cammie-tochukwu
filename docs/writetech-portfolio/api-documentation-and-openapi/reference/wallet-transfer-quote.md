---
id: wallet-transfer-quotes
title: Get Wallet Transfer Quote
---

# Overview

This file helps you understand how to **fetch a transfer quote** before actually sending money.  
It is commonly used when you need to:

- Show users the **fees and exchange rates** for a transfer.  
- Ensure the source wallet has enough balance.  
- Provide transparency before confirming a transaction.

---

### Endpoint
POST /v0.2.4/wallets/transfer/quote

### Authentication
X-API-KEY: `YOUR_API_KEY`
Content-Type: application/json

---

### Request Parameters 
| Field           | Type   | Required | Description                         |
| --------------- | ------ | -------- | ----------------------------------- |
| `walletId`      | string | ✅ Yes    | The source wallet ID.               |
| `beneficiaryId` | string | ✅ Yes    | ID of the beneficiary.              |
| `amount`        | number | ✅ Yes    | Amount to transfer.                 |
| `currency`      | string | ✅ Yes    | ISO currency code (e.g., USD, NGN). |

---

### Sample Request
```bash
POST /v0.2.4/wallets/transfer/quote HTTP/1.1
Host: api-v2-sandbox.chimoney.io
X-API-KEY: your_api_key_here
Content-Type: application/json

{
  "walletId": "wallet_12345xyz",
  "beneficiaryId": "bnf_67890abc",
  "amount": 100,
  "currency": "USD"
}
```

### Successful Response (200 OK)
```bash
{
  "status": "success",
  "data": {
    "walletId": "wallet_12345xyz",
    "beneficiaryId": "bnf_67890abc",
    "amount": 100,
    "currency": "USD",
    "fee": 2.5,
    "totalDebit": 102.5,
    "exchangeRate": 1.0,
    "payoutAmount": 100,
    "payoutCurrency": "USD"
  }
}
```
### Field Breakdown
- `fee`: Transfer fee charged.
- `totalDebit`: Amount deducted from wallet (amount + fee).
- `exchangeRate`: Conversion rate if cross-currency.
- `payoutAmount`: Net amount the beneficiary will receive.

---

### Error Responses
Example: Invalid Beneficiary (404)
```bash
{
  "status": "error",
  "message": "Beneficiary not found."
}
```
**Why this happens:**
- Wrong or missing `beneficiaryId`.

**How to fix:**
- Create the beneficiary first, then retry.

---
Example: Unsupported Currency (400)
```bash
{
  "status": "error",
  "message": "Currency not supported for this wallet."
}
```

**Why this happens:**
- Wallet cannot send in the requested currency.

**How to fix:**
- Check wallet details with `/wallets/lookup`.
- Use a wallet in the supported currency.

---

Example: Amount Too Low (400)
```bash
{
  "status": "error",
  "message": "Transfer amount is below the minimum limit."
}
```

**Why this happens:**
- Some currencies require a minimum transfer (e.g., $1).

**How to fix:**
- Increase the transfer amount to meet the limit.



