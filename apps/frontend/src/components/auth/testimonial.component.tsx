'use client';

const highlights = [
  {
    title: 'Built for scheduling',
    description:
      'Plan, organize, and publish social content from one workspace.',
  },
  {
    title: 'Flexible setup',
    description:
      'Use DiscoPost with your own workflow and connect the channels you need.',
  },
  {
    title: 'Simple collaboration',
    description:
      'Keep content, drafts, and publishing steps in one place for your team.',
  },
  {
    title: 'Practical tools',
    description:
      'Manage posts, media, and publishing tasks without extra complexity.',
  },
];

export const TestimonialComponent = () => {
  return (
    <div className="w-full my-[30px] max-w-[850px] px-[40px]">
      <div className="grid grid-cols-2 gap-[12px]">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-[16px] border border-white/10 bg-white/5 p-[20px] text-left"
          >
            <div className="text-[18px] font-[600]">{item.title}</div>
            <div className="mt-[8px] text-[15px] text-white/70">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
