export class NoOrderGenerator {
  private id_customer: number;
  private running_number: number;

  constructor(id_customer: number, running_number: number) {
    this.id_customer = id_customer;
    this.running_number = running_number;
  }

  public start(): string {
    const date = new Date()
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
  
    const noOrder = `ORDER-${this.id_customer}-${day}${month}${year}-${String(this.running_number).padStart(5, '0')}`
    return noOrder;
  }
}