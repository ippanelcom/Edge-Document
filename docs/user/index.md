# 👤 User

This module is available only to resellers. Normal users do not need or have access to this module.

It allows resellers to manage and query information related to their downstream users.

## Base URL

All user management endpoints use the base URL: `https://edge.ippanel.com/v1`

## Authentication

All endpoints in this section require authentication. You must include your authorization token in the request header:

```
Authorization: YOUR_TOKEN_HERE
```

## Available User Endpoints

The IPPanel Edge API offers several user management endpoints:

- [Get Parents Tree](./parents-tree) - Returns the full hierarchy (reseller tree) of a specific user
- [List Users](./list-users) - List all users under your reseller account
- [Register User](./register-user) - Register a new user under your reseller account
- [Get User Tariff](./user-tariff) - Get the tariff information for a specific user
- [Check User Existence](./check-exist) - Check if a user exists by username
- [Update User](./update-user) - Update the details of an existing user
- [Show User](./show-user) - Retrieve the details of a specific user by user ID

## Response Format

All user management endpoints return data in a structured format with:

- A `data` object containing the requested user information
- A `meta` object with status information
