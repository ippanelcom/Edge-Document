# 🎫 Ticket

This module is available only to resellers. Normal users do not need or have access to this module.

## Base URL

All ticket endpoints use the base URL: `https://edge.ippanel.com/v1`

## Authentication

All endpoints in this section require authentication. You must include your authorization token in the request header:

```
Authorization: YOUR_TOKEN_HERE
```

## Available Ticket Endpoints

The IPPanel Edge API offers several ticket management endpoints:

- [Create Ticket](./create-ticket) - Allows you to create a new ticket.
- [List Tickets](./list-ticket) - List all tickets under your reseller account
- [Get Ticket By ID](./ticket-id) -  Get a specific ticket by its ID
- [Reply To Ticket](./reply-ticket) - Reply to a specific ticket

## Response Format

All ticket endpoints return data in a structured format with:

- A `data` object containing the requested ticket information
- A `meta` object with status information and pagination details where applicable
