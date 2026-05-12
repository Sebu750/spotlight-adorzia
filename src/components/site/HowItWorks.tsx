
const STEPS = [
  { n: "01", t: "Apply Now — Free", d: "Applications are open immediately. Submit your portfolio and vision at no cost. Design file uploads open July 1." },
  { n: "02", t: "Top 100 Shortlist", d: "Internal screening selects the Top 100. Shortlisted candidates pay a one-time, non-refundable 5,000 PKR fee to proceed." },
  { n: "03", t: "Jury Selection", d: "Industry Creative Directors and a prestigious jury evaluate the Top 100 to select the Top 10 finalists." },
  { n: "04", t: "Runway & Launch", d: "Sept 14th finale. Top 10 showcase on the runway. Winner receives PKR 300K and a 1-year funded production partnership." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-16 md:py-32 border-b border-border">
      <div className="container-cut">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-14">
          <div>
            <span className="eyebrow">— The format</span>
            <h2 className="mt-3 text-4xl md:text-7xl">How it works.</h2>
          </div>
          <p className="font-serif text-foreground/70 max-w-sm text-sm md:text-base">
         No closed-door decisions. Every finalist is chosen through a transparent mix of jury expertise and public voting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-background p-6 md:p-8 lg:p-10 group hover:bg-primary transition-colors duration-300">
              <div className="font-mono text-xs tracking-[0.3em] text-primary group-hover:text-primary-foreground">STEP {s.n}</div>
              <h3 className="mt-4 md:mt-6 text-2xl md:text-4xl group-hover:text-primary-foreground">{s.t}</h3>
              <p className="mt-3 md:mt-4 font-serif text-foreground/70 group-hover:text-primary-foreground/90 leading-relaxed text-sm md:text-base">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
