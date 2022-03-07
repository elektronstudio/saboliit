const { createApp } = Vue;
const { config, useChat } = elektro;

config.wsUrl = "wss://ws.elektron.art";
config.messagesUrl =
  "https://ws.elektron.art/messages?secret=eestiteatriauhinnad";

const App = {
  setup() {
    const { chatMessages, newChatMessage, onNewChatMessage } =
      useChat("saboliit");
    return {
      chatMessages,
      newChatMessage,
      onNewChatMessage,
      dayjs,
    };
  },
  template: `
  <div style="font-family: Open Sans, sans-serif; background: #00dc6e; display: flex; justify-content: center">
    <div style="padding: 32px; width: 100%; max-width: 600px">
      <textarea
        v-model="newChatMessage"
        style="display: block; width: 100%; border: 4px solid black; font-size: 1.2em; font-weight: bold; padding: 16px; font-family: Open Sans, sans-serif; outline: none;"
        placeholder="Sinu kommentaar"
      />
      <br />
      <button style="background: #FC7BFB; border: none; font-size: 1.2em; font-weight: bold; padding: 16px; font-family: Open Sans, sans-serif; padding: 16px 32px" @click="onNewChatMessage">Saada kommentaar</button>
      <br>
      <br>
      <br>
      <br>
      <div style="display: grid; gap: 32px">
        <div v-for="m in chatMessages" :key="m.id">
          <div style="opacity: 0.5; font-size: 0.9em">Lisatud {{ dayjs(m.datetime).format("DD.MM.YYYY h:mm") }}</div>
          <br />
          <div>{{ m.value }}</div>
        </div>
      </div>
    </div>
  </div>
      `,
};

let root = document.createElement("div");
document.body.appendChild(root);
const app = createApp(App);
app.mount(root);
