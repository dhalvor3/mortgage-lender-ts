import { LoanStatus } from "./LoanStatus";
import MortgageLender from "./MortgageLender";

export default class LoanApplication {

    private _loanAmount: number;
    dti: number;
    creditScore: number;
    savings: number;

    isQualified: boolean;
    loanStatus: any;

    constructor(loanAmount: number, dti: number, creditScore: number, savings: number) {
        this.loanAmount = loanAmount;
        this.dti = dti;
        this.creditScore = creditScore;
        this.savings = savings; 
    }

    set loanAmount(loanAmt: number) {
        this._loanAmount = loanAmt;
    }

    get loanAmount(): number{
        return this._loanAmount;
    }

    isApproved(): any {
        if (this.loanStatus == LoanStatus.Approved) {
            return true;
        } else {
            return false;
        }
    }



}