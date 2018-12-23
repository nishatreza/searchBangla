import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // @Input() businessDataListMenu;

  restaurantData = {
    restaurantName: "The Mighty Restaurant",
    menu: [{
      menuItem: "Salads",
      subMenu: [{
        subMenuTitle: "Sweets",
        subMenuLink: "/" 
      },{
        subMenuTitle: "Pastas",
        subMenuLink: "/" 
      },{
        subMenuTitle: "Insalate Tricolore",
        subMenuLink: "/" 
      }],
      subMenuItem: [{
        subMenuItemName: "Insalate Tricolore",
        subMenuItemDetails: "Roasted Chicken, arugula, cabbage, radicchio, golden beet, hazelnuts, balsamic vinaigrette, manchego All organic greens.",
        subMenuItemTime: "13.50",
        subMenuItemLink: "/"
      },{
        subMenuItemName: "Insalate Tricolore",
        subMenuItemDetails: "Roasted Chicken, arugula, cabbage, radicchio, golden beet, hazelnuts, balsamic vinaigrette, manchego All organic greens.",
        subMenuItemTime: "13.50",
        subMenuItemLink: "/"
      },{
        subMenuItemName: "Insalate Tricolore",
        subMenuItemDetails: "Roasted Chicken, arugula, cabbage, radicchio, golden beet, hazelnuts, balsamic vinaigrette, manchego All organic greens.",
        subMenuItemTime: "13.50",
        subMenuItemLink: "/"
      },{
        subMenuItemName: "Insalate Tricolore",
        subMenuItemDetails: "Roasted Chicken, arugula, cabbage, radicchio, golden beet, hazelnuts, balsamic vinaigrette, manchego All organic greens.",
        subMenuItemTime: "13.50",
        subMenuItemLink: "/"
      }]
    },{
      menuItem: "Focaccias, Toast & Sandwiches",
      subMenu: [{
        subMenuTitle: "Sweets",
        subMenuLink: "/" 
      },{
        subMenuTitle: "Pastas",
        subMenuLink: "/" 
      },{
        subMenuTitle: "Insalate Tricolore",
        subMenuLink: "/" 
      }],
      subMenuItem: [{
        subMenuItemName: "Insalate Tricolore",
        subMenuItemDetails: "Roasted Chicken, arugula, cabbage, radicchio, golden beet, hazelnuts, balsamic vinaigrette, manchego All organic greens.",
        subMenuItemTime: "13.50",
        subMenuItemLink: "/"
      },{
        subMenuItemName: "Insalate Tricolore",
        subMenuItemDetails: "Roasted Chicken, arugula, cabbage, radicchio, golden beet, hazelnuts, balsamic vinaigrette, manchego All organic greens.",
        subMenuItemTime: "13.50",
        subMenuItemLink: "/"
      },{
        subMenuItemName: "Insalate Tricolore",
        subMenuItemDetails: "Roasted Chicken, arugula, cabbage, radicchio, golden beet, hazelnuts, balsamic vinaigrette, manchego All organic greens.",
        subMenuItemTime: "13.50",
        subMenuItemLink: "/"
      },{
        subMenuItemName: "Insalate Tricolore",
        subMenuItemDetails: "Roasted Chicken, arugula, cabbage, radicchio, golden beet, hazelnuts, balsamic vinaigrette, manchego All organic greens.",
        subMenuItemTime: "13.50",
        subMenuItemLink: "/"
      }]
    },{
      menuItem: "Sweets",
      subMenu: [{
        subMenuTitle: "Sweets",
        subMenuLink: "/" 
      },{
        subMenuTitle: "Pastas",
        subMenuLink: "/" 
      },{
        subMenuTitle: "Insalate Tricolore",
        subMenuLink: "/" 
      }],
      subMenuItem: [{
        subMenuItemName: "Insalate Tricolore",
        subMenuItemDetails: "Roasted Chicken, arugula, cabbage, radicchio, golden beet, hazelnuts, balsamic vinaigrette, manchego All organic greens.",
        subMenuItemTime: "13.50",
        subMenuItemLink: "/"
      },{
        subMenuItemName: "Insalate Tricolore",
        subMenuItemDetails: "Roasted Chicken, arugula, cabbage, radicchio, golden beet, hazelnuts, balsamic vinaigrette, manchego All organic greens.",
        subMenuItemTime: "13.50",
        subMenuItemLink: "/"
      },{
        subMenuItemName: "Insalate Tricolore",
        subMenuItemDetails: "Roasted Chicken, arugula, cabbage, radicchio, golden beet, hazelnuts, balsamic vinaigrette, manchego All organic greens.",
        subMenuItemTime: "13.50",
        subMenuItemLink: "/"
      },{
        subMenuItemName: "Insalate Tricolore",
        subMenuItemDetails: "Roasted Chicken, arugula, cabbage, radicchio, golden beet, hazelnuts, balsamic vinaigrette, manchego All organic greens.",
        subMenuItemTime: "13.50",
        subMenuItemLink: "/"
      }]
    },{
      menuItem: "Pastas",
      subMenu: [{
        subMenuTitle: "Sweets",
        subMenuLink: "/" 
      },{
        subMenuTitle: "Pastas",
        subMenuLink: "/" 
      },{
        subMenuTitle: "Insalate Tricolore",
        subMenuLink: "/" 
      }],
      subMenuItem: [{
        subMenuItemName: "Insalate Tricolore",
        subMenuItemDetails: "Roasted Chicken, arugula, cabbage, radicchio, golden beet, hazelnuts, balsamic vinaigrette, manchego All organic greens.",
        subMenuItemTime: "13.50",
        subMenuItemLink: "/"
      },{
        subMenuItemName: "Insalate Tricolore",
        subMenuItemDetails: "Roasted Chicken, arugula, cabbage, radicchio, golden beet, hazelnuts, balsamic vinaigrette, manchego All organic greens.",
        subMenuItemTime: "13.50",
        subMenuItemLink: "/"
      },{
        subMenuItemName: "Insalate Tricolore",
        subMenuItemDetails: "Roasted Chicken, arugula, cabbage, radicchio, golden beet, hazelnuts, balsamic vinaigrette, manchego All organic greens.",
        subMenuItemTime: "13.50",
        subMenuItemLink: "/"
      },{
        subMenuItemName: "Insalate Tricolore",
        subMenuItemDetails: "Roasted Chicken, arugula, cabbage, radicchio, golden beet, hazelnuts, balsamic vinaigrette, manchego All organic greens.",
        subMenuItemTime: "13.50",
        subMenuItemLink: "/"
      }]
    }]
  }
  constructor() { }

  ngOnInit() {
  }

}
