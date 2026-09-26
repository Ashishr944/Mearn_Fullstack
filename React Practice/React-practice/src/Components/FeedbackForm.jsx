import React, { useState } from 'react'

const FeedbackForm = () => {

    const [student, setStudent]=  useState({course:"", feedback: ""});

    const handleCource = (e) => {
        setStudent((prev) => ({...prev, course: e.target.value}))
    }
    const handleFeedback = (e) => {
        setStudent((prev) => ({...prev, feedback: e.target.value}))
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(student)
    }
  return (
    <form onSubmit={handleSubmit}>
        <select name="" id="" onChange={handleCource}>
            <option value="">Select Course</option>
            <option value="react">React</option>
            <option value="js">JavaScript</option>
            <option value="css">CSS</option>
        </select>
        <textarea name="" id="" placeholder='Write your Feedback' onChange={handleFeedback}></textarea>
        <button type='submit'>Send</button>
    </form>
  )
}

export default FeedbackForm
