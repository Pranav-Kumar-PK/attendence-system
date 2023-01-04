import { useState } from "react";

const Form = (props) => {
    const [present, setPresent] = useState(false);
    const allStudents = props.data;
    const prevStudents = props.set;
    const [student, setStudent] = useState({
        "name": "",
        "rollNo": "",
        "checkin": "",
        "isPresent": true,
        "checkout": ""
    });

    const nameChangeHandler = (event) => {
        // console.log(event.target.value);
        setStudent((prev) => {
            return { ...prev, ["name"]: event.target.value }
        })
    }

    const rollChangeHandler = (event) => {
        // console.log(event.target.value);
        let state = false;
        allStudents.map((item) => {
            // console.log(item.rollNo)
            // console.log(event.target.value)
            // console.log(item.rollNo.toString() == event.target.value.toString());
            item.rollNo.toString() == event.target.value.toString() && (state = true);
        })
        setPresent(state);
        setStudent((prev) => {
            return { ...prev, ["rollNo"]: event.target.value }
        })
    }

    const checkboxChangeHandler = () => {
        console.log("clicked");
        const state = !present;
        const now = new Date();
        const time = now.getHours() + ":" + now.getMinutes();
        setStudent((prev) => {
            return { ...prev, ["isPresent"]: state, ["checkin"]: time }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(student.name==="" || student.rollNo==="")return;
        if (!student.isPresent) {
            const now = new Date();
            const time = now.getHours() + ":" + now.getMinutes();
            prevStudents((prev) => {
                return prev.map((item) => (
                    item.rollNo.toString() === student.rollNo.toString() ? { ...item, "isPresent": false, "checkout": time } : item
                ))
            })
        }
        else {
            prevStudents((prev) => {
                return [...prev, student]
            });
        }
        document.getElementById("form_data").reset();
        setStudent({
            "name": "",
            "rollNo": "",
            "checkin": "",
            "isPresent": true,
            "checkout": ""
        })
        setPresent(false)

    }




    // console.log(students);

    return (
        <div>
            <form className="form__wrapper needs-validation" id="form_data" novalidate>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Enter your name" onChange={nameChangeHandler} value={student.name} required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="rollNo">Roll No</label>
                    <input type="text" className="form-control" id="rollNo" placeholder="Enter your Roll No" onChange={rollChangeHandler} value={student.rollNo} required />
                </div>
                <div className="form-group form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={checkboxChangeHandler} required />
                    <label className="form-check-label" htmlFor="exampleCheck1" >{present ? "Check-Out" : "Check-In"}</label>
                </div>
                <button type="button" className="btn btn-primary mb-3" onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
}

export default Form;