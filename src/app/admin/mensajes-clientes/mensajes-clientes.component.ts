import { Component, Input } from '@angular/core';

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

  ngOnInit(): void {
    console.log(this.comments); // Mostrar el arreglo de productos en consola
  }

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
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  get getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
