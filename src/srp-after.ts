class Ticket {
    public name: string;
    public price: number;
    public benefits: string[];

    constructor(name: string, price: number, benefits: string[]) {
        this.name = name;
        this.price = price;
        this.benefits = benefits;
    }

    public getTicketInfo(): string {
        return `The ticket ${this.name} has a price of ${this.price}`
    }
}

class Checkout {
    public purchaseTickets(quantity: number, clientName: string, ticket: Ticket): string {
        var cost = quantity * ticket.price;
        var invoiceService  = new InvoiceService();
        var invoice = invoiceService.generateInvoice(clientName, cost, new Date());
        return invoice
    }
}

class InvoiceService {
    public generateInvoice(clientName: string, cost: number, date: Date): string {
		return `Name: ${clientName}.
			Cost: ${cost}.
			Date: ${date}.`;
	}
}

export { Ticket, Checkout }