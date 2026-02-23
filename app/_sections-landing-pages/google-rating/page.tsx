import "./style.css";

const GoogleRatingPage = () => {
  return (
    <section id="testimonials" className="w-full bg-gradient-to-b from-slate-900 to-primary py-6">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto px-6 lg:px-8">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-4 mt-4">
          <span className="block w-8 h-px bg-highlight" aria-hidden="true" />
          <span className="text-highlight font-secondary text-xs uppercase tracking-[0.25em]">
            Opiniões dos Clientes
          </span>
          <span className="block w-8 h-px bg-highlight" aria-hidden="true" />
        </div>

        <h2 className="text-center font-primary text-white text-3xl md:text-4xl font-bold tracking-wide mb-2">
          Depoimentos
        </h2>

        <div
          className="elfsight-app-5edc1226-29cd-4d3d-9e05-e8cafd03edb6 depoiment-box p-4 w-full max-w-full overflow-x-hidden"
          data-elfsight-app-lazy
        />
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        />
      </div>
    </section>
  );
};

export default GoogleRatingPage;
