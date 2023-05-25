import { createServer, Model } from "miragejs"

createServer({
    models: {
        clients: Model,
    },

    seeds(server) {
        server.create("client", { id: "1", name: "Modest Explorer", email:"", estimatedValue: 30, currentlyValue:40, loan: 60, description: "The longer!", confiability: 50, warranty: "https.png", type: "simple", clientId:2})
        server.create("client", { id: "2", name: "Beach Bum", email:"", estimatedValue: 30, currentlyValue:40, loan: 80, description: "Beach Bum is.", confiability: 50, warranty: "https.png", type: "rugged", clientId:2})
        server.create("client", { id: "3", name: "Reliable Red", email:"", estimatedValue: 30, currentlyValue:40, loan: 100, description: "Reliable .", confiability: 50, warranty: "https:/d.png", type: "luxury", clientId:2})
        server.create("client", { id: "4", name: "Reliable Red", email:"", estimatedValue: 30, currentlyValue:40, loan: 100, description: "Reliable .", confiability: 50, warranty: "https:/d.png", type: "luxury", clientId:2})
        server.create("client", { id: "5", name: "Reliable Red", email:"", estimatedValue: 30, currentlyValue:40, loan: 100, description: "Reliable .", confiability: 50, warranty: "https:/d.png", type: "luxury", clientId:2})
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/clients", (schema, request) => {
            return schema.clients.all()
        })

        this.get("/clients/:id", (schema, request) => {
            const id = request.params.id
            return schema.clients.find(id)
        })

        this.delete("/clients/:id", (schema, request) => {
            let id = request.params.id;
    
            return schema.clients.find(id).destroy();
        });
    }
})