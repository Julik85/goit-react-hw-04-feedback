import PropTypes from 'prop-types';
import { Button, ButtonsList } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      <ButtonsList>
        {options.map(option => (
          <Button
          key={option}
          type="button"
          onClick={onLeaveFeedback}
          value={option}
        >
          {option}
          </Button>
        ))}
      </ButtonsList>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};