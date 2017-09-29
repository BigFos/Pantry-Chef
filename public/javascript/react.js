var React = require("react");
ReactDOM.render(React.createElement(
  "a",
  { id: "logout", href: "/logout", className: "btn btn-default btn-sm" },
  "Logout"
), document.getElementById('logoutbutton'));
    // ReactDOM.render(<a id="logout" href="/logout" className="btn btn-default btn-sm">Logout</a>, document.getElementById('logoutbutton'));