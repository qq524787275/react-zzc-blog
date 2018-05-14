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
