"use client";

const Experiences = () => {
  return (
    <section id="experiences" className="py-20" data-aos="fade-up">
      <div className="container mx-auto">
        <h3 className="text-3xl mb-4">My Experiences</h3>
        <ul className="space-y-4">
          <li className="border-l-2 border-glowinglime pl-4">
            <h4 className="text-xl font-semibold">Job Title - Company</h4>
            <p>Brief description of your role and accomplishments.</p>
          </li>
          {/* Repeat for more experiences */}
        </ul>
      </div>
    </section>
  );
};

export default Experiences;
