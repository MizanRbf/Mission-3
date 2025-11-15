class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    (this.userId = userId),
      (this.userName = userName),
      (this.userBalance = userBalance);
  }
  private addBalance(balance: number) {
    return (this.userBalance = this.userBalance + balance);
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    this.userBalance;
  }
}

const mizanAccount = new BankAccount(3354345, "Mizan", 200);
