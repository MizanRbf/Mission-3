// Get and Set balance without calling function
class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    (this.userId = userId),
      (this.userName = userName),
      (this.userBalance = userBalance);
  }

  // Set Balance
  // private addBalance(balance: number) {
  //   return (this.userBalance = this.userBalance + balance);
  // }

  // Setter
  set addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }

  // Getter
  get getBalance() {
    return this.userBalance;
  }

  // Get Balance
  // getBalance() {
  //   return this.userBalance;
  // }
}

class StudentBankAccount extends BankAccount {
  test() {
    this.userBalance;
  }
}

const mizanAccount = new BankAccount(3354345, "Mizan", 200);

mizanAccount.addBalance = 33;
console.log(mizanAccount);
