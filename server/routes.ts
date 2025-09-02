import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Route to serve the exercise guide PDF
  app.get('/api/download/guia-ejercicios.pdf', (req, res) => {
    const filePath = path.join(__dirname, 'assets', 'guia-ejercicios.pdf');
    const fileName = 'Guia-Ejercicios-Volver-a-Casa.pdf';
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.sendFile(filePath);
  });

  const httpServer = createServer(app);

  return httpServer;
}
