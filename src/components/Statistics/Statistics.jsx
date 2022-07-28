import { StatisticCard, 
         StatisticTitle,
         StatisticList,
         StatisticListItem, 
         StatisticListOnfo} from "./Statistics.styled"
import PropTypes from "prop-types" 
 

 
 
export const Statistics = ({ stats, title }) => {
    return (
      <StatisticCard>
      <StatisticTitle>{title}</StatisticTitle>
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
      stats: PropTypes.array.isRequired,
      title: PropTypes.string.isRequired,
}