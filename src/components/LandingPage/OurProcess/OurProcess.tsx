const OurProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: "Consultation",
      description:
        "We begin with a comprehensive understanding of your political objectives and challenges.",
    },
    {
      id: 2,
      title: "Research & Analysis",
      description:
        "We conduct extensive research to gain insights into voter behavior, political trends, and opposition strategies.",
    },
    {
      id: 3,
      title: "Strategy Development",
      description:
        "We work with you to create a tailored strategy that aligns with your goals, values, and message.",
    },
    {
      id: 4,
      title: "Execution",
      description:
        "Our team implements the campaign with precision, using media relations, digital outreach, and voter engagement techniques.",
    },
    {
      id: 5,
      title: "Monitoring and Optimization",
      description:
        "We continuously monitor the campaign's success and make data-driven adjustments to ensure ongoing effectiveness.",
    },
  ];

  return (
    <div className="bg-primary/90 text-white px-8 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Process</h1>
          <p className="text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
            Our methodology ensures that every campaign is strategically
            planned, effectively executed, and continually optimized for
            success.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <div key={step.id} className="flex items-start gap-8">
              <div className="flex flex-col items-center">
                <div className="text-5xl md:text-8xl font-bold text-white/30 leading-none">
                  {step.id.toString().padStart(2, "0")}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="w-1 h-24 bg-white/30 mt-4"></div>
                )}
              </div>
              <div className="flex-1 pt-2 md:pt-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {step.title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
