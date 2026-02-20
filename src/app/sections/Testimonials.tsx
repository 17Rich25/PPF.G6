// React automatic runtime is enabled; no default React import needed
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WSection, WBox, Annotation } from "../components/WireframeComponents";

const testimonials = [
  {
    name: "Alex Obanwa",
    role: "Product Manager",
    text: "Working with this developer was a game-changer. They understood the requirements perfectly and delivered ahead of schedule.",
  },
  {
    name: "James Chukwuma",
    role: "Designer",
    text: "Incredible attention to detail. The implementation matched my designs pixel-for-pixel, and the animations added so much life.",
  },
  {
    name: "Daniel Ogunyomi",
    role: "Brand Marketer",
    text: "A true professional. Technical skills are top-notch, but the communication and problem-solving abilities are what set them apart.",
  },
];

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <WSection id="testimonials" title="REVIEWS" className="bg-white">
      <div className="max-w-4xl mx-auto text-center relative">
        <Annotation text="These are only a few of our clients" position="top-0 left-0" rotate="rotate-6" />
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-4 py-12 focus:outline-none">
              <div className="relative">
                <span className="absolute top-0 left-0 text-9xl text-gray-100 font-serif leading-none -z-10 select-none">
                  “
                </span>
                <p className="text-2xl md:text-4xl font-light italic leading-relaxed mb-8">
                  {t.text}
                </p>
                <div className="flex flex-col items-center">
                  <WBox className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-black">
                     <div className="w-full h-full bg-gray-200 flex items-center justify-center font-bold">
                        {t.name[0]}
                     </div>
                  </WBox>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </WSection>
  );
};
