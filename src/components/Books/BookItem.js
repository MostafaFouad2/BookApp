

const BookItem =(props)=>{
    const book = props.book;

    return(
            <div className="group relative">
              <div className="max-w-[17rem] h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={book.formats["image/jpeg"]||"http://books.google.com/books/content?id=1yx1tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
                  alt={book.subjects}
                  className="w-full h-full object-center object-fill lg:w-full lg:h-full"
                />
              </div>
              <div className="max-w-[17rem] mt-4 flex justify-between">
                
                <span className="text-sm text-gray-700">{book.title}</span>
                <div className="flex justify-between">
                    <svg className="fill-current w-3 h-3  m-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span className="text-sm font-medium text-gray-900">{book.download_count}</span> 
                </div>
                
              </div>
            </div>
    );
};

export default BookItem;