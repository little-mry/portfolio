import type { Volunteering as VolunteerType } from "../../types/nonprofit";

const VolunteerItem = ({
  period,
  description,
  organization,
}: VolunteerType) => {
  return (
    <article className="grid grid-cols-[6rem_1fr] gap-x-3 mb-4 rounded-md bg-zinc-200 dark:bg-zinc-700 p-2">
      <p className="text-base md:text-lg font-semiboldtext-black/70 dark:text-white/70">
        {period}
      </p>
      <p className="text-base md:text-lg font-semibold text-black/70 dark:text-white/70">{description}</p>

      {organization && (
        <p className="col-span-2 text-md text-black/70 dark:text-white/70">
          {organization}
        </p>
      )}
    </article>
  );
};

export default VolunteerItem;
