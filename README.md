# json-server

JSON API for Bulletin Board

Home Page: https://github.com/typicode/json-server

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

## Route Table

<ul>
  <li>
    <a href="posts">/posts</a>
    <sup>10x</sup>
  </li>
  <li>
    <a href="users">/users</a>
    <sup>1x</sup>
  </li>
</ul>
<p>
  To access and modify resources, you can use any HTTP method:
</p>
<p>
  <code>GET</code>
  <code>POST</code>
  <code>PUT</code>
  <code>PATCH</code>
  <code>DELETE</code>
  <code>OPTIONS</code>
</p>

<hr>

## Custom Routes

<div>
  <table>
    <tbody><tr>
        <td>/users*</td>
        <td><code>⇢</code> /600/users$1</td>
      </tr><tr>
        <td>/posts*</td>
        <td><code>⇢</code> /664/posts$1</td>
      </tr><tr>
        <td>/api/*</td>
        <td><code>⇢</code> /$1</td>
      </tr><tr>
        <td>/:resource/:id/show</td>
        <td><code>⇢</code> /:resource/:id</td>
      </tr><tr>
        <td>/:resource/create</td>
        <td><code>⇢</code> /:resource</td>
      </tr><tr>
        <td>/:resource/:id/edit</td>
        <td><code>⇢</code> /:resource/:id</td>
      </tr><tr>
        <td>/:resource/:id/delete</td>
        <td><code>⇢</code> /:resource/:id</td>
      </tr>
      </tr><tr>
        <td>/posts/1/show</td>
        <td><code>⇢</code> /posts/1</td>
      </tr><tr>
        <td>/posts/create</td>
        <td><code>⇢</code> /posts</td>
      </tr><tr>
        <td>/posts/1/edit</td>
        <td><code>⇢</code> /posts/1</td>
      </tr><tr>
        <td>/posts/1/delete</td>
        <td><code>⇢</code> /posts/1</td>
      </tr>
  </tbody></table>
</div>

## Permissions

```javascript
/**
 * Permission rules
 * Add 4 for read permission.
 * Add 2 for write permission.
 * Add 1 for execute permission.
 *
 * First digit are the permissions for the `resource owner`.
 * Second digit are the permissions for the `logged-in users`.
 * Third digit are the permissions for the `public users`.
 */
 ```

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
