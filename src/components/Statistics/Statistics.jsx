 
import { StatisticCard, StatisticTitle, StatisticList, StatisticListItem, StatisticListOnfo} from "./Statistics.styled"
import PropTypes from "prop-types" 
import data from "../../data.json"

 
 
const StatList = ({ stats }) => {
    return (
      <StatisticList>
        {stats.map(stat => (
          <StatisticListItem key={stat.id} id={stat.id} theme={{ main: stat.color }}>
            <StatisticListOnfo>{stat.label} </StatisticListOnfo>
            <StatisticListOnfo>{stat.percentage}% </StatisticListOnfo>
          </StatisticListItem>
        ))}
      </StatisticList>
    );
  };
  
 
  function StatTitle({title }) {
    return (
        <StatisticTitle>{title}</StatisticTitle>
  )
}

export const Statistic = () => {
    return (
        <StatisticCard>
            <StatTitle title="Upload stats"/> 
            <StatList stats={data} />
        </StatisticCard>
    ) 
}

Event.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
   
        
}