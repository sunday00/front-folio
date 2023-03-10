import {useParams} from "react-router-dom";

export default () => {
  const {type, page, date, no, build, name} = useParams()

  const base = import.meta.env.VITE_GIT_PROD

  const src = `${base}/src/${type}/${page}/${date}_${no}_${build}_${name}/dist`

  return (<div>
    <h2 className="text-2xl text-center my-8">{name}</h2>
    <section className="flex flex-col items-center">
      <div className="w-full px-8 justify-center">
        <iframe src={src} className="w-full h-[75vh]"/>
      </div>
      <article className="w-full p-8 text-left">
        <p>build: {build}</p>
        <p>date: {date}</p>
        <p>visit full index: <a href={src} target="_blank">{src}</a></p>
      </article>
    </section>
  </div>)
}