// Libraries
import uuid from "react-uuid";
// Components
import Section from "./Section";
import Button from "./Button";

import SectionAbout from "./SectionAbout";

import testimonialsBg from "../images/restaurant-room.jpg";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PageTitle from "./SectionPageTitle";

export default function PageHome({ links }) {


  return (
    <>
      <PageTitle>
        <h1 className="light">
          Table-Ease<div>Jeddah</div>
        </h1>
        <p className="lead">
        Table-Ease is a reservation web application that
targets every small and medium-sized restaurant
who have struggled in effectively managing table
reservations
        </p>
        <Link to={links["Booking"]}>
          <Button>Reserve a table</Button>
        </Link>
      </PageTitle>

      <Section id="testimonials" bg={testimonialsBg} overlay="light">
        <h2>Testimonials</h2>
      </Section>
      <SectionAbout />
    </>
  );
}
