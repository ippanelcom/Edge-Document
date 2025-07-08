# 📞 Numbers

With these endpoints, you can view and manage the lines that belong to you. If you are a reseller, you can also use these endpoints to manage the lines of your users, such as assigning a line to a user or reclaiming a line from a user.

## Base URL

All number management endpoints use the base URL: `https://edge.ippanel.com/v1`

## Authentication

All endpoints in this section require authentication. You must include your authorization token in the request header:

```
Authorization: YOUR_TOKEN_HERE
```

## Available Number Endpoints

The IPPanel Edge API offers endpoints for managing your sender numbers:

- [Assign Number](./assign-number) - This API allows you to assign a number to a user
- [Unassign Number](./unassign-number) - This API allows you to unassign a number from a user
- [List Numbers](./list-numbers) - This API allows you to list all numbers that belong to users

## Response Format

All number management endpoints return data in a structured format with:

- A `data` object containing the requested number information
- A `meta` object with status information and pagination details where applicable
