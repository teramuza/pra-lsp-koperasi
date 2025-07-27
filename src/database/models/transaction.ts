import {CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize} from 'sequelize';
import {Item} from "@model/item";
import {Sales} from "@model/sales";

export class Transaction extends Model<InferAttributes<Transaction>, InferCreationAttributes<Transaction, {
    omit: 'id'
}>> {
    declare id: CreationOptional<number>;
    declare quantity: number;
    declare price: number;
    declare amount: number;
    declare id_sales: number;
    declare id_item: number;

    declare Sales?: Sales;
    declare Items?: Item;

    declare static associations: {}

    static associate(models: { Sales: typeof Sales, Item: typeof Item }) {
        Transaction.belongsTo(models.Sales, { foreignKey: 'id_sales', as: 'Sales' });
        Transaction.belongsTo(models.Item, { foreignKey: 'id_item', as: 'Items' });
    }

}

export default (sequelize: Sequelize) => {
    Transaction.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_sales: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Sales',
                key: 'id',
            }
        },
        id_item: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Item',
                key: 'id',
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Transaction',
        tableName: 'transactions',
    })
    return Transaction;
}

