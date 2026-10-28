// Vari import
import express from "express";
import { router as rotteHome } from "./routes/home.js";
import { router as rotteBlog } from "./routes/blog.js";

// Inizializzazione app
const app = express();

// Motore di rendering dei template predefinito
app.set("view engine", "ejs");

// Inizializzazione porta standard
const PORT = 3000;

// Middleware per rendere accessibili i file statici della cartella "public"
app.use(express.static("public"));

// TODO: completare le varie sezioni prima di montare le rotte
app.use("/home", rotteHome);
app.use("/blog", rotteBlog);

// Funzione per avere il fallback in caso di porta standard occupata
function avviaServer(porta) {

    // Assegno il listen ad una variabile server
    const server = app.listen(porta, () => {
        console.log(`Server live on port: ${porta}`)
    });

    /* 
        Intercettazione (server in ascolto dell'evento "error") 
        di eventuali errori all'avvio/esecuzione del server
    */
    server.on("error", (errore) => {

        /*
            Controllo se il codice dell'errore intercettato
            è di tipo: "Error: Address Already In Use"
        */
        if (errore.code === "EADDRINUSE") {
            console.log(`Porta ${porta} occupata, provo con ${porta + 1}...`);

            // Avvio del server con una porta diversa dalla standard
            avviaServer(porta + 1)
        } else {
            /*
                Qualora non dovesse trovare una porta libera per 
                avviare il server andrà a terminare il processo
            */

            console.error("Errore di avvio: ", errore);
            process.exit(1);
        }
    });

}

// Richiamo funzione per l'avvio del server con parametro della porta definita all'inizio
avviaServer(PORT)