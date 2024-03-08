// import React from "react";
import SectionWrapper from "../Wrapper/SectionWrapper";
import cta from "../../assets/png/CTA.png";

const Login = () => {
  return (
    <SectionWrapper>
      <div className="flex">
        <div className="height-[100vh]">
          <img src={cta} width={747} height={747} alt="cta coaching" />
        </div>
        <div></div>
      </div>
    </SectionWrapper>
  );
};

export default Login;
