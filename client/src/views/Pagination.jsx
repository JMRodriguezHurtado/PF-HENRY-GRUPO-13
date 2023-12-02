import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../redux/actions";


const Pagination = ({info}) => {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.currentPage)
    const itemsPerPage = 12;
    const totalPages = Math.ceil(info?.total / itemsPerPage);
    const paginationItems = [];
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
          dispatch(setCurrentPage(newPage))
        }
      };
      
  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <li key={i}>
        <button
          style={{
            backgroundColor: i === currentPage ? '#424447' : 'white',
            borderColor: '#718096',
            color: i === currentPage ? '#f7fafc' : '#4a5568',
            pointerEvents: i === currentPage ? 'none' : 'auto',
          }}
          className={`border border-gray-300 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      </li>
    );
  }
    return(
        <div className="max-w-2xl m-10 mx-auto">
              <nav aria-label="Page navigation example">
                <ul className="flex justify-center -space-x-px">
                  <li>
                    <button
                      className={`bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Anterior
                    </button>
                  </li>
                  {paginationItems}
                  <li>
                    <button
                      className={`bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Siguiente
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
    )
}

export default Pagination