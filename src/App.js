import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './Pages/Landing_page';
import Video from './Pages/Video';
import SpaceCake from './Pages/SpaceCake';
import Quiz from './Pages/Quiz';
import Datacapture from './Pages/Datacapture';
import Instructions from './Pages/Instructions';
import Prize from './Pages/Prize';
import Redirecttoquiz from './Pages/Redirecttoquiz';
import ThankYou from './Pages/ThankYou';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path='/' exact strict component={LandingPage}/>
            <Route path='/points' exact strict component={Redirecttoquiz}/>
            <Route path='/prize' exact strict component={Prize}/>
            <Route path='/educational-video' exact strict component={Video}/>
            <Route path='/space-cake' exact strict component={SpaceCake}/>
            <Route path='/quiz' exact strict component={Quiz}/>
            <Route path='/data-capture' exact strict component={Datacapture}/>
            <Route path='/instructions' exact strict component={Instructions} />
            <Route path='/thanksforentry' exact strict component={ThankYou} />
        </Switch>
    </Router>
  );
}

export default App;
