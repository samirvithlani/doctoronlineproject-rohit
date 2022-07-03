import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private service:UserService) { }

  users:any;

  delete(id:number){
    
    this.service.deleteUser(id).subscribe(res=>{
      if(res==1){
        alert("User Deleted Successfully");
        this.ngOnInit();
        
      }
      else{
        alert("User Not Deleted");
      }
    })
  }
  ngOnInit() {

    this.service.listUser().subscribe(res=>{

        this.users = res;
        console.log(this.users);
        
    })
  }

}
