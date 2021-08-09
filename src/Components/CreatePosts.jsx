import React,{useState} from "react";

const loginUrl = "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT";


// const exampleCode ={
//     title: 'Civc',
//     description: 'Fair',
//     price: '$1,000',
//     location:'Chicago',
//     willDeliver: '',
// }

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(true);

    const onFormSubmit = (event) =>{
        event.preventDefault();
        const finalPost = {
            title: title,
            description: description,
            price: price,
            location:location,
            willDeliver: true
        };


const postEndPoint = loginUrl + "/posts";

const authToken =  window.localStorage.getItem('token')
console.log(authToken);

fetch(postEndPoint, 
    {
    method: "POST",
    headers:{
        "Content-Type": 'application/json',
        'Authorization': `Bearer ${authToken}` 
    },
    body: JSON.stringify({post:finalPost}),
}).then(res => res.json())
.then(result =>{
    console.log(result);
}).catch(console.error)
};

const updateTitle = (event) =>{setTitle(event.target.value);}

const updateDescription = (event) =>{setDescription(event.target.value)};
const updatePrice = (event) =>{setPrice(event.target.value)};
const updateLocation = (event) =>{ setLocation(event.target.value)};
const updateWillDeliver = (event) =>{ setWillDeliver(event.target.value)};



return (
        <div>
            <p>Create new Post? Please fill:</p>
            <form onSubmit={onFormSubmit}>
                <label>
                Title:
                <input type="text" value={title} onChange={updateTitle}/>
                </label>
                Description:
                <input type="text" value={description} onChange={updateDescription}/>
                Price:
                <input type="text" value={price} onChange={updatePrice}/>
                Location:
                <input type="text" value={location} onChange={updateLocation}/>
                Will Deliver?
                <input type="checkbox" value={willDeliver} onChange={updateWillDeliver}/>
                <button type="submit">Create Post</button>
            </form>
        </div>
)
};

export default CreatePost;