const DATES = [
  { d: "Open Now", t: "Applications Open", note: "Submit your portfolio and design vision today. No fee to apply.", urgent: true },
  { d: "July 1", t: "Design File Submission Opens", note: "Upload window for full design files goes live." },
  { d: "July 15", t: "Application Deadline", note: "Final entry cutoff. All design files must be submitted by this date." },
  { d: "August 10", t: "Top 100 Announced", note: "Shortlisted candidates pay a non-refundable 5,000 PKR fee to proceed to jury review." },
  { d: "September 14", t: "The Grand Runway", note: "Live finale, Top 10 showcase, and winner announcement." },
];

export function Dates() {
  return (
    <section id="dates" className="py-16 md:py-32 border-b border-border bg-surface">
      <div className="container-cut">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-14">
          <div>
            <span className="eyebrow">— Calendar</span>
            <h2 className="mt-3 text-4xl md:text-7xl">Key dates.</h2>
          </div>
          <a href="#apply" className="btn-cut text-sm md:text-base">
            <span className="label">Start your application</span>
            <span className="label-alt">June 1st Launch</span>
          </a>
        </div>

        <ol className="border-t border-border">
          {DATES.map((d) => (
            <li key={d.t} className="grid grid-cols-12 gap-3 md:gap-8 py-5 md:py-8 border-b border-border items-start md:items-center">
              <div className={`col-span-12 md:col-span-2 display text-xl md:text-4xl ${d.urgent ? "text-primary" : ""}`}>{d.d}</div>
              <div className="col-span-12 md:col-span-6 display text-lg md:text-2xl">{d.t}</div>
              <div className="col-span-12 md:col-span-4 font-serif text-foreground/65 text-sm md:text-base">{d.note}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
