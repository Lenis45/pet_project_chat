import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(' 25d68175-d52c-4031-89a6-4a4bf6215704', props.user.username, props.user.secret);
    return (
    <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps}  style={{ height: '100%'}}/>
    </div>
    )
}
export default ChatsPage;