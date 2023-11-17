import React from "react";
import img from "../assets/about.svg";
import Button from "../layout/Button";
import Heading from "../layout/Heading";
import { Link } from "react-scroll";

function About() {
  return (
    <div>
      <div className="w-full md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
        <div className="w-full md:w-2/4">
          <img src={img} alt="about image" />
        </div>

        <div>
            <Heading title1="About" title2="Us?"/>
            <p className="text-lightText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi officia aliquam molestiae consequatur similique excepturi libero necessitatibus nam culpa consectetur.</p>

            <Link to="contact" spy={true} smooth={true} duration={500}>
                <Button title="Contact Us"/>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
