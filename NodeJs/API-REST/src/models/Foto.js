import Sequelize, { Model } from "sequelize";
import appConfig from "../config/appConfig";

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo originalname não pode ficar vazio",
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo filename não pode ficar vazio",
            },
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.getDataValue("filename")}`;
          },
        },
      },
      { sequelize, tableName: "fotos" }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.aluno, { foreignKey: "aluno_id" });
  }
}
