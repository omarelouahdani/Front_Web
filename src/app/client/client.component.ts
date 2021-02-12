import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CatalogueService} from '../catalogue.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public clients;


  constructor(private catalService: CatalogueService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.catalService.getClient()
      .subscribe(data => {
        console.log(data);
        this.clients = data;

      }, err => {
        console.log(err);
      })
  }


  newClient() {

  }

  OnDeleteClient(id: any) {

  }

  updateClient(c: any) {

  }
}
