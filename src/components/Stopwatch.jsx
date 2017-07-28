import React from 'react';
import Button from './Button'

class Stopwatch extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      running : false,
      elapsed: 0,
      lastTick : 0
    }
    this.handleStart = this.handleStart.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.tick = this.tick.bind(this)
  }
  handleStart(){
    this.setState({
      running:true,
      lastTick: Date.now()
    })
  }
  handlePause(){
    this.setState({
      running:false
    })
  }
  handleStop(){
    this.setState({
      running:false,
      elapsed: 0,
      lastTick: 0
    })
  }

  componentDidMount(){
    this.interval =  setInterval(this.tick, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  tick(){
    if(this.state.running){
      let now = Date.now();
      let diff = now - this.state.lastTick;
      let newTime = this.state.elapsed + diff
      this.setState({
        elapsed : newTime ,
        lastTick : now
      })
    }
  }
  format(milliseconds){
    let totalSecond = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(totalSecond / 60 )
    let seconds = totalSecond % 60;
    return `${minutes > 9 ? minutes : '0' + minutes} :
            ${seconds > 9 ? seconds : '0' + seconds}`
  }
  render() {
    let time = this.format(this.state.elapsed)
    return(
      <section className='stopwatch'>
          <div className='stopwatch-time'>{time}</div>
          <div className='stopwatch-controls'>
            {this.state.running ?
              <Button className='icon' icon='pause' onClick={this.handlePause} />
              :
              <Button className='icon' icon='play_arrow' onClick={this.handleStart} />
            }

            <Button className='icon' icon='stop_arrow' onClick={this.handleStop}/>
          </div>
      </section>
    )
  }
}

Stopwatch.PropTypes = {

}


export default Stopwatch;
