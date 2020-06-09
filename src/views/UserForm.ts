import m from "mithril";
import User from "../models/User";

//SHOWS USER FORM

let UserForm: any = {
  oninit: (vnode: any) => {
    User.load(vnode.attrs.id);
  },
  view: () => {
    return m(
      "form",
      {
        /*TODO implement it*/
        onsubmit: (e: any) => {
          e.preventDefault();
          User.save();
        },
      },
      [
        m("label.label", "First name"),
        m("input.input[type=text][placeholder=First name]", {
          oninput: (e: any) => {
            User.current.firstName = e.target.value;
          },
          value: User.current.firstName,
        }),
        m("label.label", "Last name"),
        m("input.input[placeholder=Last name]", {
          oninput: (e: any) => {
            User.current.lastName = e.target.value;
          },
          value: User.current.lastName,
        }),
        m("button.button[type=button]", "Save"),
      ]
    );
  },
};

export default UserForm;
