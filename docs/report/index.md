# 📊 Report

This section covers all reporting endpoints in the IPPanel Edge API. These endpoints allow you to retrieve statistics and data about your sent messages and other related activities.

## Base URL

All report endpoints use the base URL: `https://edge.ippanel.com/v1`

## Authentication

All endpoints in this section require authentication. You must include your authorization token in the request header:

```
Authorization: YOUR_TOKEN_HERE
```

## Available Report Endpoints

The IPPanel Edge API offers several reporting endpoints:

- [Outbox Report](./outbox-report) - Retrieve a general report of your SMS sending requests
- [Outbox Report By ID](./outbox-report-id) - Get detailed information about a specific SMS sending request by its ID
- [Bulk Stats](./bulk-stats) - Get statistics about your sent messages
- [Bulk Recipients](./bulk-recipient) - Retrieve the recipients of a specific bulk SMS sending request
- [Inbox Report](./inbox-report) - Get a report of incoming messages to your numbers

## Response Format

All reporting endpoints return data in a structured format with:

- A `data` object containing the requested report information
- A `meta` object with status information and pagination details where applicable
