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
    this.resetCommentsState(); // Reinicia el estado de visibilidad de los formularios de comentarios
  }

  selectComment(comment: any) {
    // Oculta el formulario de comentarios de otros comentarios
    this.comments.forEach(c => {
      if (c !== comment) {
        c.showForm = false;
        c.showReplyButton = true; // Restablece el estado del botón "Responder"
      }
    });
    // Muestra u oculta el formulario de comentarios del comentario seleccionado
    comment.showForm = !comment.showForm;
    // Oculta el botón "Responder" del comentario seleccionado
    comment.showReplyButton = false;
  }

  resetCommentsState() {
    // Reinicia el estado de visibilidad de los formularios de comentarios
    this.comments.forEach(comment => {
      comment.showForm = false;
      comment.showReplyButton = true; // Restablece el estado del botón "Responder"
    });
  }
}
