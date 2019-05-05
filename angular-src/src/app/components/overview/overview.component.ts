import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  dummy: any[] =
  [
    {
      name: 'Earl of Lemongrab',
      age: 'Unknown',
      species: 'Lemon Candy',
      occupation: 'Earl, Heir to the Candy Kingdom Throne'
    },
    {
      name: 'Bonnibel Bubblegum',
      age: '19',
      species: 'Gum Person',
      occupation: 'Returned Ruler of the Candy Kingdom'
    },
    {
      name: 'Phoebe',
      age: '16',
      species: 'Flame Person',
      occupation: 'Ruler of the Fire Kingdom'
    },
    {
      name: 'Lumpy Space Princess',
      age: '18',
      species: 'Lumpy Space Person', 
      occupation: 'Babysitter'
    },
  ]

  constructor() { }

  ngOnInit() {
    
    //Read data NOw add dummy
  }

  tableScope($scope) {
    
    $scope.details = {
        '3': {
            tripcode: 3,
            routelines: "PASAY - CAGAYAN",
            '2015 - 3 - 17': 1,
            '2015 - 3 - 18': 0
        },
        '4': {
           tripcode: 4,
           routelines: "PASAY - CAVITE",
           '2015 - 3 - 17': 0,
           '2015 - 3 - 18': 4
        },
    };
    
}
}
