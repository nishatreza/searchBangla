import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-business',
  templateUrl: './best-business.component.html',
  styleUrls: ['./best-business.component.css']
})
export class BestBusinessComponent implements OnInit {
  

  bestBusiness =[{
      businessImage: '../../../assets/images/massage.png',
      businessLink:'/',
      businessTitle: 'Massage ',
  


        },
        {
          businessImage: '../../../assets/images/gyms.png',
          businessLink:'/',
          businessTitle: 'Gyms ',
     

        },
        
        {
          businessImage: '../../../assets/images/movers.png',
          businessLink:'/',
          businessTitle: 'Movers',
    

        },
        {
          businessImage: '../../../assets/images/dentists.png',
          businessLink:'/',
          businessTitle: 'Dentists',
     

        },
       
       
    
      ]
    
    
      
    
    
    


  constructor() { }

  ngOnInit() {
  }

}
