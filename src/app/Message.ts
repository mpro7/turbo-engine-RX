export class Message {
    public readonly id = '';
    public readonly name = '';
    public readonly time = '';
    public readonly content = '';

    constructor (data: Partial<Message>) {
        Object.assign(this, data);
    }
}