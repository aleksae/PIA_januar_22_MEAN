import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OstaloService } from '../ostalo.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-kupac-pocetna',
  templateUrl: './kupac-pocetna.component.html',
  styleUrls: ['./kupac-pocetna.component.css']
})
export class KupacPocetnaComponent implements OnInit {

  constructor(private router:Router, private ostaloService: OstaloService) { }

  ulogovan: any;
  narudzbine: Array<JSON>;
  greska:any;
  dodaci: any;
  postavljeni_dodaci:String[];
  velicina: any;
  ngOnInit(): void {
    this.ulogovan = JSON.parse(sessionStorage.getItem("ulogovan"));
    this.ostaloService.all_orders_for_user(this.ulogovan.username).subscribe((res : Array<JSON>)=>{
      if(res.hasOwnProperty("message")){
        this.greska = res['message'];
      }else{
        this.narudzbine = res;
      }
    }
    )
    this.ostaloService.all_extras().subscribe((res)=>{
      if(res.hasOwnProperty("message")){
        this.greska = res['message'];
      }else{
        this.dodaci = res;
      }
    })
    this.postavljeni_dodaci = []
  }
  odjava(){
    sessionStorage.removeItem("ulogovan");
    this.router.navigate(['']);

  }
  azuriraj(dodatak: string, tip:Event){
    
    if((tip.target)['checked']) this.postavljeni_dodaci.push(dodatak)
    else {
      let index = this.postavljeni_dodaci.indexOf(dodatak)
      this.postavljeni_dodaci.splice(index, 1)
    }
  }
  naruci(){
    if(!this.velicina ){
      this.greska="Velicina je obavezna"
      return;
    }else{
      this.greska=null

    }
  }

}
