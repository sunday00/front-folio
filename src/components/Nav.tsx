import { NavLink } from 'react-router-dom';

export default () => {
  const to = (path: string) => {
    return `/front-folio${path}`
  }

  return (<nav>
    <NavLink className={ a => `btn btn-info btn-xs active-${a.isActive}` } to={to('/')}>home</NavLink>
    <NavLink className={ a => `btn btn-info btn-xs active-${a.isActive}` } to={to('/home')}>home</NavLink>
  </nav>)
}