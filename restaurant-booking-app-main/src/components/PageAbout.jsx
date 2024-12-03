import PageTitle from "./SectionPageTitle";
import Plaintext from "./SectionPlainText";
import SectionAbout from "./SectionAbout";

export default function PageAbout() {
  return (
    <>
      <PageTitle title={"About us"} />
      <Plaintext classes="lead">
      Table-Ease is a reservation web application that
      targets every small and medium-sized restaurant
      who have struggled in effectively managing table
      reservations
      </Plaintext>
      <SectionAbout bg="light" />
    </>
  );
}
