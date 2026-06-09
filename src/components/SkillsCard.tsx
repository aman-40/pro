import { motion } from 'framer-motion';

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "GSAP", "Framer Motion"],
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30"
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "Supabase"],
    color: "bg-green-500/20 text-green-300 border-green-500/30"
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Railway"],
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  }
];

const SkillsCard = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-secondary" />
        Technical Skills
      </h3>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-3 md:gap-4">
        {SKILL_CATEGORIES.map((category, idx) => (
          <div key={idx} className="flex flex-col gap-1.5 md:gap-2">
            <h4 className="text-xs md:text-sm font-medium text-gray-400">{category.title}</h4>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {category.skills.map((skill, sIdx) => (
                <motion.span
                  key={sIdx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`text-[10px] md:text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border backdrop-blur-sm cursor-default ${category.color} transition-colors hover:brightness-125`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
