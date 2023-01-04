import Table from "./Table"
import Form from "./Form"
import { useEffect, useState } from "react"


const Home = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        setStudents([
            {
                "name": "Pranav Kumar",
                "rollNo": "10086",
                "checkin": "7:11",
                "isPresent": true,
                "checkout": ""
            },
            {
                "name": "Vivek Jha",
                "rollNo": "10046",
                "checkin": "7:21",
                "isPresent": true,
                "checkout": ""
            }
        ])
    }, [])

    return (
        <div>
            <Form set={setStudents} data={students} />
            <Table data={students} />
        </div>
    )
}

export default Home;
