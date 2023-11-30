# Bootzapp

Questo progetto mette insieme tutte le competenze che abbiamo acquisito fino ad ora e consiste nel ricreare la webapp di Whatsapp.

Abbiamo milestone precise da seguire quindi la spiegazione del programma è diviso da esse.

La repo è divisa in cartelle che contengono l'avanzamento di ogni milestone, quindi, ad esempio, per vedere il codice del progetto nello stato in cui si trovava alla milestone 1, bisogna aprire la cartella "milestone1".

## Milestone 1

Per la milestone 1 dobbiamo ricreare la struttura `html`e `css` del progetto, includendo una struttura dati che andrá a gestire le informazioni di ogni conversazione.

I dati vengono salvati in un array di oggetti (`contacts`) nel quale ci sono dei dati (`name`,`avatar`,`visible`) e un altro array di oggetti (`Messages`) in cui venogono salvati:

- la data del messaggio con `date`
- il contenuto del messaggio con`message`
- lo status di invio o ricezione con `status`.

Per l'interfaccia dell'header ho usato Vue per ottenere dinamicamente i dettagli del contatto, come l'avatar e il nome, dall'array dei contatti, con `contacts[1].avatar` e `contacts[1].name`.

La stessa identica cosa viene fatta nella lista di contatti ma con un ciclo for, quindi vue scorre fra tutti gli oggetti degli array e genera un pannello per ogni contatto, essendo che non ho specificato un contatto specifico li genera tutti.

## Milestone 2

Per la milestone 2 dobbiamo occuparci della visualizzazione dinamica dei messaggi, quindi tramite la direttiva v-for visualizzare tutti i messaggi realtivi al contatto attivo all'interno del pannello della conversazione e mostrare la conversazione del contatto al click su di esso.

Ho approcciato il problema della visualizzazione dinamica dei messaggi per ogni chat con una funzione `showChat`all'interno dei metodi di Vue.

Questa funzione impostal'indice del contatto selezionato nella variabile `selectedContactIndex`, mostrando la chat associata a quel contatto.

- Quano il contatto viene cliccato, tramite @Click, Vue passa l'indice del contatto alla funzione

- L'`index` ricevuto viene assegnato alla variabile `selectedContactIndex` nell'oggetto `data` e identifica il contatto selezionato dalla lista

Nella sezione messaggi dell'HTML poi un div con un v-if controlla se `selectedContactIndex` é null o no e il contenuto viene visualizzato solo se non lo é.

Poi con un `v-for` vengono ciclati tutti i messaggi del contatto selezionato e vengono inseriti nella chat

Per l'ora invece ho usatao un'altra funzione `extractTime(dateTime)` che usa il metodo split per dividere la data dall'ora e poi viene usato ancora per dividere la data in giorni mesi e anno per un suo futuro uso.

Infine con `return `${hours}:${minutes}`;` faccio il return solo dell'ora e dei minuti dell'invio del messaggio.
