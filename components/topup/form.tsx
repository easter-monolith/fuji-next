import { Contract } from "../../lib/types"
import Ratio from "../borrow/ratio"
import Summary from "./summary"

interface FormProps {
  contract: Contract
  ratio: number
  setRatio: any
  setTopup: any
}


const Form = ({ contract, ratio, setRatio, setTopup }: FormProps) => {
  const future = contract
  return (
    <div className="box has-pink-border">
      <h3 className="mt-4">
        <span className="stepper">1</span>
        Your present contract
      </h3>
      <Summary contract={contract} />
      <h3 className="mt-6">
        <span className="stepper">2</span>
        How much collateral do you want to add?
      </h3>
      <Ratio collateral={contract.collateral} ratio={ratio} setContractRatio={setRatio} />
      <h3 className="mt-6">
        <span className="stepper">3</span>
        Confirm new values
      </h3>
      <Summary contract={future} />
    </div>
  )
}

export default Form
