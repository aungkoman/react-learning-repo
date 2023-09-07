import axios from 'axios';
import React, { useEffect, useState } from 'react';

/* list of data */
const HomePage = () => {
    /* Component တိုင်းမှာ State နဲ့ UI နှစ်ပိုင်းပါမယ်။ */
    const [taskList, setTaskList] = useState([]);

    // for initial call
    useEffect(() => {
        console.log("home_page->useEffect");
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((response) => {
                console.log("home_page->useEffect response");
                console.log(response.data)
                setTaskList(response.data);
            })
    }, []);

    return <>
        <h1>HomePage</h1>
        <ul>
        {taskList.map((data) => {
            return (
                <li id='{data.id}'>{data.name}</li>
            )
        })}
        </ul>
    </>;
};
  
  export default HomePage;