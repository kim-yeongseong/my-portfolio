import { studies } from "@/data/studies";
import StudyCard from "./StudyCard";

export default function Studies() {
  return (
    <section id="studies" className="min-h-screen py-20 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Learning <span className="text-purple-500">Journey</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studies.map((study) => (
            <StudyCard key={study.id} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
}
