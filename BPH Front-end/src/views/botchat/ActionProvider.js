class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.addMessageToState = this.addMessageToState.bind(this);
    }

    greet = () => {
        const message = this.createChatBotMessage("Chao Thay! :3");
        this.addMessageToState(message);
    } 

    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    }
}

export default ActionProvider;