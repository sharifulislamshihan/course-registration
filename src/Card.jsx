import { useEffect } from "react";
import Cart from "./Cart";
import { useState } from "react";
const Card = () => {

    const [course, setCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);

    useEffect(() => {
        fetch("../public/info.json")
            .then((res) => res.json())
            .then((data) => setCourse(data));
    }, []);

    const handleSelectedCourse = (course) =>{
        setSelectedCourse([...selectedCourse, course]);
    };
    console.log(selectedCourse);


    return (
        <div id="Container" className="flex flex-col lg:flex-row mx-auto">
            <div className="lg:w-2/3 gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    course.map((course) => (
                    <div key={course.id} className='w-72 h-96 p-3'>
                        <img className='pb-4' src={course.image} alt="Image" />
                        <h2 className=' text-base font-bold pb-4'>{course.courseName}</h2>
                        <p className=' text-slate-600 pb-4 '><small>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</small></p>

                        <div className='flex gap-7 '>
                            <div className='flex gap-1' >
                                <img className=' w-4 h-5 ' src="../Asset/dollar-sign 1.png" alt="" />
                                <p className=' text-sm text-slate-600'>Price : {course.price}</p>
                            </div>

                            <div className='flex gap-1'>
                                <img className='w-4 h-5' src="../Asset/Frame.png" alt="" />
                                <p className=' text-sm text-slate-600'>Credit : {course.credit}</p>
                            </div>
                        </div>

                        <button onClick={()=> handleSelectedCourse(course)} className=' card-btn flex w-64 h-8 bg-blue-500 rounded-lg text-white text-base font-bold my-5 justify-center items-center '>Select</button>
                    </div>))
                }
            </div>
            <div className=" mx-auto ">
                <Cart selectedCourse= {selectedCourse}></Cart>
            </div>
        </div>
    );
};

export default Card;