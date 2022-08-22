import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookData } from '../../store/book-actions';
import { bookActions } from '../../store/book-slice';
import BookItem from './BookItem';
import Loading from '../loading/Loading';

const Books = () =>{
    const dispatch = useDispatch();
    const book = useSelector((state) => state.book);
    const uiLoading = useSelector((state) => state.ui);

    useEffect(() => {
        dispatch(fetchBookData(book.url));
      }, [book.url,dispatch]);

      const nextPage = () => {
        dispatch(
          bookActions.nextPage()
        );
      };
    
      const prevPage = () => {
        dispatch(
          bookActions.previousPage()
        );
      };

      

    return(
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className=" mt-4 flex justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-gray-900">Popular Now</h2>
            <div className="flex">
                <button disabled={book.previousPage == null} onClick={prevPage} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                    Prev
                </button>
                <button disabled={book.nextPage == null} onClick={nextPage} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                    Next
                </button>
            </div>
        </div>
        
       
        {uiLoading.loading&&<Loading/>}
        {!uiLoading.loading&&book.books.length === 0&&<div className="flex items-center justify-center mt-[150px]">
            <h2 className=" text-xl font-bold tracking-tight text-red-700">NOT FOUND!</h2>
        </div>}
        {!uiLoading.loading&&<div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {book.books.map((book) => (<BookItem key={book.id}  book={book} />))}
        </div>}
      </div>
    </div>
    );
};

export default Books;