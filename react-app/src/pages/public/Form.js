import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import API_BASE_URL from '../../api-config';

const fields = [
  { id: 'name',    label: 'Your name',       type: 'text', placeholder: 'Jane Doe' },
  { id: 'phone',   label: 'Phone number',    type: 'tel',  placeholder: '+216 55 555 555' },
  { id: 'email',   label: 'Email address',   type: 'email', placeholder: 'you@example.com' },
];

const Form = () => {
  const [values, setValues] = useState({ name: '', phone: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setValues(v => ({ ...v, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}/contacts/create-contact`, values);
      Swal.fire({ title: 'Message sent!', icon: 'success', confirmButtonColor: '#0ea5e9' });
      setValues({ name: '', phone: '', email: '', message: '' });
    } catch {
      Swal.fire({ title: 'Oops!', text: 'Something went wrong. Please try again.', icon: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white/70 backdrop-blur-sm border border-white/80 rounded-3xl shadow-card p-8 md:p-10"
    >
      <h2 className="text-2xl font-bold text-slate-800 mb-8 font-display">Send us a message</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {fields.slice(0, 2).map(({ id, label, type, placeholder }) => (
          <div key={id} className="float-input-wrap">
            <input
              id={id}
              type={type}
              value={values[id]}
              onChange={set(id)}
              placeholder={placeholder}
              required
              className="peer float-input"
            />
            <label htmlFor={id} className="float-label">{label}</label>
          </div>
        ))}
      </div>

      <div className="float-input-wrap mb-5">
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={set('email')}
          placeholder="you@example.com"
          required
          className="float-input"
        />
        <label htmlFor="email" className="float-label">Email address</label>
      </div>

      <div className="relative mb-7">
        <textarea
          id="message"
          value={values.message}
          onChange={set('message')}
          placeholder="How can we help you?"
          required
          rows={5}
          className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-800 outline-none transition-all duration-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/25 resize-none text-sm placeholder-slate-400"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`btn-primary w-full md:w-auto px-8 py-3.5 text-sm ${loading ? 'opacity-70 cursor-wait' : ''}`}
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send Message
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
};

export default Form;
