---
id: wallet-transfer
title: Transfer Funds Between Wallets
---

# Overview

This endpoint allows you to transfer funds from one wallet to another, or from a wallet to an external recipient (email/phone).

Use it to:
- Move money between sub-wallets in your account.
- Send payouts to users directly via their email or phone number.
- Automate disbursements for salaries, rewards, or vendor payments.

A successful response confirms the transfer details, transaction reference, and new balance.

---
### Endpoints
POST /v0.2.4/wallets/transfer

### Authentication
All requests must include your API key. Without it, you’ll receive a 401 Unauthorized.

X-API-KEY: `YOUR_API_KEY`
Content-Type: application/json

---
### Request Parameters 
| Field           | Type   | Required | Description                                    |
| --------------- | ------ | -------- | ---------------------------------------------- |
| `walletId`      | string | ✅ Yes    | The wallet sending the funds                  |
| `beneficiaryId` | string | ✅ Yes    | ID of the saved beneficiary.                   |
| `amount`        | number | ✅ Yes    | Amount to transfer.                            |
| `currency`      | string | ✅ Yes    | ISO currency code (e.g., NGN, USD).            |
| `reference`     | string | Optional | Unique reference for tracking the transaction. |



---
### Sample Request
```bash
POST /v0.2.4/wallets/transfer HTTP/1.1
Host: api-v2-sandbox.chimoney.io
X-API-KEY: your_api_key_here
Content-Type: application/json

```bash
{
  "walletId": "wallet_12345xyz",
  "beneficiaryId": "bnf_67890abc",
  "amount": 5000,
  "currency": "NGN",
  "reference": "transfer_20250828_001"
}
```bash


### Successful Response (200 OK)
```bash 
{
  "status": "success",
  "data": {
    "transactionId": "txn_54321def",
    "walletId": "wallet_12345xyz",
    "beneficiaryId": "bnf_67890abc",
    "amount": 5000,
    "currency": "NGN",
    "status": "processing",
    "reference": "transfer_20250828_001"
  }
}

```
**Field Breakdown**
- `transactionId`: Track the transfer status with this ID.
- `walletId`: The source wallet.
- `beneficiaryId`: The receiving beneficiary.
 -`status`: `"processing"`, `"completed"`, or `"failed"`.

---

### Error Responses 
Example: Insufficient Funds (400)
```bash
{
"status": "error",
"message": "Insufficient funds in wallet.."
}
```

**Why this happens**
- Wallet balance is less than the requested transfer amount

**How to fix**:
- Fund the wallet before retrying..

:::tip
Always check wallet balance before initiating a transfer.
:::

---

Example: Invalid Recipient (400)
```bash
{
"status": "error",
"message": "Recipient wallet not found or inactive."
}
```

**Why this happens** 
-  The `recipientId` does not exist.
- `Inactive` recipient wallet

**How to fix**:
- Use /beneficiaries/add first, then retry with the returned beneficiaryId.

:::tip
For email/phone recipients, confirm they’ve registered/activated their wallet to avoid errors.
:::

---
Example: Unauthorized (401)
```bash 
{
"status": "error",
"message": "Unauthorized. Missing or invalid API-KEY."
}
```
***Why this happenes**
- API key missing in headers.
- Key is expired or incorrect.

**How to fix**:
- Verify `API-KEY` is valid and included in headers.

---
