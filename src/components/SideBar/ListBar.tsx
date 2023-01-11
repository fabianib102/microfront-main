import { BiWorld } from "react-icons/bi";

const ListBar = ({ open }: {open: boolean}) => {

    return (
        <ul className='pt-2'>
            <li className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2'>
                <span className='text-2xl block float-left'>
                    <BiWorld/>
                </span>
                <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>Countries</span>
            </li>
        </ul>
    )
}

export default ListBar;
