import $ from "jquery";
import Handlebars from "handlebars";
import * as data from "./data/data.json";
// import "./styles/mystyle.scss";

export default class App {
  constructor() {
  }

  renderContent() {
    let source = $("#entry-template").html();
    let template = Handlebars.compile(source);
    
    let context = {person: data};
    let html = template(context);
      $('#wrapper').html(html); 
  }
}