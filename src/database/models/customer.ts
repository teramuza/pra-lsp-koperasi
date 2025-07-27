import {CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize} from 'sequelize';

export class Customer extends Model<InferAttributes<Customer>, InferCreationAttributes<Customer, { omit: 'id' }>> {
    declare id: CreationOptional<number>;
    declare nama: string;
    declare alamat: string;
    declare telp: string;
    declare fax: string;
    declare email: string;

    declare static associations: {}

    static associate(models: {}) {
    }

    public getCustomerData() {
        return this.toJSON()
    }
}

export default (sequelize: Sequelize): typeof Customer => {
    Customer.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nama: DataTypes.STRING,
        alamat: DataTypes.STRING,
        telp: DataTypes.STRING,
        fax: DataTypes.STRING,
        email: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Customer',
        tableName: 'customers',
        timestamps: true,
    });

    return Customer;
}

