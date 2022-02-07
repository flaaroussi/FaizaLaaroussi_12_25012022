import './style.scss'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import propTypes from "prop-types";



/**
 * @description Component for displaying score as a pie chart
 *
 * @component
 * @example
 * 
 * const score = 0.4
 * return (
 *  <CardScore score={score}/>
 * )
 */

function CardScore({score}){

   const data = [
      { name: 'end', value: score, fillColor:'#FF0101' },
      { name: 'start', value: 1 - score, fillColor:'#ffffff'},
    ];

   return (<article className='card-score'>

         <header className='card-score__header'>
               <h1>Score</h1> 
         </header>

         <div className='card-score__chart'>
            <ResponsiveContainer width="100%" height="100%">
               <PieChart width={160} height={100} >
                  <Pie
                     data={data}
                     dataKey="value"         
                     innerRadius={70}
                     outerRadius={80}
                     tartAngle={90}
                     endAngle={450}
                     fill='transparent'
                     stroke = 'transparent'
                  >
                     {data.map((currentValue, index) => (
                        <Cell key={`cell-${index}`} fill={currentValue.fillColor} cornerRadius="50"/>
                     ))}
                  </Pie>   
            </PieChart>
         </ResponsiveContainer>

         <div className='card-score__chart__legend'>
            <div className='card-score__chart__legend__score'>{score*100}%</div> 
            <div className='card-score__chart__legend__text'>de votre</div>
            <div className='card-score__chart__legend__text'>objectif</div>
         </div>

      </div>

   </article>)
   
}

//Valider le type des propriétés
CardScore.propTypes ={
   score : propTypes.number
}

export default  CardScore