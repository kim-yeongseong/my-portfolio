import { Github, Mail, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Get In <span className="text-blue-500">Touch</span>
        </h2>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 md:p-12">
          <p className="text-lg text-gray-300 text-center mb-8 leading-relaxed">
            새로운 기회나 협업 제안이 있으시다면 언제든지 연락 주세요!
            <br />
            가능한 빠른 시일 내에 답변 드리겠습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <a
              href={`mailto:${profile.email}`}
              className="flex flex-col items-center gap-3 p-6 bg-slate-900/50 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 rounded-lg transition-all duration-300 group"
            >
              <Mail className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-1">Email</div>
                <div className="text-white font-medium">{profile.email}</div>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-slate-900/50 hover:bg-slate-700 border border-slate-700 hover:border-purple-500 rounded-lg transition-all duration-300 group"
            >
              <Github className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-1">GitHub</div>
                <div className="text-white font-medium">@yourusername</div>
              </div>
            </a>

            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-slate-900/50 hover:bg-slate-700 border border-slate-700 hover:border-pink-500 rounded-lg transition-all duration-300 group"
              >
                <Linkedin className="w-8 h-8 text-pink-400 group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">LinkedIn</div>
                  <div className="text-white font-medium">Connect</div>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
