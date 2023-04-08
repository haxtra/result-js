"use strict"

class Result {

	constructor(success, payload, httpCode, data) {

		if(success){
			this.ok = true
			this.data = payload
			this.httpCode = httpCode || 200
		} else {
			this.error = payload || true
			this.httpCode = httpCode || 500
		}

		if(data)
			for(const key in data)
				this[key] = data[key]
	}

	object() {

		const obj = {}

		for(const key in this)
			obj[key] = this[key]

		return obj
	}
}


const Export = {Result}


// Generic Responses

Export.success = (data, opts) => new Result(true, data, 200, opts)

Export.error = (err, param1, param2) => {

	if(param1 !== undefined){
		// params supplied
		if(Number.isInteger(param1)){
			// http error code
			return new Result(false, err, param1, param2)
		} else {
			// must be opts, switch around
			return new Result(false, err, param2, param1)
		}
	} else {
		// no additional params
		return new Result(false, err)
	}
}

// 2xx Success

Export.ok                 = (data, opts) => new Result(true, data, 200, opts)
Export.created            = (data, opts) => new Result(true, data, 201, opts)
Export.accepted           = (data, opts) => new Result(true, data, 202, opts)
Export.noContent          = (____, opts) => new Result(true, undefined, 204, opts)


// 4xx User Error

Export.badRequest         = (error, opts) => new Result(false, error || 'Bad Request',         400, opts)
Export.unauthorized       = (error, opts) => new Result(false, error || 'Unauthorized',        401, opts)
Export.paymentRequired    = (error, opts) => new Result(false, error || 'Payment Required',    402, opts)
Export.forbidden          = (error, opts) => new Result(false, error || 'Forbidden',           403, opts)
Export.notFound           = (error, opts) => new Result(false, error || 'Not Found',           404, opts)
Export.methodNotAllowed   = (error, opts) => new Result(false, error || 'Method Not Allowed',  405, opts)
Export.notAcceptable      = (error, opts) => new Result(false, error || 'Not Acceptable',      406, opts)
Export.conflict           = (error, opts) => new Result(false, error || 'Conflict',            409, opts)
Export.gone               = (error, opts) => new Result(false, error || 'Gone',                410, opts)


// 5xx Server Error

Export.serverError        = (error, opts) => new Result(false, error || 'Server Error',        500, opts)
Export.notImplemented     = (error, opts) => new Result(false, error || 'Not Implemented',     501, opts)
Export.serviceUnavailable = (error, opts) => new Result(false, error || 'Service Unavailable', 503, opts)


module.exports = Export