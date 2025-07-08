# 🔣 Pattern

This section covers all pattern management endpoints in the IPPanel Edge API. Patterns allow you to create and use pre-approved message templates with variables.

## Base URL

All pattern management endpoints use the base URL: `https://edge.ippanel.com/v1`

## Authentication

All endpoints in this section require authentication. You must include your authorization token in the request header:

```
Authorization: YOUR_TOKEN_HERE
```

## Available Pattern Endpoints

The IPPanel Edge API offers several pattern management endpoints:

- [Create Pattern](./create-pattern) - Create a new message pattern
- [List Patterns](./list-pattern) - Get a list of your patterns
- [Get Pattern By Code](./pattern-by-code) - Get details of a specific pattern
- [Update Pattern](./update-pattern) - Update an existing pattern
- [Delete Pattern](./delete-pattern) - Remove a pattern

## Response Format

All pattern management endpoints return data in a structured format with:

- A `data` object containing the requested pattern information
- A `meta` object with status information and pagination details where applicable

## Using Patterns

Patterns are pre-approved message templates that contain variables. When sending a message using a pattern, you provide values for these variables. This approach is useful for sending standardized messages like OTPs, notifications, or other regulatory-compliant messages.
