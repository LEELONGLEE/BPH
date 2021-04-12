import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';

import Config from '../botchat/config.js'
import MessageParser from '../botchat/MessageParser.js'
import ActionProvider from '../botchat/ActionProvider.js'

const BotChat = () => {
    return (
        <div className="BotChatArea">
            <div style={{ maxWidth: "300px" }}>
                <Chatbot 
                config={Config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}/>
            </div>
        </div>
    )
}

export default BotChat;