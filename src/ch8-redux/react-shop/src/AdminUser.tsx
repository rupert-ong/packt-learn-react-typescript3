import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { IUser, adminUserData } from "./UserData";

const AdminUser: React.FunctionComponent<
  RouteComponentProps<{ id: string }>
> = props => {
  let user: IUser;
  if (props.match.params.id) {
    const id: number = parseInt(props.match.params.id, 10);
    user = adminUserData.filter(u => u.id === id)[0];
    if (!user) {
      return <p>No user found</p>;
    }
  } else {
    return null;
  }

  return (
    <div>
      <div>
        <b>Id: </b>
        <span>{user.id.toString()}</span>
      </div>
      <div>
        <b>Is Admin: </b>
        <span>{user.isAdmin.toString()}</span>
      </div>
    </div>
  );
};

export default AdminUser;
