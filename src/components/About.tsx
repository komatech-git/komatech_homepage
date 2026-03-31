import { motion } from 'framer-motion';
import { Users, Zap, Globe, Code } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: '多様性と越境',
    description: '法学部からセキュリティキャンプ出場者まで。文理を問わず、異能が混ざり合う文化。',
  },
  {
    icon: Zap,
    title: '一気通貫の実働',
    description: 'アイデアから実装、リリースまで。技術を手段として、社会に届けるプロダクトを作る。',
  },
  {
    icon: Globe,
    title: '学内外で活躍',
    description: 'Google AIアンバサダー、企業インターン、他大学TAなど、多様なフィールドで挑戦。',
  },
  {
    icon: Code,
    title: 'オープンな学び',
    description: '技術習得だけが目的ではない。「好き」を原動力に、共に成長するコミュニティ。',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            私たちは、単なる技術習得を目的とせず、<br />
            「技術を手段として活用する開かれたコミュニティ」です。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative p-8 border-2 border-gray-100 rounded-2xl hover:border-fuchsia-200 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
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
          className="bg-gradient-to-r from-fuchsia-50 to-purple-50 rounded-3xl p-8 sm:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              規約1.4条：私たちの理念
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              komatechは、多様なバックグラウンドを持つ学生が集まり、
              互いの「好き」を尊重しながら、技術を通じて社会に価値を届けることを目指しています。
              プログラミングは手段であり、目的は「自分たちの想いを形にすること」。
              <br /><br />
              法学部からセキュリティキャンプ出場者、経済学部からUI/UXデザイナーまで。
              多様な分野と技術が混ざり合い、新たな価値を生み出す。それがkomatechです。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
