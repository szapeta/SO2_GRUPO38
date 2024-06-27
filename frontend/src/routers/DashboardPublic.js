import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from "../components/public/home/Home";
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';

export const DashboardPublic = () => {
  return (
    <>
    <Navbar/>
      <div className='container mt-2'>
      <Switch>
        <Route exact path="/home" component={Home} />
      </Switch>
      </div>
      <Footer/>
    </>
  );
};
