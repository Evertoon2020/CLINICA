import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.page.html',
  styleUrls: ['./random-user.page.scss'],
})
export class RandomUserPage implements OnInit {

  results: any = {
    gender: '',
    firstname: '',
    lastname: '',
    streetname: '',
    streetnumber: '',
    city: '',
    state: '',
    country: '',
    postcode: '',
    email: '',
    username: '',
    password: '',
    date: '',
    cell: '',
    picture: ''
  }

  constructor() { }

  ngOnInit() {
  }

  async verifica() {
    const url = 'https://randomuser.me/api/?nat=br'
    const response = await fetch(url)
    const prom = response.text()
    console.log(prom)
    prom.then((x: any) => {
      x = JSON.parse(x);
        this.results.gender = x.results[0].gender
        this.results.firstname = x.results[0].name.first,
        this.results.lastname = x.results[0].name.last,
        this.results.streetname = x.results[0].location.street.name,
        this.results.streetnumber = x.results[0].location.street.number,
        this.results.city = x.results[0].location.city,
        this.results.state = x.results[0].location.state,
        this.results.country = x.results[0].location.country,
        this.results.postcode = x.results[0].location.postcode,
        this.results.email = x.results[0].email,
        this.results.username = x.results[0].login.username,
        this.results.password = x.results[0].login.password,
        this.results.date = x.results[0].dob.date,
        this.results.cell = x.results[0].cell,
        this.results.picture = x.results[0].picture.large
    })
  }

}