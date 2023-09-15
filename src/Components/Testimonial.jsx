import React from "react";

const Testimonial = () => {
  return (
    <>
      <div id="testimonial">
        <h2>Testimonial.</h2>
        <section>
          <TestimonialCard name={"Yauvan"} feedback={"My Web are so Good."} />

          <TestimonialCard
            name={"Ramzi"}
            feedback={"Wow Your Code are so Good"}
          />

          <TestimonialCard
            name={"Abhishek"}
            feedback={"Your Teach skills are so good."}
          />
        </section>
      </div>
    </>
  );
};
const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="user"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
