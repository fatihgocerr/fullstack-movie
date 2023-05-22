export const Sort = ({ title, setSort }) => {
  const options = [
    [
      {
        value: 'imdbScore',
        text: 'IMDB Skoruna Göre',
      },
      {
        value: 'name',
        text: 'İsme Göre',
      },

      {
        value: 'runTime',
        text: 'Süresine Göre',
      },
    ],
    [
      {
        value: 'desc',
        text: 'Azalan',
      },
      {
        value: 'asc',
        text: 'Artan',
      },
    ],
  ]

  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 my-4">
      <h1 className="text-xl">{title}</h1>
      <div className="flex gap-2">
        {options.map((filter, i) => (
          <select
            key={i + 'filter'}
            onChange={(e) => {
              const filterType = i === 0 ? 'sortBy' : 'sortDir'
              setSort((prev) => ({ ...prev, [filterType]: e.target.value }))
            }}
            className="select select-primary outline-none "
          >
            {filter.map((option, i) => (
              <option key={i + 'sort'} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        ))}
      </div>
    </div>
  )
}
