import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

Logo.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

export default function Logo({ className, style }) {
  return (
    <RouterLink to="/" className={`inline-block ${className || ''}`} style={style}>
      <img 
        src="/static/logoo.png" 
        alt="Logo" 
        className="w-[250px] h-[180px] object-contain mx-auto" 
      />
    </RouterLink>
  );
}
