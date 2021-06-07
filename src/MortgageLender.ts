import { NumericLiteral } from "typescript";
import LoanApplication from "./LoanApplication";
import { LoanStatus } from "./LoanStatus";

export default class MortgageLender {
    private _availableFunds: number = 0;
    private _pendingFunds: number = 0;

    set loanAmount(loanAmt: number){
        this.loanAmount = loanAmt;
    }

    set availableFunds(newVal: number) {
        this._availableFunds = newVal;
    }

    get availableFunds() {
        return this._availableFunds;
    }

    set pendingFunds(newVal: number) {
        this._pendingFunds = newVal;
    }

    get pendingFunds() {
        return this._pendingFunds;
    }

    addFunds(fundAmt: number): void {
        this.availableFunds += fundAmt;
    }

    reviewApplication(loanApp): void {
        if (loanApp.dti < 36 && loanApp.creditScore > 620 && loanApp.savings / loanApp.loanAmount > .25 ) {
            loanApp.isQualified = true;
        } else {
            loanApp.isQualified = false;
        }
    }

    sendOffer(loanApp): void {
        if (loanApp.isQualified = true) {
            loanApp.loanStatus = LoanStatus.Pending;
            this.pendingFunds += loanApp.loanAmount;
            this.availableFunds = this.availableFunds - loanApp.loanAmount;
        }
    }

    releaseOffer(loanApp): void {
        if (loanApp.loanStatus === LoanStatus.Accepted  &&
            this.pendingFunds === loanApp.loanAmount) {
                this.pendingFunds = 0;
        } else {
            if (loanApp.loanStatus === LoanStatus.Rejected  &&
               this.pendingFunds === loanApp.loanAmount) {
                   this.pendingFunds = 0;
                   this.availableFunds = loanApp.loanAmount;
               }
        }
    }

    approve(loanApp): void {
        if (this.availableFunds >= loanApp.loanAmount) {
            loanApp.loanStatus = LoanStatus.Approved;
        } else {
            loanApp.loanStatus = LoanStatus.Denied;
        }
    }
}

const ml = new MortgageLender();

ml.availableFunds = 400;
console.log(ml.availableFunds);