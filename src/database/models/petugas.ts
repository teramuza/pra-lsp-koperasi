import {CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize} from 'sequelize';

export class Petugas extends Model<InferAttributes<Petugas>, InferCreationAttributes<Petugas, { omit: 'id' }>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare username: string;
    declare password: string;
    declare level: number;

    static associate(models: {}) {

    }

    public getPetugasData() {
        return this.toJSON()
    }
}

export default (sequelize: Sequelize): typeof Petugas => {
    Petugas.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        level: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Petugas',
        tableName: 'petugas',
        timestamps: true,
    })
    return Petugas;
}
