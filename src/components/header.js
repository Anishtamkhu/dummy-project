export default function Header(){
    return(
          <div className="bg-red-200 p-4">
        {/* logo and imae contaner*/} 
        <div className="flex justify-between item-center mb-4">
            { /* logo (left side) */}
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                alt="logo"
                className="w-12 h-10"
                />
            </div>
;
            {/* image (right sde )*/}
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" 
                alt="Description of image"
                 className="w-12 h-10"/>

            </div>
        </div>
        {/* main header*/}
        <h1 className="text-3xl font- semibold text-gray-800 text-center">soogle</h1>

        {/*search box*/}
        <div className="at-4 flex justify-center">
            <input 
            type="text"
            placeholder="search"
            className="w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>

            </div>
            </div>
    );
}