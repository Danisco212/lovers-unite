import Countdown, { zeroPad } from 'react-countdown';
import './App.css'

const App = () => {
  // Create a date object for 26th December 2024, South African time
  const targetDate = new Date('2024-12-10T00:00:00');
  
  // Format the date to South African time
  const formattedDate = new Date(
    targetDate.toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })
  );

  console.log(formattedDate)

  const renderTime = ({ hours, minutes, seconds, completed, days }) => {
    if(completed){
      return <h3 style={{
        color: 'white',
        fontSize: 110
      }}>Back Together {'<3'}</h3>
    } else {
      return (
        <div className='time-container'>
          <div className='time'>
            <h3 className='clock-time'>{zeroPad(days)}</h3>
            <p>Days</p>
          </div>
          <div className='divider'></div>
          <div className='time'>
            <h3 className='clock-time'>{zeroPad(hours)}</h3>
            <p>Hours</p>
          </div>
          <div className='divider'></div>
          <div className='time'>
            <h3 className='clock-time'>{zeroPad(minutes)}</h3>
            <p>Minutes</p>
          </div>
          <div className='divider'></div>
          <div className='time'>
            <h3 className='clock-time'>{zeroPad(seconds)}</h3>
            <p>Seconds</p>
          </div>
        </div>
      )
    }
  }
  return (
    <div className="App" style={{
      backgroundImage: `url(/images/background.jpeg)`,
    }}>
      <div style={{
        backgroundColor: '#00000080',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}>
        <div>
          <h5 className='count-title'>Time Till We Explore The World</h5>
          <Countdown 
            renderer={renderTime} 
            date={formattedDate} />
        </div>
      </div>
    </div>
  );
}

export default App;
