import framework from "../assets/investors/framework.svg";
import nascent from "../assets/investors/nascent.svg";
import geometry from "../assets/investors/geometry.svg";
import coinbase from "../assets/investors/coinbase.png";
import archetype from "../assets/investors/archetype.svg";
import lightspeed from "../assets/investors/lightspeed.svg";
import egirl from "../assets/investors/egirl.svg";
import folius from "../assets/investors/folius-2.svg";
import maven11 from "../assets/investors/maven11.svg";
import frc from "../assets/investors/4rc.svg";
import markCuban from "../assets/investors/mark-cuban.svg";

const investors = [
  {
    img: framework,
    name: "Framework",
    url: "https://framework.ventures/",
    height: "26px",
  },
  {
    img: nascent,
    name: "Nascent",
    url: "https://www.nascent.xyz/",
    height: "40px",
  },
  {
    img: geometry,
    name: "Geometry",
    url: "https://www.geometrydao.xyz/",
    height: "40px",
  },
  {
    img: coinbase,
    name: "Coinbase",
    url: "https://www.coinbase.com/",
    height: "36px",
  },
  {
    img: archetype,
    name: "Archetype",
    url: "https://www.archetype.fund/",
    height: "33px",
  },
  {
    img: lightspeed,
    name: "Lightspeed",
    url: "https://lsvp.com/",
    height: "53px",
  },
  {
    img: egirl,
    name: "EGirl",
    url: "https://www.egirlcapital.com/",
    height: "33px",
  },
  {
    img: folius,
    name: "Folius",
    url: "https://www.folius.ventures/",
    height: "40px",
  },
  {
    img: maven11,
    name: "Maven11",
    url: "https://www.maven11.com/",
    height: "19px",
  },
  {
    img: frc,
    name: "FRC",
    url: "https://www.fourthrevolution.capital/",
    height: "30px",
  },
  {
    img: markCuban,
    name: "Mark Cuban",
    url: "https://markcubancompanies.com/",
    height: "28 px",
  },
];

const angel = [
  {
    name: "Sandeep Nailwal",
    role: "Co-Founder, Polygon",
    url: "https://twitter.com/sandeepnailwal",
  },
  {
    name: "Jinglan Wan",
    role: "Co-Founder & CEO, Optimism",
    url: "https://twitter.com/jinglejamOP",
  },
  {
    name: "David Hoffman",
    role: "Bankless",
    url: "https://twitter.com/TrustlessState",
  },
  {
    name: "Ryan Sean Adams",
    role: "Bankless",
    url: "https://twitter.com/RyanSAdams",
  },
  {
    name: "0xMaki",
    role: "DeFi Legend",
    url: "https://twitter.com/0xMaki",
  },
  {
    name: "Robert Miller",
    role: "Flashbots",
    url: "https://twitter.com/bertcmiller",
  },
  {
    name: "Jaynti Kanani",
    role: "Co-Founder, Polygon",
    url: "https://twitter.com/_jdkanani",
  },
  {
    name: "40+ kickass backers"
  }
];

export const Investors = () => {
  return (
    <div className="pt-10 md:pt-20 px-5 md:px-0 container mx-auto">
      <h2 className="text-white text-2xl md:text-5xl font-bold text-center mb-10">
        Investors
      </h2>
      <div className="flex flex-wrap justify-center items-center md:py-12 bg-oc-theme-primary bg-opacity-90 rounded-lg">
      {investors.map((item, index) => {
          return (
            <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 h-24 inline-flex items-center justify-center">
              <a
                href={item.url}
                target="_blank"
                className="opacity-85 hover:opacity-100"
              >
                <img
                  src={item.img}
                  alt={`${item.name} logo`}
                  style={{ height: item.height }}
                  className="scale-75 sm:scale-100"
                />
              </a>
            </div>
          );
        })}
        </div>

      <h3 className="text-white text-xl md:text-4xl font-medium text-center mb-10 mt-20">
        Selected Angel Investors
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-14 bg-black bg-opacity-30 rounded-lg">
        {angel.map((item, index) => {
            return (
          <a
            href={item.url}
            target="_blank"
            key={`angel-${index}`}
            className="opacity-80 hover:opacity-100 text-white flex flex-col justify-center items-center mb-8 sm:mb-14 scale-75 sm:scale-100"
          >
            <span className="text-2xl font-medium text-center">{item.name}</span>
            <span className="text-sm text-gray-200 text-center">{item.role}</span>
          </a>)
        })}
      </div>
    </div>
  );
};
