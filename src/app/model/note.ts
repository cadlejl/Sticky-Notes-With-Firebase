export class Note {
    constructor(
        public content?: string,
        public completed?: boolean,
        public deleted?: boolean,
        public key?: string
    ) { }
}