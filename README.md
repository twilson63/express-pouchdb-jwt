# express-pouchdb-jwt

This is an express server that can point to a pouch or couch database and provide a jwt verification for authentication to a couch or pouch database.

Using `https://github.com/auth0/express-jwt` and `pouchdb` this project creates a simple gateway to your pouchdb or couchdb servers. For the first iteration, the strategy is to use a pouchdb in memory server to sync with a couchdb database and expose the in memory pouchdb server as an endpoint.

## Why

The purpose for this microservice is to enable jwt user authentication for couchdb and pouchdb databases from client or native applications.

## Configuration

```
COUCHDB=[locations to couchdb server]
JWT_SECRET=[secret for jwt auth]
LOCALDB=[local database name to expose to client]
ORIGIN=[name of client ref]
```

ex

```
COUCHDB=http://user:password@localhost:5984/mydb
JWT_SECRET=1234
LOCALDB=mydb
ORIGIN=http://www.example.com
```

## Setup

```
npm install
npm start
```

## License

MIT
