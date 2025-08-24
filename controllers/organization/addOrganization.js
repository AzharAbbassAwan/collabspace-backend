const { StatusCodes } = require("http-status-codes");
const { userService, auditTrailService } = require("../../service");
const {
  ActionTypes,
  Actions,
  Modules,
  ModuleTypes,
  UserStatusTypes,
} = require("../../common/enumFunction");
const { role } = require("../../config.json");
const Joi = require("joi");

const schema = Joi.object().keys({
  name: Joi.string().required().allow(null),
  domain: Joi.string().optional().allow(null),
  subscriptionPlan: Joi.string().optional().allow(null),
  status: Joi.string().optional(),
});

module.exports = async function addOrganization(req, res, next) {
  try {
    let validate = await schema.validateAsync(req.body, {
      abortEarly: false,
    });

    const data = await organizationService.addOrganization({
      ...validate,
    });
    validate.ip = req?.ip;
    // if (data) {
    // 	//Calling the service for Addition in Audit Trail
    // 	auditTrailService.addAuditTrail({
    // 		user_email: req?.user?.email,
    // 		action_type_id: ActionTypes.Activity,
    // 		user_ip: validate.ip,
    // 		action: Actions.insert,
    // 		// session_id: req.user.session_id,
    // 		// module_type: ModuleTypes.UserManagement,
    // 		created_user_email: validate?.email,
    // 		role_ids: validate?.role_ids,
    // 		first_name: validate?.first_name,
    // 		last_name:validate?.last_name,
    // 		user_status:UserStatusTypes.active,
    // 		role_id:role.Admin

    // 	}).catch((err) => console.error(err));

    // } else {
    // 	return res.status(StatusCodes.BAD_REQUEST).json({
    // 		message: 'Unable to Create User',
    // 	});
    // }

    return res.status(StatusCodes.CREATED).json({
      message: "Organization added successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};
