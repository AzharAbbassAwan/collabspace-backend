module.exports = {
  permissions: [
    // System Admin Permissions
    {
      name: "manage_users",
      description: "Create, update, delete users",
    },
    {
      name: "manage_roles",
      description: "Assign and manage roles",
    },
    {
      name: "manage_permissions",
      description: "Create, update, delete permissions",
    },
    {
      name: "view_all_organizations",
      description: "View all organizations in the system",
    },

    // Organization Manager Permissions
    {
      name: "manage_team",
      description: "Add, update, remove team members in the organization",
    },
    {
      name: "manage_projects",
      description: "Create and manage projects",
    },
    {
      name: "view_org_reports",
      description: "Access organization level reports",
    },

    // Developer Permissions
    {
      name: "view_tasks",
      description: "View tasks assigned",
    },
    {
      name: "update_tasks",
      description: "Update task status",
    },

    // Common Permissions
    {
      name: "view_dashboard",
      description: "Access dashboard page",
    },
    {
      name: "update_profile",
      description: "Update personal profile details",
    },
  ],
};
