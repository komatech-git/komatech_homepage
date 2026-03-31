import { motion } from 'framer-motion';
import { CheckCircle, ExternalLink, Mail, Users } from 'lucide-react';

const benefits = [
  '年会費わずか500円',
  '駒澤大学の学生なら誰でも歓迎',
  '文理問わず、初心者も大歓迎',
  '自由なプロジェクト参加',
  '学内外での活動機会',
  '仲間と共に成長できる環境',
];

export default function Join() {
  return (
    <section id="join" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
            Join Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            一緒に、「好き」を社会に届けるプロダクトを作りませんか？
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border-2 border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  入会について
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-fuchsia-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-fuchsia-50 to-purple-50 rounded-2xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">プログラミング経験は不要です。</strong>
                  <br />
                  大切なのは、「何かを作りたい」「学びたい」という気持ち。
                  先輩メンバーが丁寧にサポートします。
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">
                今すぐ申し込む
              </h3>
              <p className="text-purple-100 mb-8 text-lg">
                以下のフォームから簡単にお申し込みいただけます。
                不明点があれば、お気軽にお問い合わせください。
              </p>

              <div className="space-y-4">
                <a
                  href="https://forms.gle/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  入会申し込みフォーム
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <a
                  href="mailto:contact@komatech.example.com"
                  className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  お問い合わせ
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                活動情報
              </h4>
              <div className="space-y-2 text-gray-600">
                <p><strong>活動日:</strong> 週1回のミーティング</p>
                <p><strong>場所:</strong> 駒澤大学キャンパス内</p>
                <p><strong>会費:</strong> 年会費500円のみ</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
