import { dataFAQ } from "./dataFAQ";
import { FaqCard } from "./FaqCard";

export const FaqAccordion = () => {
  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 lg:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Officia aliquip fugiat sit consequat culpa laboris excepteur aute nisi
          Lorem.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {dataFAQ.map((item, index) => (
          <FaqCard key={index} faqsList={item} />
        ))}
      </div>
    </section>
  );
};
