const skillItems = [
  "Typescript",
  "React",
  "Node.js",
  "Express",
  "SQL",
  "NoSQL",
  "AWS",
  "CI/CD",
  "SASS",
  "Tailwind",
  "Git",
  "Scrum",
];

const Skillset = () => {
  return (
    <>
      <h2 className="mb-6 text-3xl font-semibold text-center">Skillset</h2>
      <section>
        {" "}
        <ul
          className="pt-2 list-none pl-0
            grid grid-cols-3 md:grid-cols-2
            gap-x-5 gap-y-0.5
            text-lg leading-relaxed"
        >
          {skillItems.map((item) => (
            <li key={item} className="py-0.5">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Skillset;
