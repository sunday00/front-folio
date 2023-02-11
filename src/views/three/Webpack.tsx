import {useParams} from "react-router-dom";

export default () => {
  const {page, date, no, name} = useParams()

  const base = import.meta.env.VITE_GIT_PROD

  const src = `${base}/src/three/${page}/${date}_${no}_webpack_${name}/dist`

  return (<div>
    <h2 className="text-2xl text-center my-8">{name}</h2>
    <section className="flex flex-col items-center">
      <div className="w-full px-8 justify-center">
        <iframe src={src} className="w-full h-[75vh]"
                allow="interest-cohort '*'" />
      </div>
      <article className="w-full p-8 text-left">
        <p>build: webpack</p>
        <p>date: {date}</p>
      </article>
    </section>
  </div>)
}