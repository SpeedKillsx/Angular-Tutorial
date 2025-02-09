import { Component, inject, OnInit } from '@angular/core';
import { APIResponseModel } from '../../model/interface/role';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../services/master.service';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  clientList: Client [] = [];
  clientObj : Client = new Client();
  clientService = inject(ClientService);
  ngOnInit(): void {
      this.clientService.getAllClients().subscribe((res:APIResponseModel)=>{
        this.clientList = res.data;
        console.log(res.data);
      }, error=>{
        console.log('Network shut down!');
        console.log('ERROR:', error);
      })
  }

}
