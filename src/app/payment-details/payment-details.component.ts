import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord:PaymentDetail){
    this.service.formData=Object.assign({},selectedRecord);//üzerine tıklandığında forma ilet
  }
  OnDelete(id:number){
    if(confirm('Are you sure to delete this record??')){
    this.service.deletePaymentDetail(id).subscribe(
      res=>{
     this.service.refreshList();
     this.toastr.error("Deleted successfully",'Payment Detail Register');//sağ tarafta onay mesajı ngx and css
      },
      err=>{console.log(err)}
    )
    }
    }
  }



