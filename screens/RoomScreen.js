// Step 1: import Send
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
// Step 2: import IconButton
import { IconButton } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export default function RoomScreen() {
  // ...

  // Step 3: add a helper method

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon='send-circle' size={32} color='#6646ee' />
        </View>
      </Send>
    );
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{ _id: 1, name: 'User Test' }}
      renderBubble={renderBubble}
      placeholder='Type your message here...'
      showUserAvatar
      alwaysShowSend
      // Step 4: add the prop
      renderSend={renderSend}
    />
  );
}

// Step 5: add corresponding styles
const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});