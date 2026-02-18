
import { Injectable, signal } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  // ⚠️ Importante: En producción, usa un proxy o backend para no exponer tu API Key
  private genAI = new GoogleGenerativeAI('AIzaSyC3w1tQWEMXSxKZI8PhsEpn6Nu79Q4v7dM');
  private model = this.genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

  // Signal para almacenar la respuesta
  public response = signal<string>('');
  public loading = signal<boolean>(false);

  async generateText(prompt: string) {
    this.loading.set(true);
    try {
      const result = await this.model.generateContent(prompt);
      const text = result.response.text();
      this.response.set(text);
    } catch (error) {
      console.error("Error con Gemini:", error);
      this.response.set("Hubo un error al generar la respuesta.");
    } finally {
      this.loading.set(false);
    }
  }
}