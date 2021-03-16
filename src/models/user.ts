import { Sequelize, Model, DataTypes } from "sequelize";

class User extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public preferredName!: string | null; // for nullable fields

  static initModel(sequelize: Sequelize) {
    return User.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: new DataTypes.STRING(128),
          allowNull: false
        },
        preferredName: {
          type: new DataTypes.STRING(128),
          allowNull: true
        }
      },
      {
        modelName: "User",
        sequelize // passing the `sequelize` instance is required
      }
    );
  }
  /*
  // useful method to return serialized version of model's instance
serialize() {
    var user = {
        id: this.get('id'),
        username: this.get('username'),
        email: this.get('email')
    };
  */
}

export default User;
