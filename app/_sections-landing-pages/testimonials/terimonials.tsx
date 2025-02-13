import React from "react";
import Image from "next/image";

const testimonialsData = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque semper elit non pellentesque. Curabitur neque arcu, efficitur facilisis porta at, feugiat ut est. Vivamus sed dui in dui vehicula congue. Phasellus sed pellentesque nisi. Phasellus tempus bibendum massa ut tincidunt. Nam hendrerit ut tortor eget rutrum. Suspendisse facilisis ante eget fringilla auctor. Nam a odio orci. Pellentesque imperdiet quis sem",
    name: "Jon Doe",
    role: "DESIGNER",
    image: "https://dummyimage.com/110x110",
  },
  {
    id: 2,
    text: "Fusce pharetra eget augue ac condimentum. Fusce dictum ex mauris, porta semper mi malesuada dictum. Donec congue ipsum diam. Donec eu tellus laoreet, iaculis mi sit amet, ultricies nulla. Maecenas orci metus, gravida et sodales eget, varius nec nibh. Suspendisse eget lorem blandit, sodales est eget, efficitur erat. Pellentesque feugiat velit in ante tincidunt, sed fringilla dui dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam sit amet ipsum viverra, bibendum odio vel, tempus arcu.",
    name: "Jane Doe",
    role: "DESIGNER",
    image: "https://dummyimage.com/110x110",
  },
  {
    id: 3,
    text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    name: "Alice Smith",
    role: "DEVELOPER",
    image: "https://dummyimage.com/110x110",
  },
  {
    id: 4,
    text: "Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod.",
    name: "Bob Johnson",
    role: "MANAGER",
    image: "https://dummyimage.com/110x110",
  },
  {
    id: 5,
    text: "Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
    name: "Charlie Brown",
    role: "ENGINEER",
    image: "https://dummyimage.com/110x110",
  },
  {
    id: 6,
    text: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
    name: "Diana Prince",
    role: "ARCHITECT",
    image: "https://dummyimage.com/110x110",
  },
  {
    id: 7,
    text: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
    name: "Eve Adams",
    role: "DESIGNER",
    image: "https://dummyimage.com/110x110",
  },
  {
    id: 8,
    text: "Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.",
    name: "Frank Wright",
    role: "DEVELOPER",
    image: "https://dummyimage.com/110x110",
  },
  {
    id: 9,
    text: "Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    name: "Grace Lee",
    role: "MANAGER",
    image: "https://dummyimage.com/110x110",
  },
  {
    id: 10,
    text: "Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum.",
    name: "Henry Ford",
    role: "ENGINEER",
    image: "https://dummyimage.com/110x110",
  },
];

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  image: string;
}

const getRandomTestimonials = (
  data: Testimonial[],
  count: number
): Testimonial[] => {
  const shuffled = data.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Testimonials: React.FC = () => {
  const randomTestimonials = getRandomTestimonials(testimonialsData, 2);

  return (
    <section
      id="testimonials"
      className="text-primary font-secondary body-font bg-gradient-to-b from-primary to-black py-10 px-2"
    >
      <div className="container mx-auto">
      <h2 className=" text-center font-primary uppercase text-3xl font-bold tracking-wide text-textPrimary md:text-4xl py-6">
           Depoimentos
          </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-2"> 
          {randomTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl p-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M...Z" />
              </svg>
              <p className="leading-relaxed mb-6 text-gray-700">
                {testimonial.text}
              </p>
              <div className="flex items-center space-x-4">
                <Image
                  alt={`Imagem de ${testimonial.name}`}
                  src={testimonial.image}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
