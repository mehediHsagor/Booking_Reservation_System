
import best from '../Best_staff/best1.jpg'
import '../Best_staff/Best_staff.css'
const BestStaff = () => {
    return (
        <div className='bbbbesst mt-14 m-auto '>
            
            <div className="card lg:card-side bg-red-50 shadow-xl">
            <figure><img className='best m-5' src={best} alt="Album"/></figure>
            <div className="card-body mt-14 ">
        <h2 className="card-title  text-orange-500 texttt  m-auto text-4xl">Best Staff</h2>
       <p className='m-auto p-6 text-xl'>Always greet guest and colleagues with a smile and maintain a friendly and pleasant expression.
          Stand upright, do not fold your arms in front of the guest.</p>
       <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
        </div>
    );
};

export default BestStaff;