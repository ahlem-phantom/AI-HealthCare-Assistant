import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object
};

export default function Iconify({ icon, sx, ...other }) {
  return <Icon icon={icon} style={{ ...sx }} {...other} />;
}
