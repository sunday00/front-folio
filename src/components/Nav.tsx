// import { NavLink } from 'react-router-dom';

export default () => {
  return (<div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">Front-folio</a>
    </div>
    <nav className="flex-none gap-2">
      {/*<NavLink className={ a => `btn btn-info btn-xs active-${a.isActive}` } to='/'>home</NavLink>*/}
      {/*<NavLink className={ a => `btn btn-info btn-xs active-${a.isActive}` } to='/home'>home</NavLink>*/}
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered" />
      </div>
    </nav>
  </div>)
}