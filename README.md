# Bootzapp

Questo progetto mette insieme tutte le competenze che abbiamo acquisito fino ad ora e consiste nel ricreare la webapp di Whatsapp.

Abbiamo milestone precise da seguire quindi la spiegazione del programma è diviso da esse.

La repo è divisa in cartelle che contengono l'avanzamento di ogni milestone, quindi, ad esempio, per vedere il codice del progetto nello stato in cui si trovava alla milestone 1, bisogna aprire la cartella "milestone1".

## Milestone 1

Per la milestone 1 dobbiamo ricreare la struttura `html`e `css` del progetto, includendo una struttra dati che andrá a gestire le informazioni di ogni conversazione.

I dati vengono salvati in un array di oggetti (`contacts`) nel quale ci sono dei dati (`name`,`avatar`,`visible`) e un altro array di oggetti (`Messages`) in cui venogono salvati:

- la data del messaggio con `date`
- il contenuto del messaggio con`message`
- lo status di invio o ricezione con `status`.
