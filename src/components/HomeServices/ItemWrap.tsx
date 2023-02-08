import { NavLink } from 'react-router-dom';

function getPath(originalPath: string): string {
  return originalPath.replace('src/', '')
    .replaceAll('_', '/')
}

export default ({c}: {c: any}) => {
  return(<div>
    <NavLink to={`/item/${getPath(c.path)}`} className="flex overflow-y-hidden h-44 item-center mb-4 rounded-lg">
      <img src={`${import.meta.env.VITE_GIT_PROD}/${c.path}/thumbnail.jpg`}
           alt={c.name}
           className="w-full"/>
    </NavLink>
  </div>)
}