import { LightningElement, track } from "lwc";

export default class HelloWorld extends LightningElement {
  @track greeting = "World";
  @track myInput = "World";
  handleChange(event) {
    this.greeting = event.target.value;
    // eslint-disable-next-line no-console
    console.log("Greeting: ", this.greeting);
    this.myInput = this.greeting;
  }

  handleClick() {
    this.greeting = this.myInput + ". It's a pleasure to meet you";
  }
}
