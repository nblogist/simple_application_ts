// App entry point
import m from "mithril";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";
import Layout from "./views/Layout";

m.route(document.body, "/list", {
  "/list": {
    render: function () {
      return m(Layout, m(UserList));
    },
  },
  "/edit/:id": {
    render: function (vnode: any) {
      return m(Layout, m(UserForm, vnode.attrs));
    },
  },
});
///////////////////////////////////////////////////////////
// For browserify-hmr
// See browserify-hmr module.hot API docs for hooks docs.
declare const module: any; // tslint:disable-line no-reserved-keywords
if (module.hot) {
  module.hot.accept();
  // module.hot.dispose((data: any) => {
  // 	m.redraw();
  // })
}
///////////////////////////////////////////////////////////
