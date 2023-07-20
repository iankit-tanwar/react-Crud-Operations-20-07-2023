
import { useEffect, useState } from 'react';
import './App.css';

function Teacher() {
  //2.1 Hooks area

  const[teacher, setTeachers] = useState([]);

  // useEffect is used for the page load
  useEffect(() => {
    fetch(`http://localhost:1337/api/teachers`, {
      method: 'GET',

    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data)
        setTeachers(data.data)
      })
      .catch((err) => {
        return err;
      });
  }, [])

  //2.2 function defination area



  //2.3 return area

  return (
    <>
      <div className="container">
        <form className='offset-3 w-50'>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <br></br>
        <hr></hr>

        <table className="table offset-3 w-50">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">CreatedAt</th>

            </tr>
          </thead>
          <tbody>

            {
               teacher.length>0&& teacher.map((cv, idx, arr) => {
                return <tr>
                  <td  key={idx}>{cv.id}</td>
                  <td>{cv.attributes.name}</td>
                  <td>{cv.attributes.createdAt}</td>

                </tr>

              })
            }


          </tbody>
        </table>
      </div>



    </>
  );
}

export default Teacher;
