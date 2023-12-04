

async function getUser(id){
    let data= await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    return data.result;
}


export default async function page({params}){

    const user = await getUser(params.userid);
   
return(
    <>
    <h2 className="py-5">user detail</h2>
    <h2>Name: {user.name} </h2>
    <h2>Age: {user.age} </h2>
    <h2>Email: {user.email} </h2>
    <h2>Id: {user.id} </h2>
    </>
)
}