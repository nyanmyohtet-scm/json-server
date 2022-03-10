// server.js
const path = require('path')
// var auth = require("./auth.js")();
const jsonServer = require('json-server')
const auth = require('json-server-auth')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

const PORT_NUMBER = 8000

// /!\ Bind the router db to the app
server.db = router.db

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

// Append created_at to request body
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.created_at = Date.now()
    req.body.updated_at = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Custom middleware example
// server.use((req, res, next) => {
//   res.header('X-Hello', 'World')
//   next()
// })

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
const rules = auth.rewriter({
  // Permission rules
  users: 600, // rwx
  posts: 664, // 421
  // Other rules
  '/api/*': '/$1', // rewirte '/api/*' to '/*'
  '/:resource/:id/show': '/:resource/:id',
  '/:resource/create': '/:resource',
  '/:resource/:id/edit': '/:resource/:id',
  '/:resource/:id/delete': '/:resource/:id',
  // '/posts/:category': '/posts?category=:category',
})

// You must apply the middlewares in the following order
server.use(rules)
server.use(middlewares)

// You must apply the auth middleware before the router
server.use(auth)
server.use(router)

// Listern API request form client at given port number
server.listen(PORT_NUMBER, () => {
  console.log(`JSON Server is running at ${PORT_NUMBER}`)
})
