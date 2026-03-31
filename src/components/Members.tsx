import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Star } from 'lucide-react';

const memberTypes = [
  {
    icon: Award,
    title: 'Google AIアンバサダー',
    description: 'AI/ML分野で活躍し、最新技術を学内外に発信。',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Briefcase,
    title: '企業インターン',
    description: 'スタートアップから大手企業まで、実践的な開発経験を積む。',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: GraduationCap,
    title: '他大学TA',
    description: '教育にも貢献。他大学でティーチングアシスタントとして活動。',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Star,
    title: 'セキュリティキャンプ',
    description: '法学部からセキュリティ専門家へ。多様なバックグラウンドから専門性を磨く。',
    color: 'from-fuchsia-500 to-purple-500',
  },
];

export default function Members() {
  return (
    <section id="members" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
            Members
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            多様なバックグラウンドを持つメンバーが、学内外で活躍しています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {memberTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 h-full">
                <div className={`w-14 h-14 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {type.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {type.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-purple-600" />
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 backdrop-blur-3xl" />

          <div className="relative px-8 py-12 sm:p-16 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              あなたの「好き」を、ここで。
            </h3>
            <p className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              法学部、文学部、経済学部、経営学部...
              <br />
              どの学部でも、どんなスキルレベルでも大丈夫。
              <br />
              大切なのは、「何かを作りたい」という想い。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
