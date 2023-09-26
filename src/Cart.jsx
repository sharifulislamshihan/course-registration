import PropTypes from 'prop-types';

const Cart = ({selectedCourse, remainingCredit, total, totalCredit}) => {

    console.log(typeof selectedCourse);
    console.log(typeof remainingCredit);
    console.log(typeof total);
    console.log(typeof totalCredit);
    return (
        <div>
            <h2 className=" text-blue-500 text-xl font-bold my-8 pb-2 ">Credit Hour Remaining {remainingCredit} hr</h2>

            
            <h2 className=" text-xl font-bold text-black my-4 ">Course Name</h2>

            {selectedCourse.map((course) => (
                <li key={course.id}>{course.courseName}</li>))}

            <h3 className=" my-10 text-base font-semibold ">Total Credit Hour : {totalCredit}</h3>

            <h3 className=" my-10 text-base font-semibold ">Total Price :  {total}  USD</h3>
        </div>
    );
};

Cart.propTypes = {
    selectedCourse: PropTypes.object.isRequired,
    remainingCredit: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    totalCredit: PropTypes.number.isRequired,
}

export default Cart;