export default function Testimonials() {
  const reviews = [
    {
      id: "testimonial-1",
      name: "Robert Chen",
      role: "Global Traveler",
      content: "Health Metro saved me during my trip to Tokyo. Instant access to my records and a quick consultation made all the difference.",
      avatar: "RC"
    },
    {
      id: "testimonial-2",
      name: "Sarah Miller",
      role: "Parent",
      content: "As a busy parent, having my children's health data and a doctor just one click away gives me immense peace of mind.",
      avatar: "SM"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Trusted by Thousands</h2>
          <p className="text-lg text-foreground opacity-70 max-w-2xl mx-auto">
            See why people around the world rely on Health Metro for their connectivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              id={review.id}
              className="bg-white p-8 rounded-2xl border border-border flex flex-col gap-6"
            >
              <p className="text-lg italic text-foreground opacity-90 leading-relaxed">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-bold text-foreground">{review.name}</div>
                  <div className="text-sm opacity-60 font-medium">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
