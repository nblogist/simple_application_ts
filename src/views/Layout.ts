// src/views/Layout.js
import m from "mithril";

let Layout: any = {
  view: function (vnode: any) {
    return m("main.layout", [
      m("nav.menu", [m(m.route.Link, { href: "/list" }, "Users")]),
      m("section", vnode.children),
    ]);
  },
};
export default Layout;
