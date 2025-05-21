import "./style.css";
const GoogleRatingPage = () => {
  return (
    <section className="h-fit bg-primary">
      <div className="flex flex-col items-center justify-center ">
        <h3 className="text-xl md:text-2xl  font-primary font-bold text-highlight mt-8 tracking-wide uppercase">
          Depoimentos
        </h3>
        <div
          className="elfsight-app-5edc1226-29cd-4d3d-9e05-e8cafd03edb6 depoiment-box p-4 w-full max-w-full overflow-x-hidden"
          data-elfsight-app-lazy
          
        ></div>
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>
      </div>
    </section>
  );
};

export default GoogleRatingPage;
