export const Pagination = ({ setPage, page, totalPages }) => {
  return (
    <div className="btn-group  w-full flex justify-center items-center p-4">
      <button
        onClick={() => setPage((prev) => ({ ...prev, page: 1 }))}
        className={`btn btn-md ${page === 1 && 'btn-disabled'}`}
      >
        İlk
      </button>

      {page === 1 || (
        <button
          onClick={() => setPage((prev) => ({ ...prev, page: page - 1 }))}
          className="btn btn-md"
        >
          {page - 1}
        </button>
      )}

      <button className="btn btn-md btn-active">{page}</button>
      {totalPages === page || (
        <button
          onClick={() => setPage((prev) => ({ ...prev, page: page + 1 }))}
          className="btn btn-md"
        >
          {page + 1}
        </button>
      )}

      <button
        onClick={() => setPage((prev) => ({ ...prev, page: totalPages }))}
        className={`btn btn-md ${page === totalPages && 'btn-disabled'}`}
      >
        Son
      </button>
    </div>
  )
}
