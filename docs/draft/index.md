# 📝 Draft

With this module, you can manage your default (pre-written) messages. Fun fact: the previous developers named this section “draft” by mistake, but it’s actually for default messages! To avoid confusing our loyal API users, we decided not to change the name in this version. So go ahead—enjoy managing your default messages under the delightfully misleading name “draft”!

## Base URL

All draft management endpoints use the base URL: `https://edge.ippanel.com/v1`

## Authentication

All endpoints in this section require authentication. You must include your authorization token in the request header:

```
Authorization: YOUR_TOKEN_HERE
```

## Available Draft Endpoints

The IPPanel Edge API offers several draft management endpoints:

- [Create Draft Group](./create-draft-group) - Create a new draft group
- [List Draft Groups](./list-draft-group) - Get a list of your draft groups
- [Update Draft Group](./update-draft-group) - Update an existing draft group
- [Delete Draft Group](./delete-draft-group) - Delete a draft group
- [Create Draft](./create-draft) - Add a new draft message
- [List Drafts](./list-draft) - Retrieve all drafts in a specific group
- [Update Draft](./update-draft) - Modify an existing draft message
- [Delete Draft](./delete-draft) - Remove one or more draft messages

## Response Format

All draft management endpoints return data in a structured format with:

- A `data` object containing the requested draft information
- A `meta` object with status information and pagination details where applicable
