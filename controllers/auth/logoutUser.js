const { StatusCodes } = require("http-status-codes");
const Joi = require("joi");
const {
  ActionTypes,
  Actions,
  ModuleTypes,
} = require("../../common/enumFunction");

const schema = Joi.object().keys({
  role_id: Joi.number().required(),
});

module.exports = async function logoutUser(req, res, next) {
  try {
    let validate = await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    // await auditTrailService.invalidateSession(req.user.session_id);

    //Calling the service for Addition in Audit Trail
    // auditTrailService.addAuditTrail({
    // 	user_email: req.user.email,
    // 	action_type_id: ActionTypes.session,
    // 	module_type: ModuleTypes.UserManagement,
    // 	user_ip: req.ip,
    // 	action: Actions.logOut,
    // 	session: true,
    // 	role_id: validate.role_id,
    // 	session_id: req.user.session_id
    // }).catch((err) => console.error(err));

    return res.status(StatusCodes.OK).json({
      message: "Logout Successful",
    });
  } catch (error) {
    next(error);
  }
};
