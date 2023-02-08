import ItemWrap from "@c/HomeServices/ItemWrap";

export default ({title, contents}: {title: string, contents: any[]}) => {
  return (
    <section className="min-h-[50vh] p-8">
      <h2 className="mb-4">{title}</h2>
      <div className="columns-3	gap-4">
        {contents.map((c) => <ItemWrap c={c} key={c.name} />)}
      </div>
    </section>
  )
}