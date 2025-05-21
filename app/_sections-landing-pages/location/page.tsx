const LocationPage = () => {
  return (
    <div className="w-full h-[35vh] bg-primary flex items-center justify-center relative">
      <div className="absolute inset-0 bg-black opacity-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.5261884714596!2d-43.9224433!3d-19.944361699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6329e187aab557b%3A0x38da183254454fbb!2sItalo%20Moreira%20%7C%20Advocacia%20C%C3%ADvel%20e%20Criminal!5e0!3m2!1spt-BR!2sbr!4v1747786612754!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationPage;
