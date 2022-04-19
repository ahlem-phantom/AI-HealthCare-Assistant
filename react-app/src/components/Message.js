import React from 'react'

const Message = ({ message }) => {
  return (
    <>
      {message.isBot ? (
        <div className="flex items-end justify-start">
          <div
            className="
                flex flex-col
                space-y-2
                text-xs
                max-w-xs
                mx-2
                order-2
                items-start
                shadow-lg
                rounded-lg
                m-1
               
              "
          >
            <span
              className="
                    px-4
                    py-2
                   rounded-lg
                    inline-block
                    dark:bg-yellow-600
                    dark:text-white
                    bg-green-500
                    text-white
                  "
            >
              {message.text}
            </span>
          </div>
          <i className="fa fa-android w-6 h-6 dark:text-white  rounded-full order-1" />
        </div>
      ) : (
        <div className="flex items-end pt-2 justify-end">
          <div
            className="
                flex flex-col
                space-y-2
                text-xs
                max-w-xs
                mx-2
                order-1
                items-end
                shadow-lg
                rounded-lg
                m-1
              "
          >
            <span
              className="
                    px-4
                    py-2
                    rounded-lg
                    inline-block
                    dark:bg-blue-600
                    dark:text-white
                    bg-indigo-500
                    text-white
                  "
            >
              {message.text}
            </span>
          </div>
          <i className="fa fa-user w-6 h-6 dark:text-white  rounded-full order-1" />
        </div>
      )}
    </>
  )
}

export default Message
