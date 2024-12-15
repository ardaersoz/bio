import PropTypes from 'prop-types';

const WidgetCard = ({ title, value, icon }) => {
  // title: PropTypes.string.isRequired,
  // value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  // icon: PropTypes.element.isRequired,

  return (
    <div className="p-4 bg-white shadow rounded-lg flex items-center space-x-4">
      <div className="text-4xl">{icon}</div>
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-500 text-xl">{value}</p>
      </div>
    </div>
  );
};

WidgetCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.element.isRequired,
};
export default WidgetCard;
