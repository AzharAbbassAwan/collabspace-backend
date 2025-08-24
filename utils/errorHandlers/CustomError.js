/**
 * Throw a CustomError with statusCode. We can also use this to differentiate
 * between our custom errors and other errors in catch blocks using instanceof keyword.
 * @example
 * try {
 *   //error message and http Status Code
 *   throw new CustomError('Invalid Password', 400);
 * }
 * catch(error) {
 *   if(error instanceof CustomError){
 *     // if error was CustomError, do this:
 *     doSomething();
 *   } else {
 *     // if error was of some other type, do this instead:
 *     doSomethingElse();
 *   }
 * }
 */
class CustomError extends Error {
	name = 'CustomError';
	// default status code
	statusCode = 500;
	/**
	 * @param {string} message - error message
	 * @param {number} statusCode - statusCode to send in response
	 */
	constructor(message, statusCode) {
		super(message);
		// assign status code if sent in constructor
		this.statusCode = statusCode;
	}
}

class LdAppCustomError extends Error {
	name = 'CustomError';
	// default status code
	// statusCode = 500;
	/**
	 * @param {string} message - error message
	 * @param {number} statusCode - statusCode to send in response
	 * @param {string} url - statusCode to send in response
	 * 
	 */
	constructor(message, statusCode,url) {
		super(message);
		// assign status code if sent in constructor
		this.statusCode = statusCode;
		this.url = url
	}
}

module.exports = { CustomError,LdAppCustomError };
