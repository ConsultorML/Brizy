import { ApiConnect, Account, Fields, List, Done } from "../Step";
import { BaseApp } from "../../common/GlobalApps/BaseApp";

class Mailjet extends BaseApp {
  static connect = ApiConnect;
  static account = Account;
  static fields = Fields;
  static list = List;
  static done = Done;
}

export default Mailjet;
