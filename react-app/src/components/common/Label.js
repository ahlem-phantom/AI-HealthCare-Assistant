import PropTypes from 'prop-types';

export default function Label({ color = 'default', variant = 'ghost', children, className, ...other }) {
  const styleClasses = {
    filled: {
      default: 'bg-slate-800 text-white',
      primary: 'bg-sky-500 text-white',
      secondary: 'bg-emerald-500 text-white',
      info: 'bg-blue-500 text-white',
      success: 'bg-emerald-500 text-white',
      warning: 'bg-amber-500 text-white',
      error: 'bg-rose-500 text-white',
    },
    outlined: {
      default: 'border border-slate-500 text-slate-700 bg-transparent',
      primary: 'border border-sky-500 text-sky-700 bg-transparent',
      secondary: 'border border-emerald-500 text-emerald-700 bg-transparent',
      info: 'border border-blue-500 text-blue-700 bg-transparent',
      success: 'border border-emerald-500 text-emerald-700 bg-transparent',
      warning: 'border border-amber-500 text-amber-700 bg-transparent',
      error: 'border border-rose-500 text-rose-700 bg-transparent',
    },
    ghost: {
      default: 'bg-slate-100 text-slate-800',
      primary: 'bg-sky-100 text-sky-800',
      secondary: 'bg-emerald-100 text-emerald-800',
      info: 'bg-blue-100 text-blue-800',
      success: 'bg-emerald-100 text-emerald-800',
      warning: 'bg-amber-100 text-amber-800',
      error: 'bg-rose-100 text-rose-800',
    }
  };

  const baseClasses = 'h-[22px] min-w-[22px] px-2 rounded-lg text-xs font-bold inline-flex items-center justify-center whitespace-nowrap cursor-default transition-all';
  const colorClass = styleClasses[variant]?.[color] || styleClasses[variant]?.default;

  return (
    <span className={`${baseClasses} ${colorClass} ${className || ''}`} {...other}>
      {children}
    </span>
  );
}

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error'
  ]),
  variant: PropTypes.oneOf(['filled', 'outlined', 'ghost'])
};
