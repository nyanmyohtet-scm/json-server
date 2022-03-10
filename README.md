# json-server
JSON API for Bulletin Board

## Setup

Install NPM packages:

> This step is need to run only of first time.
```
npm install
```

Start JSON-Server:

> Need to re-run this command if you have made changes.
```
npm run serve
```

JSON-SERVER is running at http://localhost:8000

## Admin Account Info

```json
{
    "name": "Admin",
    "email": "admin@example.com",
    "password": "password123",
    "type": 0,
    "phone": "0912345678989",
    "address": "Yangon",
    "dob": 1646832012308,
    "created_user_id": 0,
    "updated_user_id": 0,
    "created_at": 1646832012308,
    "updated_at": 1646832012308,
    "deleted_user_id": null,
    "deleted_at": null
}
```

## Sample Post Info

```json
{
      "title": "Post 01",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "status": 1,
      "created_user_id": 1,
      "updated_user_id": 1,
      "deleted_user_id": null,
      "deleted_at": null,
      "created_at": 1646832501074,
      "updated_at": 1646832501074,
      "id": 1
    }
```
