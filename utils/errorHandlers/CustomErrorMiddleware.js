const { StatusCodes } = require('http-status-codes');
const { JsonWebTokenError } = require('jsonwebtoken');
const {
	UniqueConstraintError,
	ForeignKeyConstraintError,
} = require('sequelize');
const { ValidationError } = require('joi');
const { CustomError, LdAppCustomError } = require('./CustomError');

function CustomErrorMiddleware(err, req, res, next) {
	if (err instanceof ValidationError) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			message: err.message,
			statusCode: StatusCodes.BAD_REQUEST,
		});
	}
	if (err instanceof UniqueConstraintError) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			message: `${err.errors[0]?.path ?? 'Property'} must be unique`,
			statusCode: StatusCodes.BAD_REQUEST,
		});
	}
	if (err instanceof ForeignKeyConstraintError) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			message: `Invalid value for foreign key ${err.fields[0]}`,
			statusCode: StatusCodes.BAD_REQUEST,
		});
	}
	if (err instanceof JsonWebTokenError) {
		return res.status(StatusCodes.UNAUTHORIZED).json({
			message: err.message,
			statusCode: StatusCodes.UNAUTHORIZED,
		});
	}
	if (err instanceof CustomError) {
		return res.status(err.statusCode).json({
			message: err.message,
			statusCode: err.statusCode,
		});
	}
	if (err instanceof LdAppCustomError) {
		return res.status(err.statusCode).json({
			message: err.message,
			statusCode: err.statusCode,
			link:err.url
		});
	}
	// default error
	return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
		message: err.message,
		error: err.stack,
	});
}

module.exports = { CustomErrorMiddleware };

// ******************************   old middelware   ******************************
// set locals, only providing error in development
// res.locals.message = err.message;
// res.locals.error = req.app.get('env') === 'development' ? err : {};

// // render the error page
// res.status(err.status || 500);
// res.render('error')
