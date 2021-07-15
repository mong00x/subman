import React from 'react'
import {Doughnut} from 'react-chartjs-2'

const Chart = ({start,period}) => {
    console.log(period, start)
    const today = new Date().getDate()
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth() + 1
    const lastDayOfMonth = new Date(currentYear, currentMonth, 0).getDate()
    const startDate = new Date(start)
    const startDay = startDate.getDate()
    // let startMonth = startDate.getMonth()
    const shorterMonthSubDay= () => startDate > lastDayOfMonth ? startDay : lastDayOfMonth
    const nextBillMonth = () => today > startDay ? currentMonth + 1 : currentMonth
    const nextBillDate = currentYear+'-'+nextBillMonth()+'-'+shorterMonthSubDay()

    function dhm(t){
        var cd = 24 * 60 * 60 * 1000,
            ch = 60 * 60 * 1000,
            d = Math.floor(t / cd),
            h = Math.floor( (t - d * cd) / ch),
            m = Math.round( (t - d * cd - h * ch) / 60000),
            pad = function(n){ return n < 10 ? '0' + n : n; };
      if( m === 60 ){
        h++;
        m = 0;
      }
      if( h === 24 ){
        d++;
        h = 0;
      }
      return d+1;
    }
    
    console.log( dhm( 3 * 24 * 60 * 60 * 1000 ) );
    

    const daysLeft = dhm(Date.parse(new Date(nextBillDate)) - Date.parse(new Date()))
    const daysPassed = 30 - daysLeft

    const setColor = () => daysLeft > 15 ? "#36C688" : daysLeft > 7 ? "EABC51" : "ff6d6d"  
    

    // console.log(startDate)
    // const leftDate = 
    
    return (
        <div style={{position:'relative', width:'15%', height:'auto', display:'flex', alignItems:'center'}}>
            <Doughnut 
                data={{
                    datasets: [{
                        data: [daysLeft, daysPassed],
                        backgroundColor: [
                            setColor(),
                            '#eeeeee',
                        ],
                        

                    }]
                }}
                options={{
                    events:[null], 
                }}
                
            />
            <div style={{position:'absolute',width:'100%',height:'100%', textAlign:'center', display:'flex', justifyContent:'space-around', alignItems:'center',marginTop:'12px', fontSize:'.8rem' }}>
                {daysLeft === 0 ? <p style={{color:'red'}}>{daysLeft}</p> : <p>{daysLeft}</p>}
                </div>

        </div>
    )
}

export default Chart
