import {
    Association,
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    Sequelize
} from 'sequelize';
import {Customer} from "./customer";
import {Transaction} from "./transaction";

export class Sales extends Model<InferAttributes<Sales>, InferCreationAttributes<Sales, { omit: 'id' }>> {
    declare id: CreationOptional<number>;
    declare tgl_sales: Date;
    declare id_customer: CreationOptional<number>;
    declare Transactions?: Transaction[];
    declare Customer?: Customer;

    declare static associations: {}

    static associate(models: { Transaction: typeof Transaction, Customer: typeof Customer }) {
        Sales.belongsTo(models.Customer, {
            foreignKey: 'id_customer',
            as: 'customer',
        })
        Sales.hasMany(models.Transaction, {
            foreignKey: 'id_sales',
        })
    }

    public getSalesData() {
        const data = this.toJSON();
        delete data?.Customer;
        delete data?.Transactions;
        return {
            ...data,
            customer: this.Customer?.toJSON(),
            transaction: this.Transactions?.map((transaction: Transaction) => transaction.toJSON()),
        }
    }
}

export default (sequelize: Sequelize): typeof Sales => {
    Sales.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        tgl_sales: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        id_customer: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    }, {
        sequelize,
        modelName: 'Sales',
        tableName: 'sales',
        timestamps: true,
    })
    return Sales;
}
