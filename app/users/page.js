

import Link from "next/link";
import DeleteUser from "@/app/util/DeleteUser"
async function getUsers(){
    let data= await fetch("http://localhost:3000/api/users");
    data = await data.json();
    return data;
}
export default async function page(){
    const users= await getUsers();
    console.log(users);
    return(
        <>
        <h1>user list</h1>
        {
            users.map((item)=>(
                <div>
                 <Link href={`users/${item.id}`}> {item.name} </Link>
                 <span><Link href={`users/${item.id}/update`}> edit</Link></span>
                 <DeleteUser id={item.id} />
                </div>
            ))
        }
        </>
    )
}



