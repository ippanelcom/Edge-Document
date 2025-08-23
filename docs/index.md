# 📌 API Documentation

👋 Hey there! If you've got an account with IPPanel, you're in the right place.
This documentation covers everything you need to know about using our API – from sending messages to managing your
account and beyond.

## Base URL

> Base URL: `https://edge.ippanel.com/v1`

> Please replace `{base_url}` with the actual base URL of the server.

## Authentication

All API endpoints require authentication using a bearer token. You can obtain this token through the [Authentication](/docs/auth) section.

🔑 What is a Token?

A token is a string that is issued to the user after a successful login with their username and password.

- The length of the token varies between 30 to 255 characters.

- Each token is valid for 10 hours from the time it is issued.

- All API endpoints in this documentation can be accessed using a valid token.

🔑 What is an API Key?

An API key is a string that can be generated from the user panel under:

`User Panel > Developers > Access Keys`

- Unlike tokens, API keys do not expire and can be used without time limits.

- However, not all API endpoints support API keys. Some sensitive endpoints (e.g., changing a password or creating/viewing new API keys) are only accessible via a token.

## Getting Started

1. Start with the [Authentication](/docs/auth) section to get your access token
2. Use the token in the Authorization header: `Authorization: your-token-or-apikey-here`
3. Explore the different API sections based on your needs

## API Sections

- **[🔐 Authentication](/docs/auth)** - Login, logout, and token management
- **[📨 Send SMS](/docs/send)** - Send SMS messages using various methods
- **[📊 Reports](/docs/report)** - Get delivery reports and statistics
- **[📞 Numbers](/docs/numbers)** - Manage your phone numbers
- **[👤 Users](/docs/user)** - User management APIs
- **[📦 Packages](/docs/package)** - Package and credit management
- **[🎫 Ticket](/docs/ticket)** - Support ticket system
- **[📝 Drafts](/docs/draft)** - Message draft management
- **[💳 Payment](/docs/payment)** - Payment and credit information
- **[🎯 Patterns](/docs/pattern)** - SMS pattern management
- **[📁 Phonebook](/docs/phonebook)** - Contact management

## Support

If you need help or have questions, please create a support ticket through the [Tickets](/docs/ticket) section or contact our support team via our [website](https://ippanel.com).

You can also reach out to our technical team by opening an issue directly on our [GitHub repository](https://github.com/ippanelcom/Edge-Document)
