import {Line} from 'react-chartjs-2';
 
 
import {Chart as ChartJS,CategoryScale, LinearScale,  PointElement,LineElement, Filler, Title, Tooltip, Legend} from 'chart.js'

ChartJS.register(CategoryScale,LinearScale,Filler,PointElement,LineElement,Title, Tooltip, Legend);

 const Charts = ({arr=[], currancy,days}) => {
  


  const prices = [ ];
  const date = [ ]

  const data = {
    labels: date,
    datasets: [{
      label: `My First Dataset ${currancy}`,
      data: prices,borderColor: 'rgb(75, 192, 192)',
  
      backgroundColor: 'rgba(255, 99, 132,0.5)',
      tension: 0.1
    }]
  };

const options = {
  
    responsive:true,
  
}
const config = {
  type: 'line',
  data: data,
};

for(let i = 0; i<arr.length; i++){
  if(days ==="24h")  date.push(new Date(arr [i][0]).toLocaleTimeString());
  else date.push(new Date(arr [i][0]).toLocaleTimeString());
  
  prices.push(arr[i][1])
}
   return (
     <div>
       <Line 
       
       data = {data}
       options={options}  
       />
     </div>
   )
   }
 export default Charts;
 