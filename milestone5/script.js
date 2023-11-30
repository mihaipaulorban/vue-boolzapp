"use strict";

// Le => quando richiamo funzioni nell'html servono per non dare errori di contesto alle funzioni
// dato che vue crea effettivamente delle funzioni freccia che richiamano le mie funzioni

//Destrutturo createApp da Vue JS
const { createApp } = Vue;

// Istanzio l'app
const myApp = createApp({
  data() {
    return {
      // Struttura dati per tutti i contatti
      contacts: [
        {
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
      // Indice del contatto selezionato
      selectedContactIndex: null,

      // Messaggi da inviare
      newMessage: "",

      // Ricerca contatti
      searchQuery: "",
    };
  },

  // Uso computed perché con le computed properties i dati dell'input vengono calcolati automaticamente
  // in base ai dati all'interno della lista e non devo farlo manualmente, tutto ció lo fa riferendosi a
  // searchQuery e la lista viene filtrata da vue senza che io mi complichi la vita
  computed: {
    filteredContacts() {
      return this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    // Funzione per mostrare l'indice del contatto selezionato
    showChat(index) {
      this.selectedContactIndex = index;
      console.log(this.selectedContactIndex);
    },
    // Funzione che estrae l'ora dalla data
    extractTime(dateTime) {
      const [datePart, timePart] = dateTime.split(" ");
      const [day, month, year] = datePart.split("/");
      const [hours, minutes, seconds] = timePart.split(":");

      return `${hours}:${minutes}`;
    },

    // Funzione per inviare messaggi in Chat
    sendMessage() {
      if (this.selectedContactIndex !== null && this.newMessage.trim() !== "") {
        const message = {
          date: new Date().toLocaleString(),
          message: this.newMessage.trim(),
          status: "sent",
        };
        // Questo this seve a far si che il messaggio vada nella chat corrente
        this.contacts[this.selectedContactIndex].messages.push(message);
        this.newMessage = "";

        // La funzione freccia come citato sopra serve a mantenere il contesto corretto per il this
        setTimeout(() => {
          this.sendReply();
        }, 1000);
      }
    },

    // Funzione per la risposta automatica
    sendReply() {
      const reply = {
        date: new Date().toLocaleString(),
        message: "OK",
        status: "received",
      };

      // Questo this seve a far si che il messaggio vada nella chat corrente
      this.contacts[this.selectedContactIndex].messages.push(reply);
    },

    //Funzione per far si che l'ultimo messaggio dalla lista non sia troppo lungo
    shortMessage(message) {
      const maxLength = 25;
      if (message.length > maxLength) {
        return message.substring(0, maxLength - 3) + "...";
      }
      return message;
    },
  },
});

myApp.mount("#app");
