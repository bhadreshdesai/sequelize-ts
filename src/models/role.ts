import { Sequelize, Model, DataTypes } from "sequelize";

class Role extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;

  static initModel(sequelize: Sequelize): Model<Role> {
    return Role.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: new DataTypes.STRING(128),
          allowNull: false
        }
      },
      {
        modelName: "Role",
        sequelize // passing the `sequelize` instance is required
      }
    );
  }
}

export default Role;
