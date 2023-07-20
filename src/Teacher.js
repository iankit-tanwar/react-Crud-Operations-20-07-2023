
import { useEffect, useState } from 'react';
import './App.css';

function Teacher() {
  //2.1 Hooks area

  const [teacher, setTeachers] = useState([]);

  const [payload, setPayload] = useState({
    "data": {
      "name": "sushil"
    }
  });

  const [teacherName, setTeacherName] = useState('');

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


  let sendData = () => {
    fetch(`http://localhost:1337/api/teachers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(payload)
    })
      .then((res) => {
        return res.json();

      })
      .then((data) => {
        console.log(data);

        if (data) {
          alert('teacher created successfully')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }


  let setValue = (e) => {
    // console.log(document.getElementById("teacherName").value);
    let val = document.getElementById("teacherName").value;
    setTeacherName(val);

    console.log('teachername', teacherName)

    setPayload({
      ...payload,
      data: {
        name: val
      }
    }
    )

  }



  //2.3 return area

  return (
    <>

      <div className="container">
        <h1 className='text-center mt-3'>Create Teacher</h1>
        <form className='offset-3 w-50'>
          <div className="mb-3">
            <label htmlFor="teacherName" className="form-label">Teacher Name</label>
            <input type="text" className="form-control" id="teacherName" aria-describedby="emailHelp" name='teacher' onKeyDown={(e) => { setValue(e) }} />

          </div>

          <button type="submit" className="btn btn-primary" onClick={() => { sendData() }}>Submit</button>
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
              teacher.length > 0 && teacher.map((cv, idx, arr) => {
                return <tr>
                  <td key={idx}>{cv.id}</td>
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
