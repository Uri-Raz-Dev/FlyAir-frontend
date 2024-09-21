import { eventBus } from '../services/event-bus.service'
import { useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { socketService, SOCKET_EVENT_REVIEW_ABOUT_YOU } from '../services/socket.service'

export function UserMsg() {
	const timeoutIdRef = useRef()

	useEffect(() => {
		const unsubscribe = eventBus.on('show-msg', (msg) => {
			showToast(msg)

			if (timeoutIdRef.current) {
				clearTimeout(timeoutIdRef.current)
			}
			timeoutIdRef.current = setTimeout(closeToast, 3000)
		})

		// Listen for the "reservation-approved" event
		socketService.on('reservation-approved', (data) => {
			showToast({ txt: `Your reservation for ${data.stayName} has been approved!`, type: 'success' })
		})

		return () => {
			unsubscribe()
			socketService.off('reservation-approved')
		}
	}, [])

	// Function to show the toast message
	function showToast(msg) {
		if (msg.type === 'success') {
			toast.success(msg.txt, {
				position: 'top-center',
				autoClose: 3000,
				closeButton: true,
			})
		} else if (msg.type === 'error') {
			toast.error(msg.txt, {
				position: 'top-center',
				autoClose: 3000,
				closeButton: true,
			})
		} else {
			toast(msg.txt, {
				position: 'top-center',
				autoClose: 3000,
				closeButton: true,
			})
		}
	}

	// Function to close the toast manually
	function closeToast() {
		toast.dismiss()
	}

	return (
		<>
			<ToastContainer /> {/* This is required to display the toast messages */}
		</>
	)
}
