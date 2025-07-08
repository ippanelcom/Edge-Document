# 💳 Payment

With this module, you can manage your payments. You can view your payment history, check your balance, and make payments.

## Base URL

All payment endpoints use the base URL: `https://edge.ippanel.com/v1`

## Authentication

All endpoints in this section require authentication. You must include your authorization token in the request header:

```
Authorization: YOUR_TOKEN_HERE
```

## Available Payment Endpoints

The IPPanel Edge API offers several payment-related endpoints:

- [My Credit](./my-credit) - Retrieve your current credit balance.

## Response Format

All payment endpoints return data in a structured format with:

- A `data` object containing the requested payment information
- A `meta` object with status information and pagination details where applicable

## Payment Flow

The typical payment flow in the IPPanel Edge API involves:

1. Creating a payment request
2. Being redirected to a payment gateway
3. Completing the payment on the gateway
4. Being redirected back to your application
5. Verifying the payment to ensure it was successful
