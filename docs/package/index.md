# 📦 Package

With these endpoints, you can view and manage the packages(ACL Roles) that belong to you. If you are a reseller, you can also use This module is available only to resellers. Normal users do not need or have access to this module. these endpoints to manage the packages of your users, such as assigning a package to a user or reclaiming a package from a user.

## Base URL

All package management endpoints use the base URL: `https://edge.ippanel.com/v1`

## Authentication

All endpoints in this section require authentication. You must include your authorization token in the request header:

```
Authorization: YOUR_TOKEN_HERE
```

## Available Package Endpoints

The IPPanel Edge API offers several package management endpoints:

- [List Packages](./list-packages) -  List all packages (ACL Roles) under your reseller account

## Response Format

All package management endpoints return data in a structured format with:

- A `data` object containing the requested package information
- A `meta` object with status information and pagination details where applicable
