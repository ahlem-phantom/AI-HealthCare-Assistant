import React, { useState } from 'react'
import axios from 'axios'
import Messages from './Messages'

const Chat = () => {
  const [responses, setResponses] = useState([])
  const [currentMessage, setCurrentMessage] = useState('')

  const handleMessageSubmit = (message) => {
    const data = {
      message,
    }

    axios
      .post('http://localhost:8080/chatbot', data)
      .then((response) => {
        const responseData = {
          text:
            response.data['message']['fulfillmentText'] !== ''
              ? response.data['message']['fulfillmentText']
              : "Sorry, I can't get it. Can you please repeat once?",
          isBot: true,
        }
        setResponses((responses) => [...responses, responseData])
      })
      .catch((error) => {
        console.log('Error: ', error)
      })
  }

  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value)
  }

  const handleSubmit = (event) => {
    const message = {
      text: currentMessage,
      isBot: false,
    }
    if (event.key === 'Enter' && event.target.value !== '') {
      setResponses((responses) => [...responses, message])
      handleMessageSubmit(message.text)
      setCurrentMessage('')
    }
  }

  return (
    <div style={{width : '1100px'}}>
      <div className="flex justify-end px-3 mx-auto">
        <div className="flex flex-col justify-between w-full h-auto max-w-xs py-4 my-2 bg-gray-100 shadow-sm lg:max-w-screen-lg bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
          <div className="flex flex-col p-3 space-y-4 overflow-y-auto scrolling-touch messagesSection scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2">
            <Messages messages={responses} />
          </div>

          <div className="flex justify-center px-3 py-2 border-t-2 border-gray-200 dark:border-gray-600 ">
            <div className="w-full px-2 py-2 bg-white rounded-lg shadow-sm dark:bg-gray-800 lg:max-w-screen-lg  ">
              <input
                type="text"
                value={currentMessage}
                onChange={handleMessageChange}
                onKeyDown={handleSubmit}
                placeholder="Enter your message here"
                className="block w-full py-2 pl-3 pr-3 text-sm placeholder-gray-500 bg-blue border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-900 dark:text-white dark:placeholder-gray-100 focus:outline-none focus:text-gray-900 dark:focus:text-white focus:placeholder-gray-400 dark:focus:placeholder-white focus:ring-1 focus:ring-indigo-300 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
