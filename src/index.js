import 'babel-polyfill';
import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/weak-map';
import 'core-js/es6/set';
import 'raf/polyfill';
import 'url-search-params-polyfill';
//entry: ["babel-polyfill","./src/index.js"] ,
import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/scss/material-dashboard-pro-react.css?v=1.1.0";
import App from "./App";

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);

// ReactDOM.render(
//         <Router history={hist}>
//             <div>
//             <Switch>
//                 {indexRoutes.map((prop, key) => {
//                     // if(prop.path=="/admin/login" && localStorage.getItem("token")!==""){
//                     //     return <Redirect from={prop.path} to={"/admin/home"} key={key}/>;
//                     // }
//                     return <Route path={prop.path} component={prop.component} key={key}/>;
//                 })}
//             </Switch>
//             </div>
//         </Router>,
//     document.getElementById("root")
// );