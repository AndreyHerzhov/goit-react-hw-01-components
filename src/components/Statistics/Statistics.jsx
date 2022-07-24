 
import { StatisticCard, StatisticTitle, StatisticList, StatisticListItem, StatisticListOnfo} from "./Statistics.styled"
 
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
            {/* <StatisticTitle title="Upload stats">Upload stats</StatisticTitle> */}
            <StatTitle title="Upload stats"/> 
            <StatList stats={data} />
             
        </StatisticCard>
    ) 
}