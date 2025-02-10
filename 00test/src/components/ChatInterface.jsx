import React, { useState } from 'react';

function ChatInterface({ isOpen, onClose }) {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([
    { id: 1, user: 'Alex K.', lastMessage: 'Is this still available?', unread: 2 },
    { id: 2, user: 'Support Team', lastMessage: 'How can we help?', unread: 0 },
  ]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alex K.', text: 'Is this still available?', time: '2:30 PM' },
    { id: 2, sender: 'You', text: 'Yes, it is!', time: '2:31 PM' },
  ]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 md:inset-auto md:right-0 md:top-20 md:bottom-0 md:w-96 shadow-lg">
      <div className="flex h-full">
        {/* Chat List */}
        <div className={`w-full ${selectedChat ? 'hidden md:block' : ''} md:w-1/3 border-r`}>
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Messages</h2>
          </div>
          <div className="overflow-y-auto h-[calc(100%-60px)]">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className="p-4 border-b hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{chat.user}</span>
                  {chat.unread > 0 && (
                    <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                      {chat.unread}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        {selectedChat && (
          <div className="w-full md:w-2/3 flex flex-col">
            <div className="p-4 border-b flex items-center">
              <button
                onClick={() => setSelectedChat(null)}
                className="md:hidden mr-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h2 className="text-lg font-semibold">{selectedChat.user}</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      msg.sender === 'You'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="text-xs opacity-75 mt-1 block">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                />
                <button
                  onClick={() => {
                    if (message.trim()) {
                      setMessages([
                        ...messages,
                        {
                          id: messages.length + 1,
                          sender: 'You',
                          text: message,
                          time: new Date().toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          }),
                        },
                      ]);
                      setMessage('');
                    }
                  }}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}