import React from "react";
import Socials from "./SocialsLinks"

class Footer extends React.Component {
  render() {
    return (
      <div className="py-12 text-center">
        <div>
          <div>
            <div className="wrapper">2020 ©</div>
          </div>
          <Socials />
        </div>
      </div>
    );
  }
}

export default Footer;
