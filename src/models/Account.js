import { DataTypes, Model } from "sequelize";
import sequelize from "../config/DB/Config.js";

class Account extends Model{}

Account.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {msg: "Necessario ser um email, para salvar"},
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {
    sequelize,
    modelName: "Account",
    tableName: 'account'
})


export default Account;
