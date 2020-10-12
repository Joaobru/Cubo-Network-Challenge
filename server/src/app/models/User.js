import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        participation: Sequelize.STRING,
        color: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
