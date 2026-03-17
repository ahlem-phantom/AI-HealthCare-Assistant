import axios from "axios";
import API_BASE_URL from "../../api-config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Iconify from '../common/Iconify';
import { MOCK_MEDICAL_RECORDS } from "../../constants/mockRecords";
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'

const Allergie = () => {
  const { id } = useParams();
  const [record, setRecord] = useState([]);

  useEffect(() => {
    const getRecords = async () => {
      try {
        const res = await axios(`${API_BASE_URL}/records/${id}`);
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

  const onUpdate = async (object) => {
    await axios.put(`${API_BASE_URL}/records/${id}`, object);
  };

  const handleDelete = (ind) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'px-6 py-2.5 rounded-xl bg-emerald-500 text-white font-bold text-sm mx-2',
        cancelButton: 'px-6 py-2.5 rounded-xl bg-rose-500 text-white font-bold text-sm mx-2'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: 'Remove Allergy?',
      text: "This clinical alert will be permanently removed.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove',
      cancelButtonText: 'Keep it',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedRecord = [...record];
        updatedRecord.forEach((object) => {
          const i = object.allergie.findIndex(a => a.allergie === ind.allergie);
          if (i > -1) {
            object.allergie.splice(i, 1);
            onUpdate(object);
          }
        });
        setRecord(updatedRecord);
        swalWithBootstrapButtons.fire('Removed!', 'Allergy record deleted.', 'success');
      }
    });
  };

  return (
    <div className="pt-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-black text-slate-800 flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-50 text-amber-500">
            <Iconify icon="eva:alert-triangle-fill" className="w-6 h-6" />
          </div>
          Clinical Allergies & Sensitivities
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {record[0]?.allergie?.map((value, i) => (
          <div key={i} className="group bg-white rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/20 p-8 flex flex-col justify-between transition-all hover:shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
              <Iconify icon="eva:alert-triangle-outline" className="w-24 h-24 rotate-12" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Allergen Entry #{i+1}</span>
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              </div>
              
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-1">Sensitivity To</p>
                <h3 className="text-xl font-black text-slate-900 leading-tight">
                  {value.allergie}
                </h3>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
              <div className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-wider">
                Confirmed
              </div>
              <button 
                onClick={() => handleDelete(value)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition-all"
              >
                <Iconify icon="eva:trash-2-outline" className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}

        {(!record[0]?.allergie || record[0]?.allergie.length === 0) && (
          <div className="col-span-full py-20 text-center bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200">
            <Iconify icon="eva:heart-outline" className="w-16 h-16 text-emerald-300 mx-auto mb-4" />
            <p className="text-slate-500 font-bold">No clinical allergies recorded.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Allergie;
