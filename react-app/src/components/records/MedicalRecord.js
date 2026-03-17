import { Link, useParams } from "react-router-dom";
import Iconify from '../common/Iconify';

const MedicalRecord = () => {
  const { id } = useParams();

  const cards = [
    {
      title: "Active Problems",
      desc: "Current medical concerns requiring monitoring.",
      icon: "eva:alert-circle-fill",
      color: "rose",
      viewPath: `/doctor/record/activeproblem/${id}`,
      addPath: `/doctor/record/addactiveproblem/${id}`
    },
    {
      title: "Archive / History",
      desc: "Resolved medical issues and past conditions.",
      icon: "eva:archive-fill",
      color: "slate",
      viewPath: `/doctor/record/oldproblem/${id}`,
      addPath: `/doctor/record/addoldproblem/${id}`
    },
    {
      title: "Clinical Notes",
      desc: "Internal diagnostic commentary and observations.",
      icon: "eva:edit-2-fill",
      color: "sky",
      viewPath: `/doctor/record/doctornote/${id}`,
      addPath: `/doctor/record/addnote/${id}`
    },
    {
      title: "Genetics",
      desc: "Family history and hereditary health patterns.",
      icon: "eva:activity-fill",
      color: "amber",
      viewPath: `/doctor/record/hereditary/${id}`,
      addPath: `/doctor/record/addhereditary/${id}`
    },
    {
      title: "Lab Diagnostics",
      desc: "Recent blood work and laboratory reports.",
      icon: "eva:beaker-fill",
      color: "emerald",
      viewPath: `/doctor/record/reslabo/${id}`,
      addPath: `/doctor/record/addreslabo/${id}`
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
      {cards.map((card) => (
        <div key={card.title} className="group bg-white rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/20 p-8 flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1">
          <div className="space-y-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-${card.color}-50 text-${card.color}-500 transition-colors group-hover:bg-${card.color}-500 group-hover:text-white shadow-sm`}>
              <Iconify icon={card.icon} className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-2">{card.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{card.desc}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-50">
            <Link
              to={card.viewPath}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-${card.color}-500 text-white font-bold text-xs hover:opacity-90 transition-all shadow-md shadow-${card.color}-500/10 no-underline`}
            >
              <Iconify icon="eva:maximize-fill" className="w-4 h-4" />
              Analyze
            </Link>
            <Link
              to={card.addPath}
              className="w-12 h-11 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all no-underline"
            >
              <Iconify icon="eva:plus-fill" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MedicalRecord;
