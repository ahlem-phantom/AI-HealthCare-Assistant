import axios from "axios";
import API_BASE_URL from "../../api-config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Iconify from '../common/Iconify';
import { MOCK_MEDICAL_RECORDS } from "../../constants/mockRecords";

const OldProblems = () => {
  const { id } = useParams();
  const [record, setRecord] = useState([]);

  useEffect(() => {
    const getRecords = async () => {
      try {
        const res = await axios(`${API_BASE_URL}/old-problems/${id}`);
        if (res.data && res.data.length > 0) {
          setRecord(res.data);
        } else {
          setRecord(MOCK_MEDICAL_RECORDS[id] || MOCK_MEDICAL_RECORDS["default"]);
        }
      } catch (err) {
        setRecord(MOCK_MEDICAL_RECORDS[id] || MOCK_MEDICAL_RECORDS["default"]);
      }
    };
    getRecords();
  }, [id]);

  return (
    <div className="pt-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-black text-slate-800 flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-slate-100 text-slate-500">
            <Iconify icon="eva:archive-fill" className="w-6 h-6" />
          </div>
          Clinical History / Archived Problems
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {record[0]?.ancienProb?.map((value, i) => (
          <div key={i} className="group bg-white rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/20 p-8 flex flex-col justify-between transition-all hover:shadow-xl grayscale hover:grayscale-0 opacity-80 hover:opacity-100 relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">History Entry #{i+1}</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px] font-bold">Resolved</span>
              </div>
              
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-1">{value.probleme}</h3>
                <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                  <Iconify icon="eva:calendar-outline" className="w-4 h-4 text-slate-400" />
                  Resolved on {value.date}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-slate-400">
                <Iconify icon="eva:folder-outline" className="w-4 h-4" />
                Archived Case
              </div>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-100 transition-all">
                <Iconify icon="eva:file-text-outline" className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}

        {(!record[0]?.ancienProb || record[0]?.ancienProb.length === 0) && (
          <div className="col-span-full py-20 text-center bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200">
            <Iconify icon="eva:shield-outline" className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 font-bold">No resolved history entries recorded.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OldProblems;
