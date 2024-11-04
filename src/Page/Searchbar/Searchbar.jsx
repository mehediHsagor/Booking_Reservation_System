
import { useEffect, useState } from 'react';
import '../Searchbar/Searchbar.css';
import Showbar from '../../Showbar/Showbar';

const Searchbar = () => {
    const [hotel, sethotel] = useState([]);
     
    const [data,setdata]=useState("");
    useEffect(() => {
        fetch("http://localhost:5000/users")
          .then((res) => res.json())
          .then((data) => sethotel(data));
      }, []);

    let filterout =  hotel.filter((currentvalue)=>{
      return currentvalue.location.address.toLowerCase().includes(data);
    

      })
    const getdata = (e) => {
        setdata(e.target.value);
        console.log(e.target.value)
    };

  /*  const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission if needed
        console.log("Form submitted");
    };*/

    return (
        <div className="text-center mb-5">
            <form >
                <span className="text-orange-500 text-2xl ml-5">Search:</span>&nbsp;&nbsp;
                <input type="text" name="place" placeholder="Place" onChange={getdata} />
                <input type="text" name="category" placeholder="Category" onChange={getdata} />
                <input type="date" name="date" placeholder="Time" onChange={getdata} />&nbsp;&nbsp;&nbsp;
                <button type="submit" className="ssuubb">Submit</button>
            </form>
            {filterout?.map((cart) => (
        <Showbar key={cart?.id} cart={cart}></Showbar>
      ))}

        </div>
    );
};

export default Searchbar;



