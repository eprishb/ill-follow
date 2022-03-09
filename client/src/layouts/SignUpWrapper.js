import React from 'react'
import { Outlet } from 'react-router-dom'

function SignUpWrapper() {
	return (
		<div className='signup-wrapper'>
			<Outlet />
		</div>
	)
}

export default SignUpWrapper