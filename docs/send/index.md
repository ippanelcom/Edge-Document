# 📨 Send SMS

This section covers all methods for sending SMS messages through the IPPanel Edge API. You can send messages in various ways depending on your needs.

for changing the sending method, you can use the sending type parameter in the request body.
## Base URL

All SMS sending endpoints use the base URL: `https://edge.ippanel.com/v1`

## Authentication

All endpoints in this section require authentication. You must include your authorization token in the request header:

```
Authorization: YOUR_TOKEN_HERE
```

## Available Sending Methods

The IPPanel Edge API offers multiple methods for sending SMS messages, each suited for different use cases:

- [Webservice SMS](./webservice) - Quickly send SMS messages
- [Peer to Peer SMS](./peer-to-peer) - Send multiple messages to multiple recipients
- [Peer to Peer by File](./peer-to-peer-file) - Send multiple messages to multiple recipients using a file
- [PostalCode SMS](./postalcode) - Send messages using postal codes
- [Country SMS](./country) - Send messages to all numbers in a specific province or county or city
- [Keyword SMS](./keyword) - Send messages using a keyword
- [Keyword Phonebook SMS](./keyword-phonebook) - Send messages using a keyword to a phonebook
- [Phonebook SMS](./phonebook) - Send messages to one or more phonebooks
- [Pattern SMS](./pattern) - Send messages using predefined patterns
- [File SMS](./file) - Send messages using a file containing phone numbers
- [VOTP](./votp) - Send a VOTP (Voice One-Time Password) message
- [Cancel Scheduled](./cancel-scheduled) - Cancel scheduled messages

## Request Format

Most SMS sending methods follow a similar request format with variations in parameters. All requests require proper authorization headers and typically use JSON request bodies.

## Response Format

Successful API responses include a `data` object with the SMS bulk id and a `meta` object with status information. Error responses include details about the specific error encountered.
