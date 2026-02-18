import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatbotPage } from './pages/chatbot.page/chatbot.page';

@Component({
  selector: 'app-root',
  imports: [ChatbotPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ChatBot');
}
