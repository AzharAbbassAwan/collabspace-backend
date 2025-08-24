const userRepository = require("../repository/userRepository");
const userRoleRepository = require("../repository/userRoleRepository");
const config = require("../config/config.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async function (obj) {
    let user = await userRepository.getUser({ email: obj.email });
    if (!user) {
      throw new Error("User not found");
    }
    const isMatch = await bcrypt.compare(obj.password, user.password);
    if (!isMatch) {
      throw new Error("Incorrect email or password");
    }
    const userRoles = await userRoleRepository.getUserRole({ userId: user.id });
    if (!userRoles || !userRoles[0].role) {
      throw new Error("User role not found");
    }
    // return userRoles;
    const roles = [];
    for (let i = 0; i < userRoles.length; i++) {
      roles.push({
        id: i,
        roleName: userRoles[i].role.name,
      });
    }
    var permissions = [];
    let index = 0;
    for (let i = 0; i < userRoles.length; i++) {
      for (let j = 0; j < userRoles[i].role.rolePermission.length; j++) {
        permissions.push({
          key: index,
          name: userRoles[i].role.rolePermission[j].permission.name,
          description:
            userRoles[i].role.rolePermission[j].permission.description,
        });
        index++;
      }
    }
    const token = jwt.sign(
      {
        userId: user.id,
        roles,
        userEmail: user.email,
      },
      config.jwt.secret,
      { expiresIn: config.jwt.rememberMeExpiry }
    );
    return {
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
      roles,
      token,
      permissions,
    };
  },
};
