var express = require('express')
var jwt = require('express-jwt')
var cors = require('cors')
var PouchDB = require('pouchdb')
var MemPouchDB = PouchDB.defaults({db: require('memdown')})

var remoteDb = process.env.COUCHDB || 'http://admin:admin@localhost:5984/w3foo'
var localDb = process.env.LOCALDB || 'example'

var app = express()
app.use(cors())
app.use(jwt({secret: new Buffer(process.env.JWT_SECRET, 'base64') }))
app.use('/', require('express-pouchdb')(MemPouchDB))
var local = MemPouchDB(localDb)
PouchDB.sync(local, remoteDb, {
  live: true,
  retry: true
})

app.listen(process.env.PORT || 8080)
