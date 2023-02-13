import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RosterService } from 'src/app/services/roster.service';
import { YearService } from 'src/app/services/year.service';

@Component({
  selector: 'edit-player-modal',
  templateUrl: './edit-player-modal.component.html',
  styleUrls: ['./edit-player-modal.component.css']
})
export class EditPlayerModalComponent implements OnInit {

  constructor(private rosterService: RosterService,
              private yearService: YearService) { }

  @Input() player: any;
  @ViewChild('country') country!: ElementRef;
  @ViewChild('position') position!: ElementRef;
	PlayerNumber: number;
  Position: string;
  FirstName: string;
  LastName: string;
  Height: string;
  Weight: string;
  Birthdate: string;
  Country: string;
  CountryName: string;
  CountryCode: string;
  CountryList = [];
  PositionList = [];
  Appearances: string;
  Goals: string;
  Assists: string;
  CleanSheets: string;
  OnLoan: string;
  LoanTeam: string;
  ImageName: string;
  selectedCountry = '';
  selectedPosition = '';
  submitted = false;
  item:any;
  year = this.yearService.teamYear;

  ngOnInit(): void {
    this.refreshCountryList();
    this.refreshPositionList();
    // this.PlayerNumber = this.player.PlayerNumber;
    // this.Position = this.player.Position;
    // this.FirstName = this.player.FirstName;
    // this.LastName = this.player.LastName;
    // this.Height = this.player.Height;
    // this.Weight = this.player.Weight;
    // this.Birthdate = this.player.Birthdate;
    // this.Country = this.player.Country;
    // this.Appearances = this.player.Appearances;
    // this.Goals = this.player.Goals;
    // this.Assists = this.player.Assists;
    // this.CleanSheets = this.player.CleanSheets;
    // this.OnLoan = this.player.OnLoan;
    // this.LoanTeam = this.player.LoanTeam;
    // this.ImageName = this.player.ImageName;
  }
	onSelected():void {
		this.selectedCountry = this.country.nativeElement.value;
		this.selectedPosition = this.position.nativeElement.value;
	}

  addPlayer() {
      var val = {
      Number: this.PlayerNumber,
      Position: this.selectedPosition,
      FirstName: this.FirstName,
      LastName: this.LastName,
       Height: this.Height,
      Weight: this.Weight,
      Birthdate: this.Birthdate,
      Country: this.selectedCountry,
      Appearances: this.Appearances,
      Goals: this.Goals,
      Assists: this.Assists,
      CleanSheets: this.CleanSheets,
      OnLoan: this.OnLoan,
      LoanTeam: this.LoanTeam,
      ImageName: this.FirstName.toLowerCase() + '-' + this.LastName.toLowerCase(),
    };
      console.log(val)
      this.rosterService.addPlayerToRoster(val).subscribe(data=>{
        alert(data.toString());
        // this.refreshRosterList();
      })
   
  }

  editPlayer(val) {
      val = {
      Number: this.PlayerNumber,
      Position: this.selectedPosition,
      FirstName: this.FirstName,
      LastName: this.LastName,
       Height: this.Height,
      Weight: this.Weight,
      Birthdate: this.Birthdate,
      Country: this.selectedCountry,
      Appearances: this.Appearances,
      Goals: this.Goals,
      Assists: this.Assists,
      CleanSheets: this.CleanSheets,
      OnLoan: this.OnLoan,
      LoanTeam: this.LoanTeam,
      ImageName: this.FirstName.toLowerCase() + '-' + this.LastName.toLowerCase(),
    };
      console.log(val)
      this.rosterService.updatePlayerOnRoster(val).subscribe(data=>{
        alert(data.toString());
        // this.refreshRosterList();
      })

  }

  refreshCountryList(){
    this.rosterService.getCountryList().subscribe((data)=>{
      this.CountryList=data;
    });
  }

  refreshPositionList(){
    this.rosterService.getPositionList().subscribe((data)=>{
      this.PositionList=data;
    });
  }
}
