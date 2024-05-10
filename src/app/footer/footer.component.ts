import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  sections = [
    {
      title: "Про нас",
      items:[
        { text: 'Про нас', link: '#' },
        { text: 'Договір оферти', link: '#' },
        { text: 'Мобільні додатки Favbet', link: '#' },
        { text: 'Букмекерський пункт', link: '#' },
        { text: 'Вакансії', link: '#' }
      ]
    },
    {
      title: 'Розділи',
      items: [
        { text: 'Ставки на спорт', link: '#' },
        { text: 'Ставки Live', link: '#' },
        { text: 'Ставки на футбол', link: '#' },
        { text: 'Казино онлайн', link: '#' },
        { text: 'Казино Live', link: '#' },
        { text: 'Ігрові автомати', link: '#' },
        { text: 'Рулетка', link: '#' },
        { text: 'Блекджек', link: '#' },
        { text: 'Акції', link: '#' },
      ],
    },
    {
      title: 'Допомога',
      items: [
        { text: 'Калькулятор систем', link: '#' },
        { text: 'Поповнення рахунку / Виведення', link: '#' },
      ],
    },
    {
      title: 'Правила',
      items: [
        { text: 'Правила організатора', link: '#' },
        { text: 'Ресурси по видам спорту', link: '#' },
        { text: 'Ліцензія', link: '#' },
        { text: 'Політика конфіденційності', link: '#' },
        { text: 'Відповідальна гра', link: '#' },
        { text: 'Програма лояльності', link: '#' },
      ],
    },
  ];
  payments=[
    {path:"assets/img/payments/visa.svg"},
    {path:"assets/img/payments/mastercard.svg"},
    {path:"assets/img/payments/google-play.svg"},
    {path:"assets/img/payments/easy-pay.svg"},
    {path:"assets/img/payments/city24.svg"},
    {path:"assets/img/payments/apple-pay.svg"},
  ]
}
