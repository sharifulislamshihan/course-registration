import { useEffect } from "react";
import Cart from "./Cart";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {

    const [course, setCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [total, setTotal] = useState([]); 
    const [remainingCredit, setRemainingCredit] = useState([]);
    const [totalCredit, setTotalCredit] = useState([]); 

    useEffect(() => {
        fetch("../public/info.json")
            .then((res) => res.json())
            .then((data) => setCourse(data));
    }, []);

    const handleSelectedCourse = (course) =>{
        const isAvailable = selectedCourse.find((item) =>item.id == course.id
        );
        let total = course.price;
        let totalCredit = course.credit;
        let remainingCredit  = 20 - totalCredit;
        if(isAvailable){
            toast.error('You have already selected this course.', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
            });
        }
        else{

            selectedCourse.forEach((item) => {
                total = total + item.price;
                remainingCredit = remainingCredit - item.credit;
                totalCredit = totalCredit + item.credit;
            });

            if(remainingCredit < 0){
                toast.error('Credit limit exceeded', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                });
            }
            else{
                setTotal(total);
                setRemainingCredit(remainingCredit);
                setTotalCredit(totalCredit);
                setSelectedCourse([...selectedCourse, course]);
            }
        }
    };



    return (
        <div id="Container" className="flex  flex-col sm:ml-10 lg:flex-row">
            <div className=" w-full lg:w-2/3 gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    course.map((course) => (
                    <div key={course.id} className='w-72 h-96 p-3 mx-auto'>
                        <img className='pb-4' src={course.image} alt="Image" />
                        <h2 className=' text-base font-bold pb-4'>{course.courseName}</h2>
                        <p className=' text-slate-600 pb-4 '><small>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</small></p>

                        <div className='flex gap-7 '>
                            <div className='flex gap-1' >
                                <img className=' w-4 h-5 ' src="https://i.ibb.co/Fg4svH6/dollar-sign-1.png" alt="" />
                                <p className=' text-sm text-slate-600'>Price : {course.price}</p>
                            </div>

                            <div className='flex gap-1'>
                                <img className='w-4 h-5' src="https://i.ibb.co/DRCYdNd/Frame.png" alt="" />
                                <p className=' text-sm text-slate-600'>Credit : {course.credit}</p>
                            </div>
                        </div>

                        <button onClick={()=> handleSelectedCourse(course)} className=' card-btn flex w-64 h-8 bg-blue-500 rounded-lg text-white text-base font-bold my-5 justify-center items-center '>Select</button>
                    </div>))
                }
            </div>
            <div className=" mx-auto ">
                <Cart selectedCourse= {selectedCourse} remainingCredit = {remainingCredit} total = {total} totalCredit = {totalCredit}></Cart>
            </div>
        </div>
    );
};

export default Card;