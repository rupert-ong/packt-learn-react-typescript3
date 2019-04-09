import * as React from "react";
import { NavLink, Route } from "react-router-dom";
import { adminUserData } from "./UserData";
import AdminUser from "./AdminUser";

const AdminUsers: React.FunctionComponent = () => {
  return (
    <div>
      <ul className="admin-sections">
        {adminUserData.map(user => (
          <li key={`user_${user.id}`}>
            <NavLink
              to={`/admin/users/${user.id}`}
              activeClassName="admin-link-active"
            >
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Route path="/admin/users/:id" component={AdminUser} />
    </div>
  );
};

export default AdminUsers;
