[@react.component]
let make = (~onNameSubmit: (~n: string) => unit) => {
  let (name, setName) = React.useState(() => "");

  let onChange = (e: ReactEvent.Form.t): unit => {
    let value = e->ReactEvent.Form.target##value;
    setName(value);
  };

  let onSubmit = (e: ReactEvent.Form.t): unit => {
    ReactEvent.Form.preventDefault(e);
    onNameSubmit(name);
  };

  <div className="flex flex-column items-center pa4" onSubmit>
    <div className="f1"> {ReasonReact.string("Add players")} </div>
    <form className="center pa4 br2-ns ba b--black-10">
      <fieldset className="bn ma0 pa0">
        <legend className="pa0 f5 f4-ns mb3 black-80">
          {ReasonReact.string("What shall we call you?")}
        </legend>
        <label className="clip"> {ReasonReact.string("Name")} </label>
        <input
          className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid br2-ns br--left-ns"
          placeholder="Your Name"
          type_="text"
          name="name"
          value=name
          id="name"
          onChange
        />
        <input
          className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer br2-ns br--right-ns"
          value="Register"
          type_="submit"
        />
      </fieldset>
    </form>
  </div>;
};
