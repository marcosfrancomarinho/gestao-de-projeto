export class NameRequiredError extends Error {
    constructor() {
        super("Nome é obrigatório");
        this.name = "NameRequiredError";
    }
}

export class PriceInvalidError extends Error {
    constructor() {
        super("Preço deve ser maior que zero");
        this.name = "PriceInvalidError";
    }
}

export class IdRequiredError extends Error {
    constructor() {
        super("ID é obrigatório");
        this.name = "IdRequiredError";

    }
}

export class PriceTypeInvalidError extends Error {
    constructor() {
        super("Preço deve ser um número");
        this.name = "PriceTypeInvalidError";
    }
}

export class NameTypeInvalidError extends Error {
    constructor() {
        super("Nome deve ser uma string");
        this.name = "NameTypeInvalidError";
    }
}

export class IdTypeInvalidError extends Error {
    constructor() {
        super("ID deve ser uma string");
        this.name = "IdTypeInvalidError";
    }
}