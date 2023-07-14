import React, { useState, useEffect } from 'react'
import './Home.css'
import { StyledFirebaseAuth } from 'react-firebaseui'
import firebase from '../firebase/firebase'
import LoadingScreen from './LoadingScreen'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import banner from '../assets/banner1.png'

const Home = ({ setUser }) => {
	const [loading, setLoading] = useState(true)
	var uiConfig = {
		signInflow: 'popup',
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.FacebookAuthProvider.PROVIDER_ID,
			firebase.auth.EmailAuthProvider.PROVIDER_ID,
		],
		callbacks: {
			signInSuccessWithAuthResult: () => false,
		},
	}
	useEffect(() => {
		let isMounted = true
		firebase.auth().onAuthStateChanged((user) => {
			// setIsLoggedIn(!!user)
			if (user && isMounted) {
				setUser({
					uid: firebase.auth().currentUser.uid,
					name: firebase.auth().currentUser.displayName,
					email: firebase.auth().currentUser.email,
				})
				console.log('User Logged In')
			} else {
				console.log('User Signed Out')
				setUser({})
			}
			console.log('auth change')
			if (isMounted) setLoading(false)
		})
		return () => (isMounted = false)
	}, [setUser])
	return (
		<>
			{loading ? (
				<LoadingScreen />
			) : (
				<div>
				<Navbar />
				<div id='Home-main'>
				   <div className='Home'>
					<div id='logo'>
						<div id='logo-name'>
							<b>Quiz-</b>ADDA
						</div>
						<div id='description'>
							Create a Quiz. Join a Quiz. Invite a Friend for a Quiz.
						</div>
					</div>
					<div className='img-flex'>
						<img src={banner} ></img>
					</div>
					</div>
					<div className='img-class'>
					<div id='login-card'>
						<label className='login-label'>
							<b>Let's begin</b>
						</label>
						<StyledFirebaseAuth
							borderRadius='40px'
							uiConfig={uiConfig}
							firebaseAuth={firebase.auth()}
						/>
					</div>
					</div>
				</div>
				<Footer />
				</div>
			)}
		</>
	)
}

export default Home
