// App entry point
import m from 'mithril';


m.route(document.body, '/', {
  '/': //TODO ADD ROOT PAGE,
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
