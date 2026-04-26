export default function Features() {
  const services = [
    {
      id: "service-telehealth",
      title: "Telehealth Pro",
      description: "Instant video consultations with world-class specialists from any mobile device.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 10l5 5-5 5" /><path d="M4 4v7a4 4 0 0 0 4 4h12" />
        </svg>
      ),
      color: "bg-primary/10 text-primary",
      span: "md:col-span-2"
    },
    {
      id: "service-monitoring",
      title: "Real-time Monitoring",
      description: "Connect your wearables for continuous health tracking and emergency alerts.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      color: "bg-secondary/10 text-secondary",
      span: "md:col-span-1"
    },
    {
      id: "service-records",
      title: "Secure Records",
      description: "Your entire medical history encrypted and accessible instantly when you need it.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      color: "bg-accent-blue/10 text-accent-blue",
      span: "md:col-span-1"
    },
    {
      id: "service-global",
      title: "Global Network",
      description: "Seamless healthcare connectivity across 330+ cities worldwide.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
        </svg>
      ),
      color: "bg-primary/10 text-primary",
      span: "md:col-span-2"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-foreground opacity-70 max-w-2xl mx-auto">
            Advanced medical infrastructure simplified for everyday use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              id={service.id}
              className={`bento-card flex flex-col justify-between group ${service.span}`}
            >
              <div>
                <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-foreground opacity-70 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-8 flex items-center text-sm font-bold text-primary cursor-pointer">
                Learn more
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
