'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function AddPlayers(Props) {
  var onNameSubmit = Props.onNameSubmit;
  var match = React.useState((function () {
          return "";
        }));
  var setName = match[1];
  var name = match[0];
  var onChange = function (e) {
    return Curry._1(setName, e.target.value);
  };
  var onSubmit = function (e) {
    e.preventDefault();
    return Curry._1(onNameSubmit, name);
  };
  return React.createElement("div", {
              className: "flex flex-column items-center pa4",
              onSubmit: onSubmit
            }, React.createElement("div", {
                  className: "f1"
                }, "Add players"), React.createElement("form", {
                  className: "center pa4 br2-ns ba b--black-10"
                }, React.createElement("fieldset", {
                      className: "bn ma0 pa0"
                    }, React.createElement("legend", {
                          className: "pa0 f5 f4-ns mb3 black-80"
                        }, "What shall we call you?"), React.createElement("label", {
                          className: "clip"
                        }, "Name"), React.createElement("input", {
                          className: "f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid br2-ns br--left-ns",
                          id: "name",
                          name: "name",
                          placeholder: "Your Name",
                          type: "text",
                          value: name,
                          onChange: onChange
                        }), React.createElement("input", {
                          className: "f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer br2-ns br--right-ns",
                          type: "submit",
                          value: "Register"
                        }))));
}

var make = AddPlayers;

exports.make = make;
/* react Not a pure module */
