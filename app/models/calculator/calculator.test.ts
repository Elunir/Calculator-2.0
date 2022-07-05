import { CalculatorModel } from "./calculator"

test("can be created", () => {
  const instance = CalculatorModel.create({})

  expect(instance).toBeTruthy()
})
