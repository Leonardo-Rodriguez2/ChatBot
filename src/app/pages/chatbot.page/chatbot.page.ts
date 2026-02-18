import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../../services/api.gemini.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./chatbot.page.html",
  styleUrl: "./chatbot.page.css"
})
export class ChatbotPage {
  gemini = inject(GeminiService);
  userPrompt = '';

  sendPrompt() {
    if (this.userPrompt.trim()) {
      this.gemini.generateText(this.userPrompt);
      this.userPrompt = '';
    }
  }


chatHistory: { question: string, answer: string }[] = [];

onSend() {
  const currentQuestion = this.userPrompt;
  this.sendPrompt(); // Tu función actual
  
  // Una vez recibas la respuesta de Gemini:
  // this.chatHistory.push({ question: currentQuestion, answer: this.gemini.response() });
}
}