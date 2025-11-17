import StepCard from "./StepCard";
import { HelpCircle } from "lucide-react";

export default function Card() {
  const steps = [
    {
      number: 1,
      title: "INQUIRY",
      description: "Lorem ipsum is simply dummy text of the printing industry.",
      image:
        "https://media.istockphoto.com/id/2172317014/photo/happy-hispanic-man-working-on-laptop-at-home.jpg?s=2048x2048&w=is&k=20&c=jJPw6z79N7HyqjrQcXravLUlk7JT-uOCoehbXc43Rco=",
    },
    {
      number: 2,
      title: "Select Developers",
      description:
        "Lorem ipsum is simply dummy text of the printing industry..",
      image:
        "https://media.istockphoto.com/id/2172317014/photo/happy-hispanic-man-working-on-laptop-at-home.jpg?s=2048x2048&w=is&k=20&c=jJPw6z79N7HyqjrQcXravLUlk7JT-uOCoehbXc43Rco=",
    },
    {
      number: 3,
      title: "Team Integration",
      description: "Lorem ipsum is simply dummy text of the printing industry.",
      image:
        "https://media.istockphoto.com/id/2172317014/photo/happy-hispanic-man-working-on-laptop-at-home.jpg?s=2048x2048&w=is&k=20&c=jJPw6z79N7HyqjrQcXravLUlk7JT-uOCoehbXc43Rco=",
    },
    {
      number: 4,
      title: "Team Scaling",
      description: "Lorem ipsum is simply dummy text of the printing industry.",
      image:
        "https://media.istockphoto.com/id/2172317014/photo/happy-hispanic-man-working-on-laptop-at-home.jpg?s=2048x2048&w=is&k=20&c=jJPw6z79N7HyqjrQcXravLUlk7JT-uOCoehbXc43Rco=",
    },
  ];

  return (
    <div className=" text-center mt-10 mb-5">
      <h1 className="font-bold text-5xl">Our Hiring Process</h1>
      <p className="mt-5">
        Take a look at our simple and straightforward process to hire software
        developers from ValueCoders.
      </p>

      <div className="relative w-full max-w-7xl mx-auto mt-20 px-4 ">
        {/* Step Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 md:gap-10 place-items-center ">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              image={step.image}
              icon={
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                    <HelpCircle
                      className="w-10 h-10 text-gray-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="w-12 h-8 bg-gray-200 rounded-t-2xl" />
                </div>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
