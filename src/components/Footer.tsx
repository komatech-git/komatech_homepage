import { Github, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              komatech
            </h3>
            <p className="text-purple-200 leading-relaxed">
              駒澤大学プログラミング研究会
              <br />
              「好き」を、社会に届けるプロダクトへ。
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-purple-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-purple-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-purple-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#members" className="text-purple-300 hover:text-white transition-colors">
                  Members
                </a>
              </li>
              <li>
                <a href="#join" className="text-purple-300 hover:text-white transition-colors">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-purple-200">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/komatech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/komatech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@komatech.example.com"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-purple-300 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-fuchsia-400 fill-current" /> by komatech
            <span className="mx-2">•</span>
            © 2024 komatech
          </p>
        </div>
      </div>
    </footer>
  );
}
