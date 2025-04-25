import { useState } from "react";


const Addcategory = () => {
  const [message, setMessage] = useState('');
  const [category, setcategory] = useState([]);
    const handleaddcategory = event =>{
        event.preventDefault();
       const  form = event.target;
      // const  hotel_id = form.hotel_id.value;
       const name = form.name.value;
       
      
       const type = form.type.value;
       const image = form.image.value;
       const description = form.description.value;
       const user ={ name ,type,image,description};
  console.log(user)


  
  fetch('http://localhost:5000/category',{
    method:'POST',
    headers:{

        "Content-Type": "application/json",

    },
    body : JSON.stringify(user)


  })
  .then(res=>res.json())
  .then(data=>{
    setcategory((Users) => [...Users, data]);
    console.log(data);
    setMessage("Category added successfully!");
    
    form.reset();
  })

    }
  

    

  


    return (
        <div>
              <h1> this is a category</h1>
              <div className="card bg-base-100 w-full max-w-sm shrink-0  justify-center text-center ml-96 shadow-2xl">
      <form  onSubmit={handleaddcategory} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Hotel Name</span>
          </label>
          <input type="text" placeholder="Hotel Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Hotel Type</span>
          </label>
          
          <select name="type" className="input input-bordered">
            <option >Hotel Type</option>
        <option value="Resort">Resort</option>
          <option value="Boutique">Boutique</option>
          <option value="Budget">Budget</option>
           <option value="Luxury">Luxury</option>
          <option value="Business">Business</option>
</select>

         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Hotel Image</span>
          </label>
          <input type="text" placeholder="hotel image" name="image" className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Hotel Description</span>
          </label>
          <input type="text" placeholder="hotel image" name="description" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default Addcategory;