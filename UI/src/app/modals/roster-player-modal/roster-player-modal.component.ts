import { Component, Input, OnInit } from '@angular/core';
import { RosterService } from 'src/app/services/roster.service';

@Component({
  selector: 'roster-player-modal',
  templateUrl: './roster-player-modal.component.html',
  styleUrls: ['./roster-player-modal.component.css']
})

export class RosterPlayerModalComponent implements OnInit {

  @Input() data : any;
  @Input() rowData: any;
  @Input() playerID: any;
  @Input() country: any;
  @Input() item: any;
  teamYear = "20302031";
  imagePath: string = "./assets/images/players/";
  flagPath: string = "./assets/images/flags/";
  prevButtonIsDisabled: boolean;
  position: any;
  firstName: any;
  lastName: any;
  goals: any;
  assists: any;
  cleanSheets: any;
  appearances: any;
  imageName: any;
  totalPlayers: any;
  nextButtonIsDisabled: boolean;

  constructor(public rosterService: RosterService) {}

  ngOnInit(): void {
    console.log('The Players ID is: ' + this.playerID)
  }

  closeModal(){
    console.log("Closed");
  }

  nextPlayerOnRoster(value: any){
    this.prevButtonIsDisabled = false;
    this.rosterService.getNextPlayer(this.playerID, this.teamYear).subscribe(result=>{
        let value = this.playerID;
          if (result.hasOwnProperty(value)) {
            this.position = result[value].Position;
            this.playerID = result[value].PlayerID;
            this.firstName = result[value].FirstName;
            this.lastName = result[value].LastName;
            this.goals = result[value].Goals;
            this.assists = result[value].Assists;
            this.cleanSheets = result[value].CleanSheets;
            this.appearances = result[value].Appearances;
            this.country = result[value].Country.toLowerCase();
            this.imageName = result[value].ImageName;
          }
          if (this.playerID == this.totalPlayers) {
            this.nextButtonIsDisabled = true;
          }
    })
  }
}
