import React from 'react'
import FeedbackForm from './Components/FeedbackForm'
import LoginForm from './Components/LoginForm'
import RegistrationForm from './Components/RegistrationForm'
import StudentAttendance from './Components/StudentAttendance'
import StudentDetails from './Components/StudentDetails'


const App = () => {
  return (
    <div>
      <FeedbackForm/>
      <LoginForm/>
      <RegistrationForm/>
      <StudentAttendance/>
      <StudentDetails/>
    </div>
  )
}

export default App
