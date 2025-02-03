import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { HttpClient } from '@angular/common/http';
import { APIResponseModel, IDesigniation } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  designationList: IDesigniation [] = [];
  isLoader:boolean=true;
  ngOnInit(): void {
    this.masterService.getAllDesignations().subscribe((res:APIResponseModel)=>{
      this.designationList=res.data;
      console.log('Designiations : \n', this.designationList);
      this.isLoader = false;
    }, error=>{
      alert('Connexion Shutdown');
      console.error(error);
      this.isLoader = false;
    })
  }
  masterService = inject(MasterService);
}
