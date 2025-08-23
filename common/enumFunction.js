const getUserStatus = (statusCode) => {
  switch (statusCode) {
    case UserStatusTypes.inActive:
      return "In Active";
    case UserStatusTypes.active:
      return "Active";
    default:
      return "Unknown";
  }
};

const getUserRole = (roleCode) => {
  switch (roleCode) {
    case UserRoleTypes.admin:
      return "Admin";
    case UserRoleTypes.manager:
      return "Manager";
    case UserRoleTypes.user:
      return "User";
    default:
      return "Unknown";
  }
};

const UserStatusTypes = {
  inActive: 0,
  active: 1,
};

const UserRoleTypes = {
  admin: 1,
  manager: 2,
  user: 3,
};
module.exports = {
  getUserStatus,
  getUserRole,
  UserRoleTypes,
};
