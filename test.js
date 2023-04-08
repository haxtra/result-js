
const Equal = require('assert').equal
const Result = require('./')
let r;

// Test responses and codes

const responses = {
	ok:                 200,
	created:            201,
	accepted:           202,
	noContent:          204,
	badRequest:         400,
	unauthorized:       401,
	paymentRequired:    402,
	forbidden:          403,
	notFound:           404,
	methodNotAllowed:   405,
	notAcceptable:      406,
	conflict:           409,
	gone:               410,
	serverError:        500,
	notImplemented:     501,
	serviceUnavailable: 503,
}

for(const res in responses){
	r = Result[res]()
	Equal(r.httpCode, responses[res])
}

// Test object

r = Result.ok('foo')
Equal(r.ok, true)
Equal(r.data, 'foo')
Equal(r.error, undefined)

r = Result.error('boo')
Equal(r.ok, undefined)
Equal(r.data, undefined)
Equal(r.error, 'boo')

r = Result.ok('moo', {foo:'bar'})
Equal(r.ok, true)
Equal(r.data, 'moo')
Equal(r.foo, 'bar')

// Done

console.log('All tests have passed')
