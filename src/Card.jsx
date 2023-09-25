import { useEffect } from "react";
import Cart from "./Cart";
const Card = () => {

    useEffect( () =>{
        fetch("../public/info.json")
        .then((res) => res.json())
        .then((data) => console.log(data));
    }, [])


    return (
        <div>
            <div id='card' className='w-72 h-96 border-solid border-2 border-orange-500 p-3'>
                <img className='pb-4' src="https://i.ibb.co/B40B7Fw/Rectangle-2-2.png" alt="Image" />
                <h2 className=' text-base font-bold pb-4'>Introduction to C Programming</h2>
                <p className=' text-slate-700 pb-4 '><small>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</small></p>

                <div className='flex gap-7 '>
                    <div className='flex gap-1' >
                        <img className=' w-4 h-5 ' src="../Asset/dollar-sign 1.png" alt="" />
                        <p className=' text-sm text-slate-700'>Price : 14000</p>
                    </div>

                    <div className='flex gap-1'>
                        <img className='w-4 h-5' src="../Asset/Frame.png" alt="" />
                        <p className=' text-sm text-slate-700'>Credit : 1hr</p>
                    </div>
                </div>

                <button className=' flex w-64 h-8 bg-blue-500 rounded-lg text-white text-base font-bold my-5 justify-center items-center '>Select</button>
            </div>
        </div>
    );
};

export default Card;