import { eventBus, showSuccessMsg } from '../services/event-bus.service'
import { useState, useEffect, useRef } from 'react'
import { socketService, SOCKET_EVENT_REVIEW_ABOUT_YOU } from '../services/socket.service'

export function UserMsg() {
	const [msg, setMsg] = useState(null)
	const timeoutIdRef = useRef()

	useEffect(() => {
		const unsubscribe = eventBus.on('show-msg', (msg) => {
			setMsg(msg)

			if (timeoutIdRef.current) {
				timeoutIdRef.current = null
				clearTimeout(timeoutIdRef.current)
			}
			timeoutIdRef.current = setTimeout(closeMsg, 3000)
		})

		// Listen for the "reservation-approved" event
		socketService.on('reservation-approved', (data) => {
			showSuccessMsg(`Your reservation for ${data.stayName} has been approved!`)
		})

		return () => {
			unsubscribe()
			socketService.off('reservation-approved')
		}
	}, [])

	// Function to close the message
	function closeMsg() {
		setMsg(null)
	}

	// Determine the visibility class for the message
	function msgClass() {
		return msg ? 'visible' : ''
	}

	return (
		<section className={`user-msg ${msg?.type} ${msgClass()}`}>
			<button onClick={closeMsg}>x</button>
			{msg?.txt}
		</section>
	)
}
