
export class Verb {
    definitions: string[] = [];
    stem: string = ''


    constructor(definitions: string[], stem: string) {
        this.definitions = definitions
        this.stem = stem
    }

}