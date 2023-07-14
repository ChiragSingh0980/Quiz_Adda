import { Link } from "react-router-dom"
import React from "react"

const NotFoundPage = () => {
	return (
		<div className="loading">
			<h1>404 Page Not Found!</h1>
			<div id="logo-name">
				<b>Quiz</b>-ADDA
			</div>
			<h3>
				<Link to="/">Click here</Link> to
				go back to the Dashboard.
			</h3>
		</div>
	)
}

export default NotFoundPage
