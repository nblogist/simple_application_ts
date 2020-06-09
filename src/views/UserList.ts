import m from "mithril";
import User from "../models/User";

//Display's user list
let UserList: any = {
  oninit: User.loadList,
  view: () => {
    return m(
      ".user-list",
      User.list.map(function (user: any) {
        //return m(".user-list-item", user.firstName + " " + user.lastName);
        return m(
          m.route.Link,
          {
            class: ".user-list-item",
            href: "/edit/" + user.id,
          },
          user.firstName + " " + user.lastName
        );
      })
    );
  },
};

export default UserList;
