export class studentModel {
  id: number;
  name: string;
  mobile: string;
  email: string;
  gender: string;
  doj: string;
  address: string;
  status: boolean;

  constructor() {
    this.id = 0;
    this.name = '';
    this.mobile = '';
    this.email = '';
    this.gender = '';
    this.doj = '';
    this.address = '';
    this.status = false;
  }
}
