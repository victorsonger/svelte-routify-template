const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router();

app.set('trust proxy', true)

// 主页路由
router.get('/', (req, res) => {
  res.send('维基主页');
});

app.use(router);

// CORS & Preflight request
// app.use((req, res, next) => {
//   if (req.path !== '/' && !req.path.includes('.')) {
//     res.set({
//       'Access-Control-Allow-Credentials': true,
//       'Access-Control-Allow-Origin': req.headers.origin || '*',
//       'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
//       'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
//       'Content-Type': 'application/json; charset=utf-8',
//     })
//   }
//   req.method === 'OPTIONS' ? res.status(204).end() : next()
// })

// cookie parser
// app.use((req, res, next) => {
//   req.cookies = {}
//   ;(req.headers.cookie || '').split(/\s*;\s*/).forEach((pair) => {
//     let crack = pair.indexOf('=')
//     if (crack < 1 || crack == pair.length - 1) return
//     req.cookies[decodeURIComponent(pair.slice(0, crack)).trim()] =
//       decodeURIComponent(pair.slice(crack + 1)).trim()
//   })
//   next()
// })

// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// // static
// app.use(express.static(path.join(__dirname, 'public')))

// router
// app.use(route, (req, res) => {
      

// })
const port = 5008;
const host = process.env.HOST || ''

app.server = app.listen(port, host, () => {
  console.log(`server running @ http://${host ? host : 'localhost'}:${port}`)
})

module.exports = app
