import { Component, signal } from '@angular/core';
import { Navbar } from '../app/shared/components/navbar/navbar';
import { CadastroCliente } from "./pages/cliente/cadastro-cliente/cadastro-cliente";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Navbar, CadastroCliente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
 title = signal('sistem-bank')
  name = signal('Igor');
}
