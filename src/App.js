import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import ThankYou from './components/ThankYou'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/easesmith" component={Home} />
    <Route exact path="/thankyou" component={ThankYou} />
    <Route component={NotFound} />
  </Switch>
)

export default App