import { motion } from 'framer-motion';
import { Map, Activity, Palette, Gamepad2 } from 'lucide-react';

const projects = [
  {
    icon: Map,
    title: 'サークルマップ',
    description: 'Django製の学内インフラ。駒澤大学の全サークル情報を可視化し、新入生の活動選びをサポート。',
    tech: ['Django', 'PostgreSQL', 'Tailwind CSS'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Activity,
    title: '食堂混雑度可視化',
    description: 'IoT/Raspberry Piを用いた社会実装プロジェクト。リアルタイムで食堂の混雑状況を可視化。',
    tech: ['Raspberry Pi', 'Python', 'React'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Palette,
    title: '藝苑祭',
    description: '文芸×デジタルの共同主催イベント。文学部との協働で、新しい表現の場を創出。',
    tech: ['Event Planning', 'Community'],
    gradient: 'from-fuchsia-500 to-purple-500',
  },
  {
    icon: Gamepad2,
    title: 'Scratchゲーム開発',
    description: '1年生主体の地域貢献プロジェクト。小中学生向けのプログラミング教育を実施。',
    tech: ['Scratch', 'Education', 'Community'],
    gradient: 'from-orange-500 to-red-500',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            アイデアから実装まで。学内外で影響を与えるプロダクトを生み出しています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-xl`} />
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600">
            これらは一例です。メンバー一人ひとりが、自分の「好き」を形にしています。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
