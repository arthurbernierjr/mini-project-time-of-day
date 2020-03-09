import { Komponent , render} from 'kofujs'
import DateContainer from './components/DateContainer'

const styles = {
  main: {
    'backgroundColor':'rgba(25, 25, 25, 0.4)'
  },
  header: {
    'margin': '0 auto 4rem auto',
    'textAlign': 'center',
    'fontSize': '2.5rem'
  }
}

class Example extends Komponent{
  constructor (props)  {
    super (props)

    this.classNames = this.setStyles(styles).classes
  }

  komponentDidMount () {
    console.log('Hello world')
  }

  present () {
    return (
      <div className={this.classNames.main}>
        <h1 className={this.classNames.header}>Time of Day</h1>
        <DateContainer />
      </div>
    )
  }
}

render(<Example />, document.getElementById('app'))
