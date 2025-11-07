"use client";

import { Github, Mail, Target, User } from "lucide-react";
import { profile } from "@/data/profile";
import { primarySkills } from "@/data/skills";

export default function Sidebar() {
  return (
    <aside className="space-y-4">
      {/* Profile Card */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border-2 border-blue-200 dark:border-blue-700 rounded-xl p-3 sm:p-4 shadow-lg">
        {/* Profile Image */}
        <div className="flex justify-center mb-3">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1 shadow-xl">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
              <User className="w-12 h-12 sm:w-14 sm:h-14 text-gray-400 dark:text-gray-600" />
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mb-3 pb-3 border-b-2 border-blue-200 dark:border-blue-700 text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {profile.name}
          </h1>
          <p className="text-base sm:text-lg text-blue-700 dark:text-blue-400 font-semibold mb-1">
            {profile.role}
          </p>
          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
            6년+ 경력
          </p>
        </div>

        {/* Contact */}
        <div className="mb-3 pb-3 border-b-2 border-blue-200 dark:border-blue-700">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5 flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            Contact
          </h3>
          <div className="space-y-1.5">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-white dark:bg-gray-700 px-2 py-1 rounded-lg"
            >
              <Mail className="w-3 h-3 flex-shrink-0" />
              <span className="text-xs break-all">{profile.email}</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-white dark:bg-gray-700 px-2 py-1 rounded-lg"
            >
              <Github className="w-3 h-3" />
              <span className="text-xs">GitHub Profile</span>
            </a>
          </div>
        </div>

        {/* Skills - 더보기 없이 한눈에 */}
        <div className="mb-3 pb-3 border-b-2 border-blue-200 dark:border-blue-700">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Tech Stack</h3>
          <div className="space-y-2">
            {primarySkills.map((category) => (
              <div key={category.category}>
                <h4 className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-1">
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded shadow-sm border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mindset */}
        {profile.mindset && (
          <div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Mindset
            </h3>
            <div className="space-y-1">
              {profile.mindset.map((item, idx) => (
                <div key={idx} className="flex items-start gap-1 bg-white dark:bg-gray-700 px-2 py-1 rounded-lg">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-xs mt-0.5">•</span>
                  <span className="text-xs text-gray-800 dark:text-gray-200 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
