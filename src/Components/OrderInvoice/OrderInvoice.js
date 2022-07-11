import Icon from "../../IcoMoon/Icon";
import CartItems from "../CartItems/CartItems"
const waiter = 'Megan';
//let total = '$' + totalNumber;


function OrderInvoice(props) {
    
    return(
        <div className='bg-[#B5D6B2] shadow-md rounded-2xl h-[93vh] mt-5 font-poppins font-normal fixed w-[28vw]'>
            <div className='bg-[#FAFAFA] shadow-md rounded-2xl my-[2vh] mx-[1vw] px-[6%] py-[1%]'>
                Waiter: {waiter}
            </div>
            <div className='bg-[#FAFAFA] shadow-md rounded-2xl mx-[1vw] mb-[2vh] px-[6%] py-[1%]'>
                <label>Table:</label>
                <select name="select" className='bg-[#FAFAFA]'>
                    <option value="table1">1</option>
                    <option value="table2">2</option>
                    <option value="table3">3</option>
                    <option value="table4">4</option>
                    <option value="table5">5</option>
                </select>
            </div>
            <hr className='w-[90%] mx-[5%]' />
            <CartItems 
                key={props.id}
                selected={props.selected} 
                setSelected={props.setSelected} 
            />
            <hr className='w-[90%] mx-[5%]' />
            <div className='bg-[#FFBF69] shadow-md rounded-2xl my-[2vh] mx-[1vw] px-[6%] py-[1%] grid grid-flow-col justify-between'>
                <p>Total:</p>
                <p>${props.total}</p>
            </div>
            <div>
                <Icon color="#1B1A1A" size={26} icon="bin" className='mx-[1.8vw]' />
                <button className='font-medium bg-[#1B1A1A] text-white shadow-md rounded-2xl px-[6%] py-[1%] w-[20vw]'>
                    Send order
                </button>
            </div>
        </div>
    );
}

export default OrderInvoice;