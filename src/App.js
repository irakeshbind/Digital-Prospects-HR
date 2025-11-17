import React from "react";
import TopCom from "./componets/TopCom";
import Card from "./componets/Card";

import Software from "./componets/Software";
import StepCard from "./componets/StepCard";

import { Footer } from "./componets/Footer";
import Testimonial from "./componets/Testimonial";
import Header from "./componets/Header";

const App = () => {
  return (
    <div>
      {/* 1 */}
      <Header/>

      {/* 2 */}
      <TopCom />
      <Card />
      <Software />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
