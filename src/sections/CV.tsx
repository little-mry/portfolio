/* import work from "../data/work.json";
import education from "../data/education.json";
import volunteering from "../data/nonprofit.json";

import type { Work as WorkType } from "../types/work";
import type { Education as EducationType } from "../types/education";
import type { Volunteering as VolunteerType } from "../types/nonprofit";

import WorkItem from "../components/CV/WorkItem";
import EducationItem from "../components/CV/EducationItem";
import SkillItem from "../components/CV/SkillsItem";
import VolunteerItem from "../components/CV/VolunteerItem";

const CV = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto min-h-[90vh] px-4 lg:px-10">
          <h2 className="mb-6 lg:mb-16 text-5xl font-regular text-center">
         CV
        </h2>
        <section className="w-full columns-1 md:columns-2 gap-6">
          <article className="break-inside-avoid rounded-md bg-zinc-300 dark:bg-zinc-800 p-4 mb-4">
            <h3 className="mb-6 text-2xl font-semibold ">
              Arbetslivserfarenhet
            </h3>
            {(work as WorkType[]).map((w) => (
              <WorkItem key={w.title + w.period} {...w} />
            ))}
          </article>
          <article className=" break-inside-avoid rounded-md bg-zinc-300 dark:bg-zinc-800 p-4 mb-4">
            <h3 className="mb-6 text-2xl font-semibold ">Utbildning</h3>
            {(education as EducationType[]).map((e) => (
              <EducationItem key={e.title} {...e} />
            ))}
          </article>

          <article className="break-inside-avoid rounded-md bg-zinc-300 dark:bg-zinc-800 p-4 mb-4">
            <h3 className="mb-6 text-2xl font-semibold ">Ideella åtaganden</h3>
            {(volunteering as VolunteerType[]).map((v) => (
              <VolunteerItem key={v.organization + v.period} {...v} />
            ))}
          </article>

          <article className="break-inside-avoid rounded-md bg-zinc-300 dark:bg-zinc-800 p-4 mb-4">
            <h3 className="mb-6 text-2xl font-semibold">Övriga skills</h3>
            <SkillItem />
          </article>
        </section>
      </div>
    </section>
  );
};

export default CV;
 */