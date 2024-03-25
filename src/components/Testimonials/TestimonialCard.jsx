const TestimonialCard = ({ testimonial }) => {
  const { img, name, opinion } = testimonial;
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <p className="text-white leading-normal mb-4 text-sm text-center">
        {opinion}
      </p>
      <div className="flex flex-col gap-4">
        <img src={img} alt={name} className="rounded-full h-[100px]" />
        <p className="font-bold text-white">{name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
