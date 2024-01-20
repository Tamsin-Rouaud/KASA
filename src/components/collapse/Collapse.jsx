import './Collapse.sass';
import { useState } from 'react';
import arrowBack from '../../assets/images/arrowBack.png'
// import PropTypes from 'prop-types'

const Collapse = ({ title, content}) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const arrow = arrowBack
  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };



return (
  <div className={`collapse${isCollapsed ? '__closed' : ''}`}>
    <div className="collapse__header" onClick={toggleCollapse}>
        <span className="collapse__title">{title}</span>
        <img className={`collapse__arrow${isCollapsed ? '--up' : '--down'}`} src={arrow} alt='Voir le contenu'/>
    </div>
     {isCollapsed ? null : (
    <div className="collapse__container__content">
      <div className={`collapse__content${isCollapsed ? '--hidden' : ''}`}>{content}
      </div>
    </div>
     )}
  </div>
);
};
export default Collapse
