import React from "react";
import Image from "next/image";
import "./testimonials.css";

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
    <section id="testimonials" >
      <div className="text-primary py-10 px-2">
        <div className="container mx-auto">
          <h2 className=" text-center font-primary uppercase text-3xl font-bold tracking-wide text-highlight md:text-4xl mb-10">
            Depoimentos
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-2  ">
            {randomTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl p-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-secondary mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6 text-primary font-secondary text-sm">
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
                    <p className="font-medium text-sm font-secondary text-secondary">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-secondary font-secondary">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
