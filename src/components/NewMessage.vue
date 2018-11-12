<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (enter to add):</label>
            <input type="text" name="new-message" v-model="newMessage">
            <p class="red-text" v-if="feedback">{{ feedback }}</p>
        </form>
    </div>
</template>

<script>
import { db, messaging } from "@/firebase/init";

export default {
  name: "NewMessage",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      feedback: null
    };
  },
  methods: {
    addMessage() {
      console.log(this.name, this.newMessage, Date.now());
      if (!this.newMessage) {
        return (this.feedback =
          "You must enter a message in order to send one");
      }
      db.collection("messages")
        .add({
          name: this.name,
          content: this.newMessage,
          timestamp: Date.now()
        })
        .catch(error => console.log(error));
      this.newMessage = null;
      this.feedback = null;
    }
  }
};
</script>

<style>
</style>


