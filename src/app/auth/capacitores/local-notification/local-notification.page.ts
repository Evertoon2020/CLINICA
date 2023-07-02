import { Component, OnInit  } from '@angular/core';
import { LocalNotifications, ScheduleOptions } from '@capacitor/local-notifications';

@Component({
  selector: 'app-local-notification',
  templateUrl: './local-notification.page.html',
  styleUrls: ['./local-notification.page.scss'],
})
export class LocalNotificationPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  async notificar(){
    let options: ScheduleOptions={
      notifications: [
        {
          id:1,
          title:"Lembrete de Consulta",
          body:"Sua consulta é amanhã 21h.",
          largeBody:"Consulta 10/07/2023 às 21:00",
          summaryText:"Aviso!"
        }
      ]
    }

    try{await LocalNotifications.schedule(options)}
    catch(ex){alert(JSON.stringify(ex))}
  }

}
