import { useSelector } from 'react-redux';


const User=()=>{
    let uname=useSelector((state)=>state.counter.user.uname);
    let profilepec=useSelector((state)=>state.counter.user.pic);
    let defpic="https://cdn.vectorstock.com/i/500p/97/32/man-silhouette-profile-picture-vector-2139732.jpg";
    return(
        <>
        {
            profilepec?(<img src={profilepec} className='profilepec'/>):
            (<img src={defpic} className='profilepec'/>)

        }

        <h4>{uname}</h4>

        </>
    )
}

export default User;