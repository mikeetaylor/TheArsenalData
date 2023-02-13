import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RosterService } from 'src/app/services/roster.service';
import { YearService } from 'src/app/services/year.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'roster-table20302031',
  templateUrl: './roster-table20302031.component.html',
  styleUrls: ['./roster-table20302031.component.css']
})
export class RosterTable20302031Component implements OnInit {

  @Input() sort: any;
  @Input() itemsPerPage: number = 10;
  @Input() title = "2030-2031 Roster";

  @ViewChild('country') country!: ElementRef;
  @ViewChild('position') position!: ElementRef;

  teamYear = "20302031";
  displayNoRecords!: boolean;
  PlayerID:number;
  PlayerNumber:number;
  Position: string;
  PositionID: string;
  FirstName: string;
  LastName: string;
  Goals: number;
  Assists: number;
  CleanSheets: number;
  Appearances: number;
  ImageName: string;
  Height: number = 0.00;
  Weight: number;
  Birthdate: any;
  Country: string;
  CountryName: string;
  CountryCode: string;
  CountryList = [];
  PositionList = [];
  LoanTeam: string;
  OnLoan: string;
  ImagePath: string = "./assets/images/players/";
  FlagPath: string = "./assets/images/flags/";
  TotalPlayers: any;
  nextButtonIsDisabled: boolean;
  modalOpen = false;
  searchText: any;
  initialSearch:boolean;
  row: any;
  item: any;
  currentPage = 1;
  reverse = false;
  RosterList = [];
  RosterList2 = [];
  sortedRosterList: any[];
  caseInsensitive = false;
  order: string = 'Number';
  selectedCountry = '';
  selectedPosition = '';
  showDeleteColumn = false;
  showEditColumn = true;

  constructor(private rosterService: RosterService,
    private yearService: YearService,
    public orderPipe: OrderPipe) {
    this.sortedRosterList = orderPipe.transform(this.RosterList, this.order); }

  ngOnInit() {
    this.refreshRosterList();
    this.refreshCountryList();
    this.refreshPositionList();
    this.displayNoRecords = false;
    this.searchText = '';
    this.sendValueIntoService(this.teamYear);
  }

  sendValueIntoService(value: string) {
    this.yearService.setTeamYear(value);
  }

  refreshRosterList(){
    this.rosterService.getRosterList(this.teamYear).subscribe((data)=>{
      this.RosterList=data;
    });
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

  updatePlayer(item)
      {
        this.modalOpen = true;
        this.PlayerID = item.Number;
        this.PlayerNumber = item.Number;
        this.Position = item.Position;
        this.PositionID = item.PositionID;
        // this.PositionName = this.selectedPosition;
        this.FirstName = item.FirstName;
        this.LastName = item.LastName;
        this.Height = item.Height;
        this.Weight = item.Weight;
        this.Birthdate = item.Birthdate;
        this.Country = item.Country;
        this.Appearances = item.Appearances;
        this.Goals = item.Goals;
        this.Assists = item.Assists;
        this.CleanSheets = item.CleanSheets;
        this.ImageName = item.ImageName;
        this.TotalPlayers = item.TotalPlayers;
    
        console.log(item.PositionID)
      }
    

  openCardModalWith(item)
      {
        this.modalOpen = true;
        this.PlayerID = item.Number;
        this.PlayerNumber = item.Number;
        this.Position = item.Position;
        this.FirstName = item.FirstName;
        this.LastName = item.LastName;
        this.Height = item.Height;
        this.Weight = item.Weight;
        this.Birthdate = item.Birthdate;
        this.Country = item.Country;
        this.Appearances = item.Appearances;
        this.Goals = item.Goals;
        this.Assists = item.Assists;
        this.CleanSheets = item.CleanSheets;
        this.ImageName = item.ImageName;
        this.TotalPlayers = item.TotalPlayers;
      }
	
  onSelected():void {
		this.selectedCountry = this.country.nativeElement.value;
		this.selectedPosition = this.position.nativeElement.value;
	}

  showEdit() {
    this.showEditColumn = !this.showEditColumn;
    this.showDeleteColumn = false;
  }

  showDelete() {
    this.showDeleteColumn = !this.showDeleteColumn;
    this.showEditColumn = false;
  }
  
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  editRow(val) {
  }

  editPlayer() {

    
}

  deleteRow(val) {
    if(confirm('Are you sure??')){
      this.rosterService.deletePlayerFromRoster(val).subscribe(data=>{
        alert(data.toString());
        this.refreshRosterList();
      })
    }
  }

  updatePageSize(value: number){
    this.itemsPerPage = value;
  }

}
