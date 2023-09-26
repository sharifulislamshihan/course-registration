
const Cart = ({selectedCourse}) => {
    console.log(selectedCourse);
    return (
        <div>
            <h2 className=" text-blue-500 text-xl font-bold my-8 pb-2 ">Credit Hour Remaining <span>20</span> hr</h2>

            
            <h2 className=" text-xl font-bold text-black my-4 ">Course Name</h2>

            {
                selectedCourse.map((course) => (
                    <ol className="list-decimal text-slate-500 text-lg font-medium ">
                        <li>{course.courseName}</li>
                    </ol>
                ))
            }

            <h3 className=" my-10 text-base font-semibold ">Total Credit Hour : <span>13</span></h3>

            <h3 className=" my-10 text-base font-semibold ">Total Price : <span>48000</span> USD</h3>
        </div>
    );
};

export default Cart;