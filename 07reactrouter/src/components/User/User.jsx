import { useParams } from "react-router-dom"

export default function User(){
    const {userid} = useParams();
    return(
       <div className=" bg-gray-700 text-white text-3xl py-4">User: {userid}</div>
    )
}

