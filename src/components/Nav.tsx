import { NavLink } from 'react-router-dom';

export default () => {
  return (<nav>
    <NavLink className={ a => `btn btn-info btn-xs active-${a.isActive}` } to={'/front-folio'}>home</NavLink>
    <NavLink className={ a => `btn btn-info btn-xs active-${a.isActive}` } to={'/front-folio/home'}>home</NavLink>
  </nav>)
}