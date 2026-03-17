import axios from "axios";
import { BLOCKCHAIN_API_URL } from "../../api-config";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Iconify from '../common/Iconify';
import { MOCK_BLOCKCHAIN_NOTES } from "../../constants/mockRecords";

const DoctorNotes = () => {
  const { id } = useParams();
  const [record, setRecord] = useState([]);

  useEffect(() => {
    const getRecords = async () => {
      try {
        const res = await axios(`${BLOCKCHAIN_API_URL}/address/${id}`);
        if (res.data && res.data.addressData) {
          setRecord(res.data);
        } else {
          setRecord(MOCK_BLOCKCHAIN_NOTES[id] || { addressData: { addressTransactions: [] } });
        }
      } catch (err) {
        setRecord(MOCK_BLOCKCHAIN_NOTES[id] || { addressData: { addressTransactions: [] } });
      }
    };
    getRecords();
  }, [id]);

  return (
    <div className="pt-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-black text-slate-800 flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-sky-50 text-sky-500">
            <Iconify icon="eva:edit-2-fill" className="w-6 h-6" />
          </div>
          Clinical Notes & Observations
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {record.addressData?.addressTransactions?.map((object, index) => (
          <div key={index} className="group bg-white rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/20 p-8 flex flex-col justify-between transition-all hover:shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:rotate-12 transition-transform duration-500">
                <Iconify icon="eva:file-text-outline" className="w-32 h-32" />
            </div>

            <div className="space-y-6 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-black text-[10px]">
                    {object.doctor?.charAt(0) || 'D'}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Dr. {object.doctor}</p>
                    <p className="text-[9px] font-bold text-sky-500 uppercase tracking-tighter">Verified Clinician</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{dayjs(object.date).format("MMM DD")}</p>
                  <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{dayjs(object.date).format("hh:mm A")}</p>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100/50 min-h-[140px]">
                <p className="text-slate-600 font-medium leading-relaxed italic">
                  "{object.description}"
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-wider">
                <Iconify icon="eva:shield-fill" className="w-3 h-3" />
                Immutable
              </div>
              <button className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-sky-500 hover:text-sky-600 transition-colors">
                Details
                <Iconify icon="eva:arrow-forward-fill" className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}

        {(!record.addressData?.addressTransactions || record.addressData.addressTransactions.length === 0) && (
          <div className="col-span-full py-20 text-center bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200">
            <Iconify icon="eva:edit-outline" className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 font-bold">No clinical notes recorded yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorNotes;