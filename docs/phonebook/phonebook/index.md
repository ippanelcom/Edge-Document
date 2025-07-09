# 📓 Phonebook

With these endpoints, you can manage your phonebook entries.

## Base URL

All phonebook management endpoints use the base URL: `https://edge.ippanel.com/v1`

## Authentication

All endpoints in this section require authentication. You must include your authorization token in the request header:

```
Authorization: YOUR_TOKEN_HERE
```

## Available Phonebook Endpoints

The IPPanel Edge API offers endpoints for managing your phonebook:

- [List Phonebooks](./phonebook-list) - This API allows you to list all contacts in your phonebook.
- [Store Phonebook](./store-phonebook) - This API allows you to create a new phonebook entry.
- [Delete Phonebook](./delete-phonebook) - This API allows you to delete a phonebook entry by its ID.
- [Update Phonebook](./update-phonebook) - This API allows you to update an existing phonebook entry by its ID.