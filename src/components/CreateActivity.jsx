import React,{useState} from 'react'
import { createActivity } from '../api';
import { useNavigate } from 'react-router-dom';

const CreateActivity = () => {

const [name ,setName] = useState("");
const [description, setDescription] = useState("");
const navigate = useNavigate();


const handleName = (e) =>{
    setName(e.target.value);
};

const handleDescription = (e) =>{
    setDescription(e.target.value);
};

const handleSubmit = (e) =>{
    e.preventDefault();
    const handleCreateActivity = async () =>{
        try {
           const response = await createActivity( name, description); 
        } catch (error) {
            if(error.response.status === 403){
                alert ("This activity already exists");
            }else{
                console.error(`Error creating activity`);
                throw error;
            }
            
        }
    };

handleCreateActivity(name, description);
setName("");
setDescription("");
navigate("/activities");

};



    
return (
  <section className="App h-screen w-full flex justify-center items-center ">
    <div className="w-full max-w-md bg-gray-800">
      <form
        className=" bg-grey shadow-md rounded px-8 py-8 pt-8"
        onSubmit={handleSubmit}
      >
        <div className="px-4 pb-4">
          <label
            htmlFor="activity"
            className="text-sm text-gray-200 block font-bold  pb-2"
          >
            Activity Creator
          </label>
          <input
            type="text"
            id="creator"
            value={name}
            onChange={handleName}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
            placeholder="create activity"
          />
        </div>
        <div className="px-4 pb-4">
          <label
            htmlFor="describe activity"
            className="text-sm text-gray-200 block font-bold pb-2"
          >
            Description
          </label>
          <input
            type="text"
            id="desc"
            value={description}
              onChange={handleDescription}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            placeholder="Describe Activity"
          />
        </div>
        <div>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>
);
}

export default CreateActivity
