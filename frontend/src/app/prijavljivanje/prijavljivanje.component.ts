import { Component, OnInit } from '@angular/core';
import { PrijavljivanjeService } from '../prijavljivanje.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-prijavljivanje',
  templateUrl: './prijavljivanje.component.html',
  styleUrls: ['./prijavljivanje.component.css']
})
export class PrijavljivanjeComponent implements OnInit {

  constructor(private prijavljivanjeService:PrijavljivanjeService, private router:Router) { }

  username: string;
  password: string;
  type: string;
  greska: string;
  ngOnInit(): void {
    console.log("Pozvan ngOnInit za prijavljivanje")
  }

  prijava(){
    if(!this.username){
      this.greska = "Korisncko ime je obavezno"
    }else if(!this.password){
      this.greska = "Lozinka je obavezna"
    }else if(!this.type){
      this.greska = "Uloga je obavezna"
    }else{
      this.prijavljivanjeService.prijava(this.username,this.password,this.type).subscribe((res)=>{
        if(!res.hasOwnProperty("message")){
          this.greska=null
          sessionStorage.setItem("ulogovan", JSON.stringify(res))
          this.type == 'kupac' ? this.router.navigate(['kupac']) : this.router.navigate(['radnik'])
        }else{
          this.greska=res['message']
        }
      })
    }
  }

}
