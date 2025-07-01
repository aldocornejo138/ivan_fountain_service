// src/components/faq/Faq.js
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Faq.css";

const faqData = [
  {
    question: "What materials are your fountains made of?",
    answer:
      "Our fountains are made of quality concrete and custom stone that is stained, painted, or washed with natural earth-tone colors. Unlike other materials which will start to break down after a time when exposed to the elements, our products are designed to be both beautiful and long-lasting.",
  },
  {
    question:
      "Will I need to install any special plumbing for my new fountain?",
    answer:
      "No, we use recirculating pumps in all of our fountains. You will need, however, a 110v GFCI outlet within 10ft to plug the pump into.",
  },
  {
    question: "Do I need to pour a concrete pad for my fountain?",
    answer:
      "While it's not necessary, it mainly depends on the style of fountain and the stability of the ground where the fountain will be placed. Make sure that your fountain is placed on a firm, level surface that will remain that way even when it becomes wet from rain or splash.",
  },
  {
    question:
      "I'm losing an excessive amount of water, how often do I need to fill my fountain?",
    answer:
      "Your fountain may lose water due to evaporation and splash. Some fountains tend to splash more than others, and therefore must be refilled more often, due to this and weather conditions you may be required to add water often as twice a week or sometimes even daily.\n\nIf you think that your fountain is losing an excessive amount of water you can check for cracks by filling your fountain to the brim and not operating it for 24 hours. You'll know if your fountain is leaking if the water level is significantly lower and the ground around your fountain is wet. If there's no moisture after 24 hours, do you have pets? You could be losing water due to thirsty animals.",
  },
  {
    question: "The water in my fountain looks a little green, why is that?",
    answer:
      "Due to algae growth, the water in your fountain will turn green. This occurs in all fountains, especially when the weather warms up. You can use water treatments such as FOUNTEC to prevent the growth; this product needs to be applied periodically according to the instructions. It's safe for birds or animals, however, it's NOT safe for fish!\n\nOn another note, it's not recommended to use chlorine as a cleaner as it can damage your pump and the color of your fountain.",
  },
  {
    question:
      "There's a white residue that's starting to appear on my fountain, why is that?",
    answer:
      "Due to the temperature and evaporation, a buildup of white residue on the fountain's surface may appear. This is hard water buildup due to mineral content in the water supply. To prevent such buildup, we recommend the use of Protec.",
  },
  {
    question: "How often should I clean my fountain?",
    answer:
      "Fountains should be cleaned once a month; this is done by draining the water and scrubbing the fountain with a plastic brush, sponge, or rag. When finished, refill the fountain and add Protec and your algae prevention of choice.",
  },
  {
    question: "Safety: ",
    answer:
      "NEVER LET THE FOUNTAIN RUN DRY!! Lack of water will burn out the pump.",
  },
];
// Create a separate component for FAQ items
const FaqItem = ({ item, index, activeIndex, toggleAccordion }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: index * 50,
  });

  return (
    <div
      ref={ref}
      key={index}
      className={`faq-item ${inView ? "visible" : ""} ${
        activeIndex === index ? "active" : ""
      }`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div className="faq-question" onClick={() => toggleAccordion(index)}>
        <div className="question-text">{item.question}</div>
        <div className={`chevron ${activeIndex === index ? "open" : ""}`}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#4facfe"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
        {item.answer.split("\n\n").map((paragraph, i) => (
          <p key={i} className="answer-paragraph">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

const Faq = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div
        ref={headerRef}
        className={`faq-header ${headerInView ? "visible" : ""}`}
      >
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our fountain services</p>
        <div className="header-wave"></div>
      </div>

      <div ref={containerRef} className="faq-container">
        {faqData.map((item, index) => (
          <FaqItem
            key={index}
            item={item}
            index={index}
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
