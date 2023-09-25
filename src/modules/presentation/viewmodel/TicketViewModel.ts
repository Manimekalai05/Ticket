export default class TicketViewModel {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly description: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  get properties() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
    };
  }
}
