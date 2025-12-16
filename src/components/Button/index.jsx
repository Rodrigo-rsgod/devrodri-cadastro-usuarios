import PropTypes from 'prop-types';
import { Button } from './styles';

function DefaultButton({ children, variant, ...props }) {
  return (
    <Button {...props} $variant={variant}>
      {children}
    </Button>
  );
}

DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

export default DefaultButton;