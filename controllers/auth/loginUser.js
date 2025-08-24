const {
  userService,
  auditTrailService,
  authService,
} = require("../../service");
const { StatusCodes } = require("http-status-codes");
const Joi = require("joi");
const {
  ActionTypes,
  Actions,
  ModuleTypes,
} = require("../../common/enumFunction");

const schema = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = async function loginUser(req, res, next) {
  try {
    let validate = await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    validate.ip = req?.ip;
    const data = await authService.login(validate);

    if (data) {
      //Calling the service for Addition in Audit Trail
      // auditTrailService.addAuditTrail({
      // 	user_email: validate.email,
      // 	action_type_id: ActionTypes.session,
      // 	module_type: ModuleTypes.UserManagement,
      // 	user_ip: validate.ip,
      // 	action: Actions.logIn,
      // 	session: true,
      // 	role_id: data.roles[0],
      // 	session_id: data.session_id
      // }).catch((err) => console.error(err));
    }
    req.refreshToken = data.refreshToken;
    return res.status(StatusCodes.OK).json({
      message: "Request Successful",
      data,
    });
  } catch (error) {
    next(error);
  }
};
