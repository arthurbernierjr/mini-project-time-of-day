import { Komponent } from 'kofujs'
import { dateContainerStyles } from './styles.js'

export default class DateContainer extends Komponent {
  constructor(props){
    super(props)
    this.classNames = this.setStyles(dateContainerStyles).classes
    this.state = { message: ''}
    this.data = {
      date : new Date().getHours()
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event){
    if (this.data.date > 12 && this.data.date < 18) {
      this.setState({message: 'Its Afternoon'})
    } else if (this.data.date > 6 && this.data.date < 12) {
      this.setState({message: 'Its Morning'})
    } else {
      this.setState({message: 'Its Night Time'})
    }
  }

  present () {
    return (
      <div className={this.classNames.container}>
        <h2 className = {this.classNames.message}>{this.state.message}</h2>
        <button
          className={this.classNames.button}
          type="button"
          onClick={this.handleClick}
          >
            What Time of Day Is It?
        </button>
      </div>

    )
  }
}
