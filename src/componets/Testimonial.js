import React from "react";
import { Star, Play } from "lucide-react";

interface TestimonialCard {
  id: number;
  name: string;
  title: string;
  image: string;
}

const testimonials: TestimonialCard[] = [
  {
    id: 1,
    name: "Krish Bruynson",
    title: "Director, Storloft",
    image: "https://media.istockphoto.com/id/2172317014/photo/happy-hispanic-man-working-on-laptop-at-home.jpg?s=2048x2048&w=is&k=20&c=jJPw6z79N7HyqjrQcXravLUlk7JT-uOCoehbXc43Rco=",
  },
  {
    id: 2,
    name: "Krish Bruynson",
    title: "Director, Storloft",
    image: "https://media.istockphoto.com/id/2172317014/photo/happy-hispanic-man-working-on-laptop-at-home.jpg?s=2048x2048&w=is&k=20&c=jJPw6z79N7HyqjrQcXravLUlk7JT-uOCoehbXc43Rco=",
  },
  {
    id: 3,
    name: "Krish Bruynson",
    title: "Director, Storloft",
    image: "https://media.istockphoto.com/id/2172317014/photo/happy-hispanic-man-working-on-laptop-at-home.jpg?s=2048x2048&w=is&k=20&c=jJPw6z79N7HyqjrQcXravLUlk7JT-uOCoehbXc43Rco=",
  },
  {
    id: 4,
    name: "Krish Bruynson",
    title: "Director, Storloft",
    image: "https://media.istockphoto.com/id/2172317014/photo/happy-hispanic-man-working-on-laptop-at-home.jpg?s=2048x2048&w=is&k=20&c=jJPw6z79N7HyqjrQcXravLUlk7JT-uOCoehbXc43Rco=",
  },
];

export default function Testimonial() {
  return (
    <div className="w-full  py-12 px-4">
      <div className="max-w-7xl  bg-white p-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            What Our Clients Have To Say About Us
          </h2>
          <p className="text-gray-700 text-base">
            Take A Look At Our Simple And Straightforward Process To Hire Software
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col">

              {/* Image Section */}
              <div className="relative mb-4 rounded-lg overflow-hidden bg-gray-200 h-64 w-full">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center 
                  bg-black bg-opacity-0 hover:bg-opacity-30 
                  transition-all duration-300 cursor-pointer">
                  <div className="bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{testimonial.title}</p>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
