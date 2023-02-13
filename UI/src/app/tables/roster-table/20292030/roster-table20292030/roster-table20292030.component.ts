import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RosterService } from 'src/app/services/roster.service';
import { YearService } from 'src/app/services/year.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'roster-table20292030',
  templateUrl: './roster-table20292030.component.html',
  styleUrls: ['./roster-table20292030.component.css']
})
export class RosterTable20292030Component implements OnInit {

  @Input() sort: any;
  @Input() itemsPerPage: number = 10;

  @Input() title = "2029-2030 Roster";
  teamYear = "20292030";
  displayNoRecords!: boolean;
  PlayerNumber:number;
  Position: string;
  FirstName: string;
  LastName: string;
  Goals: any;
  Assists: any;
  CleanSheets: any;
  Appearances: any;
  ImageName: string;
  Height: any = '0.00';
  Weight: number;
  Birthdate: any;
  Country: string;
  ImagePath: string = "./assets/images/players/";
  FlagPath: string = "./assets/images/flags/";
  TotalPlayers: any;
  nextButtonIsDisabled: boolean;
  modalOpen = false;
  searchText: any;
  row: any;
  item: any;
  currentPage = 1;
  reverse = false;
  RosterList = [];
  sortedRosterList: any[];
  caseInsensitive: false;
  order: string = 'Number';
  showModalPopUp: false;

  constructor(private rosterService: RosterService,
    private yearService: YearService,
    private orderPipe: OrderPipe,
    private vcref: ViewContainerRef,
    private cfr: ComponentFactoryResolver) {
    this.sortedRosterList = orderPipe.transform(this.RosterList, this.order); }

  ngOnInit() {
    this.refreshRosterList();
    this.displayNoRecords = false;
    this.searchText = '';
    this.sendValueIntoService(this.teamYear);
  }

  sendValueIntoService(value: string) {
    this.yearService.setTeamYear(value);
  }

  async x(item){
    this.vcref.clear();
    const { RosterPlayerModalComponent } = await import('src/app/modals/roster-player-modal/roster-player-modal.component');
    let greetcomp = this.vcref.createComponent(
      this.cfr.resolveComponentFactory(RosterPlayerModalComponent)
    );
  }

  async loadRosterPlayerModalComponent(){
    this.vcref.clear();
    const { RosterPlayerModalComponent } = await import('src/app/modals/roster-player-modal/roster-player-modal.component');
    let greetcomp = this.vcref.createComponent(
      this.cfr.resolveComponentFactory(RosterPlayerModalComponent)
    );
  }

  refreshRosterList(){
    this.rosterService.getRosterList(this.teamYear).subscribe((data)=>{
      this.RosterList=data;
      console.log(this.RosterList);
    });
  }

  onClick(item)
      {
        this.modalOpen = true;
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

  nextPlayerRow(item){
    this.PlayerNumber++;
    console.log(this.TotalPlayers)
  }

  async playerDetails(item: any){
      // this.showModalPopUp = true;
    this.vcref.clear();
    // const { RosterPlayerModalComponent } = await import('src/app/modals/roster-player-modal');
    // const {RosterPlayerModalComponent} = await import('src/app/modals/roster-player-modal/roster-player-modal.component')
    // let rostermodalcomp = this.vcref.createComponent(
    //   this.cfr.resolveComponentFactory(RosterPlayerModalComponent)
    // );
    this.RosterList = item;
  }

//   playerDetails = (item) => {
//     this.showModalPopUp = true;
//     this.RosterList = Object.assign(item);
//  }
  
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  updatePageSize(value: number){
    this.itemsPerPage = value;
  }

}
