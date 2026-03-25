import { useTranslation } from "react-i18next";
import skills from "../data/skills.json";

const Skillset = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <div className="max-w-[80vw] mx-auto min-h-[90vh] py-8">
        <h2 className="mb-6 lg:mb-16 text-5xl font-regular flex items-baseline gap-4 after:content-[''] after:flex-1 after:h-px after:bg-current">
          {t("skillset.title")}
        </h2>
        <section className="flex flex-col md:flex-row gap-6 w-full ">
          {skills.programming.map((group, index) => (
            <div key={group.category} className="flex-1 basis-0 min-w-0 rounded-md bg-stone-200 dark:bg-zinc-800 p-6 md:p-8">
              <h3 className="text-xl font-bold uppercase mb-2">
                {t(`skillset.category_${index}`)}
              </h3>
              <div className="flex flex-col gap-2 my-3">
                {group.items.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-md text-lg font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Skillset;
