import { CalculatorStoreModel } from "./calculator-store"

test("can be created", () => {
  const instance = CalculatorStoreModel.create({})

  expect(instance).toBeTruthy()
})
