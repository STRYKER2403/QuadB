import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Book = () => {
    let { movieId } = useParams();
    const [Mname, setMname] = useState();
    const [language, setlanguage] = useState();
    const [time, settime] = useState();
    const [days, setdays] = useState();

    const fetchdata = async () => {

        const url = `https://api.tvmaze.com/lookup/shows?imdb=${movieId}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData.name)
        setMname(parsedData.name)
        setlanguage(parsedData.language)
        settime(parsedData.schedule.time ? parsedData.schedule.time : "20:00")
        setdays(parsedData.schedule.days[0] ? parsedData.schedule.days[0] : "Monday")
    }

    useEffect(() => {

        fetchdata();
        // eslint-disable-next-line
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className=' dark container-fluid min-vh-100'>

            <form className='mx-5'>

                <div className='d-flex'>
                    <h2 className='text-white my-4'>Movie : {Mname}</h2>
                    <h2 className='text-white ms-5 my-4'>Language : {language}</h2>
                    <h2 className='text-white ms-5 my-4'>Time : {time}</h2>
                    <h2 className='text-white ms-5 my-4'>day : {days}</h2>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-white mt-4">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-white">Phone No.</label>
                    <input type="phone" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your Phone No. with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-white">No. of Seats</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>

                <button className="btn btn-outline-light mt-4" onClick={handleSubmit}>Book Tickets</button>
            </form>
        </div>
    )
}

export default Book
