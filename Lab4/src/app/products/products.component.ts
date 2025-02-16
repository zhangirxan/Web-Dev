import { Component } from '@angular/core';
import { Item } from "../models";
import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ImageGalleryComponent} from "../image-gallery/image-gallery.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppModule { }

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    ImageGalleryComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})



export class ProductsComponent {
  products: Item[] = [];

  constructor() {
    this.products.push(
      new Item(1, 'iPhone 16 Pro Max', 'Brand New iPhone 16 Pro Max', 1300, 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-large', 5.0, 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'),
      new Item(2, 'iPhone 16 Pro', 'Brand New Apple iPhone 16 Pro', 1100, 'https://resources.cdn-kaspi.kz/img/m/p/hf7/hec/87295486197790.png?format=gallery-large', 4.9, 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-zolotistyi-123888919/?c=750000000'),
      new Item(3, 'Apple Watch Series 10', 'Brand New Apple Watch Series 10', 440, 'https://resources.cdn-kaspi.kz/img/m/p/p45/p26/3345922.png?format=gallery-large', 5.0, 'https://kaspi.kz/shop/p/apple-watch-series-10-s-m-42-mm-zolotistyi-belyi-128574070/?c=750000000'),
      new Item(4, 'Playstation 5', 'Sony Playstation 5 + gamepad + games', 780, 'https://resources.cdn-kaspi.kz/img/m/p/h87/h1f/85207910383646.png?format=gallery-large', 5.0, 'https://kaspi.kz/shop/p/sony-playstation-5-geimpad-zarjadnaja-stantsija-gripsy-fifa23-ps4-ufc4-mortal-kombat-11-ultimate-gta5-call-of-duty-cold-war-need-for-speed-heat-116749438/?c=750000000'),
      new Item(5, 'Logitech G102', 'Wired Logitech G102 Lightsync', 18, 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-large', 4.9, 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000'),
      new Item(6, 'Continental Sport Contact 7', 'Summer Season Continental Sport Contact 7 335/30 R24 112 Y', 2970, 'https://resources.cdn-kaspi.kz/img/m/p/h04/h8d/86610542002206.jpg?format=gallery-large', 4.0, 'https://kaspi.kz/shop/p/continental-sport-contact-7-335-30-r24-112-y--121763970/?c=750000000'),
      new Item(7, 'Cordiant Snow Cross', 'Winter Season Cordiant Snow Cross 195/65 R15 91T Spiked', 45, 'https://resources.cdn-kaspi.kz/img/m/p/h3f/h44/63772299755550.jpg?format=gallery-large', 4.7, 'https://kaspi.kz/shop/p/cordiant-snow-cross-195-65-r15-91t-s-shipami-12703015/?c=750000000'),
      new Item(8, 'G4NA', 'G4NA petrol engine 2.0 atmo', 1200, 'https://resources.cdn-kaspi.kz/img/m/p/he5/hce/68018121539614.jpg?format=gallery-large', 4.8, 'https://kaspi.kz/shop/p/dvigatel-benzinovyi-g4na-108500411/?c=750000000'),
      new Item(9, 'hundeRobot 911 X', 'Laptop ThundeRobot 911 X Wild Hunter G2 Pro 15.6" / 16 gb / SSD 512 gb / Win 11 Pro /', 1060, 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-large', 4.6, 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000'),
      new Item(10, 'Acer Nitro V 15 15.6"', 'Laptop Acer Nitro V 15 15.6" / 16 gb / SSD 512 gb / no OS', 740, 'https://resources.cdn-kaspi.kz/img/m/p/h20/hb1/86088053227550.jpg?format=gallery-large', 4.3, 'https://kaspi.kz/shop/p/acer-nitro-v-15-15-6-16-gb-ssd-512-gb-bez-os-anv15-41-r70b-nh-qsjer-001-119709941/?c=750000000'),
    );
  }

  sharing(id: number): void {
    const productLink = this.products[id-1].productLink;
    const encodedLink = encodeURIComponent(productLink);
    const telegramShareUrl = `https://t.me/share/url?url=${encodedLink}`;
    window.open(telegramShareUrl, '_blank');
  }

  }
