import React from "react";
import TopCom from "./componets/TopCom";
import Card from "./componets/Card";

import Software from "./componets/Software";
import StepCard from "./componets/StepCard";

import { Footer } from "./componets/Footer";
import Testimonial from "./componets/Testimonial";

const App = () => {
  return (
    <div>
      <TopCom />
      <Card />
      <Software />

      <Testimonial />

      <Footer />
    </div>
  );
};

export default App;
