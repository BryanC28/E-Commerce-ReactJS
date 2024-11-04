import React from "react";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

import bgBanner from "../../assets/images/contact-banner.jpg";
import aboutImg from "../../assets/images/about-img.jpg";
import aboutImg2 from "../../assets/images/about-img-2.jpg";
import team1 from "../../assets/images/team/team-1.jpg";
import team2 from "../../assets/images/team/team-2.jpg";
import team3 from "../../assets/images/team/team-3.jpg";
import team4 from "../../assets/images/team/team-4.jpg";
import brand1 from "../../assets/images/brands/brand1.png";
import brand2 from "../../assets/images/brands/brand2.png";
import brand3 from "../../assets/images/brands/brand3.png";
import brand4 from "../../assets/images/brands/brand4.png";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import Team from "./team";
const aboutUs = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat py-36"
        style={{ backgroundImage: `url(${bgBanner})` }}
      >
        <div className="container">
          <h1 className="text-4xl text-white text-center font-medium mb-4 uppercase">
            about us
          </h1>
          <div className="items-center justify-center flex space-x-2">
            <Link to={"/"} className="text-primary text-base">
              <FontAwesomeIcon icon={faHome} />
            </Link>
            <FontAwesomeIcon
              className="text-sm text-white"
              icon={faChevronRight}
            />
            <NavLink
              to={"/aboutus"}
              className={({ isActive }) =>
                isActive
                  ? "text-medium text-primary capitalize"
                  : "text-medium text-white capitalize"
              }
            >
              about us
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container grid md:grid-cols-12 grid-cols-1 py-14 gap-4">
        <div className="md:col-span-7 col-span-12 pr-3 space-y-3">
          <h4 className="text-primary font-semibold uppercase">our history</h4>
          <h2 className="text-gray-800 text-2xl font-medium uppercase">
            creative and new fashion <br />
            trends collection
          </h2>
          <p className="mb-4 text-gray-700 text-base">
            Fashion is a potent visual marker of our times,” says Caroline
            Stevenson, head of cultural and ... “Trend analysis of any given era
            will reveal society's values and aspirations.” ... The urge to
            creative expression runs deep
          </p>
          <div className="flex pt-2">
            <div className="block">
              <h4 className="mb-1 text-4xl font-medium text-primary">12</h4>
              <p className="mb-0 capitalize text-gray-600 text-base">
                Years Exprience
              </p>
            </div>
            <div className="block mx-11">
              <h4 className="mb-1 text-4xl font-medium text-primary">20K</h4>
              <p className="mb-0 capitalize text-gray-600 text-base">
                Happy Customer
              </p>
            </div>
            <div className="block mx-11">
              <h4 className="mb-1 text-4xl font-medium text-primary">100%</h4>
              <p className="mb-0 capitalize text-gray-600 text-base">
                Clients Satisfaction
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 col-span-12 pl-3">
          <div className="block">
            <img src={aboutImg} alt="about" className="w-full" />
          </div>
        </div>
      </div>
      <div className="container grid md:grid-cols-12 grid-cols-1 pb-14 gap-4">
        <div className="md:col-span-5 col-span-12 pr-3">
          <div className="block">
            <img src={aboutImg2} alt="about" className="w-full" />
          </div>
        </div>
        <div className="md:col-span-7 col-span-12 pl-3 space-y-3">
          <h4 className="text-primary font-semibold uppercase">our vision</h4>
          <h2 className="text-gray-800 text-2xl font-medium uppercase">
            Our vision is simple - We exist to <br />
            accelerate our customers’ progress
          </h2>
          <p className="mb-4 text-gray-700 text-base">
            we design and deliver our customers’ digital transformation by
            bringing together their vision with our industry knowledge and deep
            technological expertise. we design and deliver our customers’
            digital transformation
          </p>
          <div className="space-y-4">
            <p className="mb-2">
              <FontAwesomeIcon
                className="text-primary pr-2"
                icon={faThumbsUp}
              />
              <span className=" text-gray-600 text-base">
                We build strong relationships
              </span>
            </p>
            <p className="mb-2">
              <FontAwesomeIcon
                className="text-primary pr-2"
                icon={faThumbsUp}
              />
              <span className=" text-gray-600 text-base">
                We encourage initiative and provide opportunity
              </span>
            </p>
            <p className="mb-2">
              <FontAwesomeIcon
                className="text-primary pr-2"
                icon={faThumbsUp}
              />
              <span className=" text-gray-600 text-base">
                We embrace change and creativity
              </span>
            </p>
            <p className="mb-2">
              <FontAwesomeIcon
                className="text-primary pr-2"
                icon={faThumbsUp}
              />
              <span className=" text-gray-600 text-base">
                We champion an environment of honesty
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="container pb-14">
        <h3 className="text-center text-gray-800 uppercase font-medium text-3xl mb-6">
          meet with our team
        </h3>
        <div className="grid md:grid-cols-12 md:gap-8 gap-4 grid-cols-6 ">
          <Team
            img={team1}
            to={"#"}
            name={"jane cooper"}
            position={"founder"}
          />
          <Team
            img={team2}
            to={"#"}
            name={"esther howard"}
            position={"team leader"}
          />
          <Team
            img={team4}
            to={"#"}
            name={"kristin watson"}
            position={"senior officer"}
          />
          <Team
            img={team3}
            to={"#"}
            name={"arlene mcCoy"}
            position={"marketing officer"}
          />
        </div>
      </div>
      <div className="container pb-14">
        <h3 className="text-center text-gray-800 uppercase font-medium text-3xl">
          our partners
        </h3>
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <img src={brand1} alt="brands" className="w-full" />
          </div>
          <div className="col-span-2">
            <img src={brand2} alt="brands" className="w-full" />
          </div>
          <div className="col-span-2">
            <img src={brand4} alt="brands" className="w-full" />
          </div>
          <div className="col-span-2">
            <img src={brand3} alt="brands" className="w-full" />
          </div>
          <div className="col-span-2">
            <img src={brand1} alt="brands" className="w-full" />
          </div>
          <div className="col-span-2">
            <img src={brand3} alt="brands" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutUs;
