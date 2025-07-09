# 📓 Phonebook Number

With these endpoints, you can manage your phonebook contacts, including adding, updating, deleting, and listing contacts.

## Base URL

All phonebook number management endpoints use the base URL: `https://edge.ippanel.com/v1`

## Authentication

All endpoints in this section require authentication. You must include your authorization token in the request header:

```
Authorization: YOUR_TOKEN_HERE
```

## Available Phonebook Number Endpoints

The IPPanel Edge API offers endpoints for managing your phonebook number:

- [Store Number](./store-number) - Add new phonebook contacts.
- [Delete Number](./delete-number) - Remove phonebook contacts.
- [Show Number](./show-number) - Retrieve details of a specific phonebook contact.
- [List Numbers](./list-number) - List all contacts in your phonebooks.
- [Export Number Contacts](./export-number-contacts.md) - Export phonebook contacts based on specific criteria.
- [Update Number](./update-number) - Update existing phonebook contacts.
- [Import Number](./import-number) - Import phonebook contacts from an Excel file.
- [Get Sample Import Number](./sample-import-number) - Get a sample import number.
- [Export Number Members](./export-number-members) - Export numbers of a specific phonebook number.