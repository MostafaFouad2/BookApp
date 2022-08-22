import { useState , useEffect} from "react";
import { bookActions } from '../../store/book-slice';
import {useDispatch } from 'react-redux';

const Header = () =>{
    const dispatch = useDispatch();
    const[searchInput,setSearchInput] = useState('');

    useEffect(() => {
        if(searchInput !==''){
            const ser = searchInput.replace(/\s/g, '%20')
            dispatch(
                bookActions.urlBooks({
                    url: `http://gutendex.com/books?search=${ser}`
                })
            )
        }else{
            dispatch(
                bookActions.urlBooks({
                    url: 'http://gutendex.com/books'
                })
            )
        }
        
        
      }, [searchInput, dispatch]);

    const handleChange = (event)=> {
        setSearchInput(event.target.value);
      }

    const allBooks = ()=>{
        dispatch(
            bookActions.urlBooks({
                url: 'http://gutendex.com/books'
            })
        )
    }
    return(
        <div className="mr-4 ml-4 mt-2 flex justify-between " >
            <div className="w-[10%] flex justify-between">
                <button className="mt-1" onClick={allBooks}>
                    <h2 className=" text-2xl font-bold tracking-tight text-gray-900">BookSy</h2>
                </button>
            </div>
            <div className="relative w-[80%]" >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search By Title Or Author"
                        onChange={handleChange}
                        className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-full outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    />
            </div>
        </div>
    );
};

export default Header;