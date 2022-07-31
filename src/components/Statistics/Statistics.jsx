import { StatisticCard, 
         StatisticTitle,
         StatisticList,
         StatisticListItem, 
         StatisticListOnfo} from "./Statistics.styled"
import PropTypes from "prop-types" 
 

 
 
export const Statistics = ({ stats, title }) => {
    return (
      <StatisticCard>
        {title && <StatisticTitle>{title}</StatisticTitle>}
      
      <StatisticList>
        {stats.map(({id, color, label, percentage}) => (
          <StatisticListItem key={id} id={id} theme={{ main: color }}>
            <StatisticListOnfo>{label} </StatisticListOnfo>
            <StatisticListOnfo>{percentage}% </StatisticListOnfo>
          </StatisticListItem>
        ))}
      </StatisticList>
      </StatisticCard>
    );
  };
  
 

  Statistics.propTypes = {
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        
      })
    ),
    title: PropTypes.string,
  };

 