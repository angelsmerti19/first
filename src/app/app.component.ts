import { Component } from '@angular/core';
     
export class Item{
    surname: string;
    name: string;
    patronymic: string;
    who: string;
    birthday: string;
    address: string;
    address2: string;
    email: string;
    money: number;
     
    constructor(surname: string, name: string, patronymic: string, who: string, birthday: string, address: string, address2: string, email: string, money: number) {
  
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.who = who;
        this.birthday = birthday;
        this.address = address;
        this.address2 = address2;
        this.email = email;
        this.money = money;
    }
}
 
@Component({
    selector: 'table-app',
    template: `<div class="page-header">
        <h5 class = "text-center center-block"> Добавить сотрудника </h5>
    </div>
    <div class="panel center-block">
        
            <div class="form-group">
                <div class="col-md-12 col-lg-12">
                    <input type="text" class="form-control" [(ngModel)]="surname" placeholder = "Фамилия" required=""/>
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-12 col-lg-12">
                    <input type="text" class="form-control" [(ngModel)]="name" placeholder="Имя" required=""/>
                </div>
            </div>
             <div class="form-group">
                <div class="col-md-12 col-lg-12">
                    <input type="text" class="form-control" [(ngModel)]="patronymic" placeholder="Фамилия" required=""/>
                </div>
            </div>
             <div class="form-group">
                <div class="col-md-12 col-lg-12">
                    <input type="text" class="form-control" [(ngModel)]="who" placeholder="Должность" required=""/>
                </div>
            </div>
             <div class="form-group">
                <div class="col-md-12 col-lg-12">
                    <input type="text" onfocus="type='date'" class="form-control" [(ngModel)]="birthday" placeholder="Дата Рождения" required="" pattern="\d{1,2}.\d{1,2}.\d{4}">
                </div>
            </div>
             <div class="form-group">
                <div class="col-md-12 col-lg-12">
                    <input type="text" class="form-control" [(ngModel)]="address" placeholder="Адрес проживания" required=""/>
                </div>
            </div>
             <div class="form-group">
                <div class="col-md-12 col-lg-12">
                    <input type="text" class="form-control" [(ngModel)]="address2" placeholder="Контактный адрес" required=""/>
                </div>
            </div>
             <div class="form-group">
                <div class="col-md-12 col-lg-12">
                    <input type="mail" class="form-control" [(ngModel)]="email" placeholder="Электронный адрес" required=""/>
                </div>
            </div>
             <div class="form-group">
                <div class="col-md-12 col-lg-12">
                    <input type="number" class="form-control" [(ngModel)]="money" placeholder="Сумма оклада" required=""/>
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-12 col-lg-12">
                    <button class="btn btn-default" (click)="addItem(surname, name, patronymic, who, birthday, address, address2, email, money)">Добавить</button>
                    <button class="btn btn-default" type="reset"  value="">Очистить поля формы</button>
                </div>

        </div>
    
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Должность</th>
                    <th>Дата Рождения</th>
                    <th>Адрес проживания</th>
                    <th>Контактный адресс</th>
                    <th>Электронный адрес</th>
                    <th>Сумма оклада</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.name}}</td>
                    <td>{{item.surname}}</td>
                    <td>{{item.patronymic}}</td>
                    <td>{{item.who}}</td>
                    <td>{{item.birthday}}</td>
                    <td>{{item.address}}</td>
                    <td>{{item.address2}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.money}}</td>  
                </tr>
            </tbody>
        </table>
    </div>`
})
export class AppComponent { 
    items: Item[] = 
    [
        { surname: "Доколов", name: "Алексей", patronymic: "Витальевич", who: "Программист", birthday: "12.04.1997", address: "Новополоцк", address2: "Новополоцк", email: "dokolov97@mail.ru", money: 300 }
    ];
    addItem(surname: string, name: string, patronymic: string, who: string, birthday: string, address: string, address2: string, email: string, money: number): void {
         
        if(surname==null || surname==undefined || surname.trim()=="")
            return;
        if(name==null || name==undefined || name.trim()=="")
            return;
        if(patronymic==null || patronymic==undefined || patronymic.trim()=="")
            return;
        if(who==null || who==undefined || who.trim()=="")
            return;
        if(birthday==null || birthday==undefined || birthday.trim()=="")
            return;
        if(address==null || address==undefined || address.trim()=="")
            return;  
        if(address2==null || address2==undefined || address2.trim()=="")
            return; 
        if(email==null || email==undefined || email.trim()=="")
            return;  
        if(money==null || money==undefined)
            return;
        this.items.push(new Item(surname, name, patronymic, who, birthday, address, address2, email, money));
    }
}