import { describe, expect, jest, test } from "@jest/globals"
import AccountService from "../../service/AccountService"


describe("Account service", () => {
    const service = new AccountService();


    test("Deve retornar todos as conta", async () => {
        const contas = await service.pegarTodos();


        expect(contas).not.toBeNull();
    })
})
