import { Component } from '@angular/core';

@Component({
  selector: 'app-mensajes-clientes',
  templateUrl: './mensajes-clientes.component.html',
  styleUrls: ['./mensajes-clientes.component.css']
})
export class MensajesClientesComponent {
  showModal: boolean = false;
  comments: any[] = [
    { user: 'Usuario 1', text: 'Comentario del usuario 1...', showForm: false, showReplyButton: true },
    { user: 'Usuario 2', text: 'Comentario del usuario 2...', showForm: false, showReplyButton: true },
    { user: 'Usuario 1', text: 'Comentario del usuario 1...', showForm: false, showReplyButton: true },
    { user: 'Usuario 2', text: 'Comentario del usuario 2...', showForm: false, showReplyButton: true },
    { user: 'Usuario 1', text: 'Comentario del usuario 1...', showForm: false, showReplyButton: true },
    { user: 'Usuario 2', text: 'Comentario del usuario 2...', showForm: false, showReplyButton: true },// Otros comentarios
  ];

  constructor() { }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.resetCommentsState(); 
  }

  selectComment(comment: any) {
 
    this.comments.forEach(c => {
      if (c !== comment) {
        c.showForm = false;
        c.showReplyButton = true; 
      }
    });
   
    comment.showForm = !comment.showForm;
    
    comment.showReplyButton = false;
  }

  resetCommentsState() {
    
    this.comments.forEach(comment => {
      comment.showForm = false;
      comment.showReplyButton = true; 
    });
  }
}
