import { NumericLiteral } from "typescript";
import LoanApplication from "./LoanApplication";

export default class MortgageLender extends LoanApplication{
    availableFunds: number = 0;
    pendingFunds: number = 0;

    addFunds(fundAmt: number): void {
        this.availableFunds += fundAmt;
    }

    reviewApplication(loanApp): void {

    }

    sendOffer(loanApp): void {

    }

    releaseOffer(loanApp): void {

    }

    approve(loanApp): void {
        this.isApproved();
    }
}