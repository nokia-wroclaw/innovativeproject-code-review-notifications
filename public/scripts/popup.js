"use strict";

var template = React.createElement(
  "main",
  null,
  React.createElement(
    "header",
    null,
    React.createElement("img", { src: "images/logo_128.png", "class": "logo" })
  ),
  React.createElement(
    "div",
    { id: "content" },
    React.createElement(
      "h4",
      null,
      "List of latest notifications:"
    ),
    React.createElement(
      "div",
      { "class": "notify" },
      React.createElement(
        "b",
        null,
        "Title"
      ),
      React.createElement(
        "span",
        { "class": "date" },
        "28 Oct"
      ),
      React.createElement("br", null),
      "Some text here"
    ),
    React.createElement(
      "div",
      { "class": "notify" },
      React.createElement(
        "b",
        null,
        "Title 2"
      ),
      React.createElement(
        "span",
        { "class": "date" },
        "28 Oct"
      ),
      React.createElement("br", null),
      "Another text here"
    )
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
