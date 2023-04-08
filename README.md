# result-js

Result/response object with HTTP-friendly status codes, for use with web APIs.


## Install

	npm install @haxtra/result


## Usage

```js
const Result = require('@haxtra/result')
```

### Success

```js
res = Result.ok()
// res.ok (true)
// res.data (undefined)
// res.httpCode (200)

res = Result.success(payload, httpCode, {key:value, foo:bar})
// res.ok (true)
// res.data (payload)
// res.httpCode (httpCode|200)
// res.key (value)
// res.foo (bar)

res = Result.created(id)
// res.ok (true)
// res.data (id)
// res.httpCode (201)
```

### Error

```js
res = Result.error()
// res.error (true)
// res.httpCode (500)

res = Result.error(msg, httpCode, {key:value, foo:bar})
// res.error (msg|true)
// res.httpCode (httpCode|500)
// res.key (value)
// res.foo (bar)

res = Result.notFound(msg)
// res.error (msg|Not Found)
// res.httpCode (404)
```

## HTTP responses

### Success

```js
// 2xx
Result.ok()        // 200
Result.created()   // 201
Result.accepted()  // 202
Result.noContent() // 204

// generic 200
Result.success(payload?, data?)
```

### Error

```js
// 4xx
Result.badRequest()         // 400
Result.unauthorized()       // 401
Result.paymentRequired()    // 402
Result.forbidden()          // 403
Result.notFound()           // 404
Result.methodNotAllowed()   // 405
Result.notAcceptable()      // 406
Result.conflict()           // 409
Result.gone()               // 410

// 5xx
Result.serverError()        // 500
Result.notImplemented()     // 501
Result.serviceUnavailable() // 503

// generic 500
Result.error(error?, httpCode?, data?)

```

## License

MIT