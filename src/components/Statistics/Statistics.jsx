 
import { StatisticCard, StatisticTitle, StatisticList, StatisticListItem, StatisticListOnfo} from "./Statistics.styled"
 
import stat from "../../data.json"
 
const StatList = ({ stats }) => {
    return (
      <ul>
        {stats.map(stat => (
          <li key={stat.id}>{stat.label} {stat.percentage}</li>
        ))}
      </ul>
    );
  };
  
  


export const Statistic = () => {
    return (
        <StatisticCard>
            <StatisticTitle>Upload stats</StatisticTitle>

            <StatList stats={stat} />
            <StatisticList>
                <StatisticListItem>
                      <StatisticListOnfo></StatisticListOnfo>
                      <StatisticListOnfo></StatisticListOnfo>
                </StatisticListItem>

                <StatisticListItem>
                       <StatisticListOnfo></StatisticListOnfo>
                       <StatisticListOnfo></StatisticListOnfo>
                </StatisticListItem>

                <StatisticListItem>
                       <StatisticListOnfo></StatisticListOnfo>
                       <StatisticListOnfo></StatisticListOnfo>
                </StatisticListItem>

            </StatisticList>
        </StatisticCard>
    ) 
}