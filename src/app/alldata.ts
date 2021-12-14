export interface login{
    username: string;
    password: string;
}

export class loginC{
    username: string;
    password: string;

    constructor(obj?: loginC){
        this.username = obj && obj.username || '';
        this.password = obj && obj.password || '';
    }
}

export interface push{
    notification: bodys;
    to: string;
}

export class pushC{
    notification: bodys;
    to: string;

    constructor(obj?: push){
        this.notification = obj && obj.notification || new bodysC();
        this.to = obj && obj.to || '';
    }
}

export interface bodys{
    title: string;
    body: string;
}

export class bodysC{
    title: string;
    body: string;

    constructor(obj?: bodys){
        this.title = obj && obj.title || '';
        this.body = obj && obj.body || '';
    }
}
