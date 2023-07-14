import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import './OneTimeDashboard.css'
import Footer from '../components/Footer'

const OneTimeDashboard = ({ user }) => {
	const [path, setPath] = useState('')
	// Path Redirection
	const onDashboard = () => setPath('/dashboard')
	const onCreateQuiz = () => setPath('/create-quiz')
	const onJoinQuiz = () => setPath('/join-quiz')

	if (path.length > 0) return <Redirect push to={path} />

	return (
		<div className='one-time-dashboard'>
			<div id='dashboard-content'>
				<div className='dash-btns'>
					<h1 className='white'>
						<b>Quiz</b>-ADDA
					</h1>
					<button className=' one-time-button' onClick={onDashboard}>
						Dashboard
					</button>
					<button className=' one-time-button' onClick={onCreateQuiz}>
						Create Quiz
					</button>
					<button className=' one-time-button' onClick={onJoinQuiz}>
						Join Quiz
					</button>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default OneTimeDashboard
